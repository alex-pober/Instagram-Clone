from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, URL, ValidationError
from app.models import User

def username_exists(form, field):
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

class EditProfileForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), username_exists])
    bio = StringField('bio')
    profileURL = StringField('profileURL')