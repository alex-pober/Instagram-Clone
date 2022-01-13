
"""create_users_table

Revision ID: ffdc0a98111c
Revises:
Create Date: 2020-11-20 15:06:02.230689

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'ffdc0a98111c'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():

    op.create_table('users',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('name', sa.String(length=100), nullable=False),
    sa.Column('username', sa.String(length=50), nullable=False, unique=True),
    sa.Column('profileURL', sa.String(length=2000)),
    sa.Column('email', sa.String(length=255), nullable=False, unique=True),
    sa.Column('hashed_password', sa.String(length=255), nullable=False, unique=True),
    sa.Column('bio', sa.String(length=400)),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    )

    op.create_table('posts',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('imgURL', sa.String(length=2000), nullable=False),
    sa.Column('caption', sa.String(length=2000), nullable=True),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], )
    )

    op.create_table('follows',
    sa.Column('follower_id', sa.Integer(), nullable=False),
    sa.Column('followed_id', sa.Integer(), nullable=False),

    sa.ForeignKeyConstraint(['follower_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['followed_id'], ['users.id'], )
    )

    op.create_table('likes',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], )
    )

    op.create_table('comments',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('post_id', sa.Integer(), nullable=False),
    sa.Column('comment_text', sa.String(length=2000), nullable=False),
    sa.Column('created_at', sa.DateTime(), nullable=False),
    sa.Column('updated_at', sa.DateTime(), nullable=False),

    sa.PrimaryKeyConstraint('id'),
    sa.ForeignKeyConstraint(['user_id'], ['users.id'], ),
    sa.ForeignKeyConstraint(['post_id'], ['posts.id'], )
    )



def downgrade():

    op.drop_table('users')
    op.drop_table('posts')
    op.drop_table('follows')
    op.drop_table('likes')
    op.drop_table('comments')
