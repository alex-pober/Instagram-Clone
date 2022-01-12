from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    name='Demo', username='demo', profileURL='https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-512.png', email='demo@aa.io', hashed_password='password', bio='This is a test Bio')
    steve = User(
        name='steve', username='stevo', profileURL='https://4.bp.blogspot.com/-txKoWDBmvzY/XHAcBmIiZxI/AAAAAAAAC5o/wOkD9xoHn28Dl0EEslKhuI-OzP8_xvTUwCLcBGAs/s320/2.jpg', email='stevo@gmail.com', hashed_password='barsa1', bio='Be all in or get out. There is no in-between.')
    raul = User(
        name='raul', username='roy', profileURL='', email='roy@gmail.com', hashed_password='cookielover1', bio='Creativity solves everything.')
    ronald = User(
        name='ronald', username='rony', profileURL='https://images.megapixl.com/4707/47075236.jpg', email='ronald@gmail.com', hashed_password='bakeit4ever1', bio='I would rather die of passion than of boredom.')
    susan = User(
        name='susan', username='susy', profileURL='https://cdn.icon-icons.com/icons2/1999/PNG/512/avatar_people_person_profile_user_woman_icon_123355.png', email='susy@gmail.com', hashed_password='marlonhere1', bio='A very caffeine dependent life form.')

    db.session.add(demo)
    db.session.add(steve)
    db.session.add(raul)
    db.session.add(ronald)
    db.session.add(susan)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
