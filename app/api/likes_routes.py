from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, Like, Post

like_routes = Blueprint('likes', __name__)

# GET /api/likes/<int:id>
@like_routes.route('/<int:id>')
@login_required
def get_likes():
  like = Like.query.all()

