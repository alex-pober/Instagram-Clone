from flask import Blueprint, jsonify, request
from app.models import db
from flask_login import login_required
from app.models import Comment
from app.forms.comment_form import NewCommentForm

comment_routes = Blueprint('comments', __name__)

# GET /api/comments/:commentId
@comment_routes.route('/<int:id>')
def get_single_comment(id):
    comment = Comment.query.get(id)
    return comment.to_dict()

# DELETE /api/comments/:commentId
@comment_routes.route('/<id>', methods=["DELETE"])
@login_required
def delete_comment(id):
    comment = Comment.query.get(id)
    db.session.delete(comment)
    db.session.commit()
    return "Post deleted"

# PUT /api/comments/:commentId
@comment_routes.route('/<id>', methods=["PUT"])
@login_required
def update_comment(id):
    form = NewCommentForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        comment = Comment.query.get(id)
        comment.comment_text = form.data['comment_text']
        db.session.commit()
        return {'comment': comment.to_dict()}
    return "comment updated"
