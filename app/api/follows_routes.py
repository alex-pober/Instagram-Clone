from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import db, User

follows_routes = Blueprint('follows', __name__)

#GET /api/follows/<int:id>
## PEOPLE YOU FOLLOW
@follows_routes.route('/<int:id>')
@login_required
def get_follows(id):
    user = User.query.get(id)
    follows = user.following.all()
    return {'follows': [follow.to_dict() for follow in follows]}

#GET /api/follows/<int:id>
## PEOPLE FOLLOWING **YOU**
@follows_routes.route('/<int:id>/followers')
@login_required
def get_your_followers(id):
    user = User.query.get(id)
    followers = user.followers.all()
    return {'followers': [follower.to_dict() for follower in followers]}

#POST
@follows_routes.route('/<int:id>/new-follow', methods=["POST"])
@login_required
def post_follow(id):
    
    user = User.query.get(id)
    followerId = request.json['followerId']
    followedId = request.json['followedId']

    followers = user.followers.all()
    newFollower = User.query.get(followerId)

    if newFollower in user.followers:
        user.followers.remove(newFollower)
        db.session.commit()
        return newFollower.to_dict()
    else:
        user.followers.append(newFollower)
        db.session.commit()
        return newFollower.to_dict()