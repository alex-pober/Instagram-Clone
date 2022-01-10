from .db import db

class Like(db.Model):
    __tablename__ = "likes"
    id = db.Column(db.Integer, primary_key=True),
    post_id = db.Column(db.Integer, nullable=False),
    user_id = db.Column(db.Integer, nullable=False, db.ForeignKey("users.id"))
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)

    users = db.relationship("User", back_populates="likes")
    posts = db.relationship("Post", back_populates="likes")

    def to_dict(self):
        return {
            'id': self.id,
            'post_id': self.post_id,
            'user_id': self.user_id,
            'created_at': self.created_at,
            'updated_at': self.updated_at
        }
