from flask import Blueprint, jsonify, request
from app.models import db
from flask_login import login_required, current_user
from app.models import Post, Like, Comment, db
from app.forms import NewPostForm
from app.forms.comment_form import NewCommentForm
import random
from app.AWS.aws import (upload_file_to_s3, allowed_file, get_unique_filename)


post_routes = Blueprint('posts', __name__)


# GET /api/posts/:id
@post_routes.route('/<int:id>')
def get_post(id):
    post = Post.query.get(id)
    return post.to_dict()


# GET /api/posts
@post_routes.route('/')
def get_feed():
    posts = Post.query.all()
    return {'posts': [post.to_dict() for post in posts]}

# POST /api/posts


@post_routes.route('/', methods=["POST"])
@login_required
def new_post():
    if "image" not in request.files:
        return {"errors": "image required"}, 400

    image = request.files["image"]
    data = request.form
    if not allowed_file(image.filename):
        return {"errors": "file type not permitted"}, 400
    image.filename = get_unique_filename(image.filename)
    upload = upload_file_to_s3(image)

    if "url" not in upload:
        return upload, 400
    imgURL = upload["url"]

    form = NewPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id=data['user_id'],
            imgURL=imgURL,
            caption=form.data['caption']
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    return (form.errors)


# PUT /api/posts/:id
@post_routes.route('/<id>', methods=["PUT"])
@login_required
def update_post(id):
    form = NewPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post.query.get(id)
        post.caption = form.data['caption']
        db.session.commit()
        return {'post': post.to_dict()}
    return (form.errors)

# GET /api/postsrandom


@post_routes.route('/random-order-posts')
def get_random_posts():
    posts = Post.query.all()
    allPosts = [post.to_dict() for post in posts]
    random.shuffle(allPosts)
    return {'allrandomposts': allPosts}


# DELETE /api/posts/:id
@post_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return "Post deleted"

# GET /api/posts/:username (FOR FEED)


# LIKES
# POST /api/posts/<int:id>/likes
@post_routes.route('/<int:id>/likes', methods=["POST"])
@login_required
def post_like(id):
    user_id = request.json['userId']
    post_id = request.json['postId']
    existing_like = Like.query.filter(
        Like.user_id == user_id, Like.post_id == id).all()
    if existing_like:
        db.session.delete(existing_like[0])
        db.session.commit()
        return jsonify(existing_like[0].to_dict())
    else:
        new_like = Like(
            user_id=user_id,
            post_id=post_id
        )
        db.session.add(new_like)
        db.session.commit()
        return jsonify(new_like.to_dict())


# COMMENTS

# GET /api/posts/:id/comments
@post_routes.route('/<int:id>/comments')
def get_posts_comments(id):
    comments = Comment.query.filter(Comment.post_id == id).all()
    return {'comments': [comment.to_dict() for comment in comments]}


# POST /api/posts/:id/comments
@post_routes.route('/<int:id>/comments', methods=["POST"])
@login_required
def new_comment(id):
    data = request.json
    form = NewCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment(
            user_id=data['user_id'],
            post_id=data['post_id'],
            comment_text=form.data['comment_text']
        )
        db.session.add(comment)
        db.session.commit()
        return comment.to_dict()
    return (form.errors)


# GET /api/postsforlikes
@post_routes.route('/forlikes')
def get_posts_likes():
    posts = Post.query.all()
    return {'posts': [post.likes_to_dict() for post in posts]}
