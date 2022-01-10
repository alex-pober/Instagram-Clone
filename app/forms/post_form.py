from flask_wtf import FlaskForm
from wtforms import StringField, TextAreaField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Post

class NewPostForm(FlaskForm):
    imgURL = StringField('Image URL', validators=[DataRequired()])
    caption = StringField('Caption')
    submit = SubmitField('Submit')
