from .db import db
from datetime import datetime
from sqlalchemy import DateTime


class Comment(db.Model):
    __tablename__ = "comments"

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"),nullable=False)
    comment_text = db.Column(db.String(2000), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now(), onupdate=datetime.now())


    users = db.relationship('User', back_populates='comments')
    posts = db.relationship("Post", back_populates="comments")


    def to_dict(self):



        return {
            "id": self.id,
            "user_id": self.user_id,
            "post_id": self.post_id,
            "comment_text": self.comment_text,
            "user": self.user.to_dict()
        }
