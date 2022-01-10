from .db import db
import datetime

class Post(db.Model):
    __tablename__ = 'posts'

    id = db.Column(db.Integer, primary_key=True),
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False),
    imgURL = db.Column(db.String(2000), nullable=False),
    caption = db.Column(db.String(2000)),
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    users = db.relationship("User", back_populates="posts", cascade="all,delete")
    comments = db.relationship("Comment", back_populates="posts", cascade="all,delete")
    likes = db.relationship("Like", back_populates="posts", cascade="all,delete")


    def to_dict(self):

        return {
            'id': self.id,
            'user_id': self.user_id,
            'imgURL': self.imgURL,
            'caption': self.caption,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
