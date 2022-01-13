# from .db import db
# from datetime import datetime


# class Follow(db.Model):
#     __tablename__ = "follows"

#     id = db.Column(db.Integer, primary_key=True)
#     follower = db.Column(db.Integer, db.ForeignKey("users.id"))
#     followed = db.Column(db.Integer, db.ForeignKey("users.id"))
#     reated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
#     updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now(), onupdate=datetime.now())

#     follower_id = db.relationship("User", foreign_keys=[follower])
#     followed_id = db.relationship("User", foreign_keys=[followed])

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'follower': self.post_id,
#             'followed': self.user_id,
#             'created_at': self.created_at,
#             'updated_at': self.updated_at
#         }
