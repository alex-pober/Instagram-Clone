from flask import Blueprint, jsonify
from flask_login import login_required
from app.models import Post
from app.forms import NewPostForm

post_routes = Blueprint('posts', __name__)


# GET /api/posts/:id
@post_routes.route('/<int:id>')
def get_post(id):
    post = Post.query.get(id)
    return post.to_dict()

# POST /api/posts
@post_routes.route('/', method=["POST"])
@login_required
# NEED TO GET USER ID FROM FRONT END
def new_post(id):
    form = NewPostForm()
    if form.validate_on_submit():
        post = Post(
            user_id=id
            imgURL=form.data['imgURL']
            caption=form.data['caption']
        )
        db.session.add(post)
        db.session.commit()
        return post.to_dict()
    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# PUT /api/posts/:id
@post_routes.route('/', method=["PUT"])
@login_required
def update_post(id):
    form = NewPostForm()
    if form.validate_on_submit():
        post = Post.query.get(id)
        post['caption'] = form.data['caption']
        db.session.commit()
        return post.to_dict()
    print(form.errors)
    return {'errors': validation_errors_to_error_messages(form.errors)}, 401


# DELETE /api/posts/:id
@post_routes.route('/', method=["DELETE"])
@login_required
def delete_post(id):
    post = Post.query.get(id)
    db.session.delete(post)
    db.session.commit()

# GET /api/posts/:username (FOR FEED)
