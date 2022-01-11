from flask import Blueprint, jsonify, request
from app.models import db
from flask_login import login_required
from app.models import Post
from app.forms import NewPostForm

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
    data = request.json
    form = NewPostForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        post = Post(
            user_id=data['user_id'],
            imgURL=form.data['imgURL'],
            caption=form.data['caption']
        )
        db.session.add(post)
        print("PRINT ID HERE >>>>>", post)
        db.session.commit()
        return post.to_dict()
    return (form.errors)


# PUT /api/posts/:id
@post_routes.route('/<id>', methods=["PUT"])
@login_required
def update_post(id):
    form = NewPostForm()
    print('*******************************', form.data['caption'])
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        post = Post.query.get(id)
        post.caption = form.data['caption']
        db.session.commit()
        return {'post': post.to_dict()}
    return "Post updated"


# DELETE /api/posts/:id
@post_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()
    return "Post deleted"

# GET /api/posts/:username (FOR FEED)
