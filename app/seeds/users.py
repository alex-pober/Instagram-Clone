from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        name='Demo', username='demo', profileURL='https://dineoncampus.com/img/staff-placeholder.jpg', email='demo@aa.io', hashed_password='pbkdf2:sha256:260000$zNq4os2B7Tn5JUUj$bf1cf29de9847813eeee16369984dfc5ea110c0986f436078fce9a3894f36203', bio='This is a test Bio')
    steve = User(
        name='steve', username='stevo', profileURL='https://4.bp.blogspot.com/-txKoWDBmvzY/XHAcBmIiZxI/AAAAAAAAC5o/wOkD9xoHn28Dl0EEslKhuI-OzP8_xvTUwCLcBGAs/s320/2.jpg', email='stevo@gmail.com', hashed_password='pbkdf2:sha256:260000$NmOG1iunIrxaHDmK$5a749c524ac431a4c7a1c2496893e9e9376b0eb511c0f40b7a56856533197763', bio='Be all in or get out. There is no in-between.')
    raul = User(
        name='raul', username='roy', profileURL='https://dineoncampus.com/img/staff-placeholder.jpg', email='roy@gmail.com', hashed_password='pbkdf2:sha256:260000$WPg2LWhb1xIfMDwN$885e7cf952e07e1a360bd368c70adf2595985d9dd4e73baf9e0797acaf5ed15a', bio='Creativity solves everything.')
    ronald = User(
        name='ronald', username='rony', profileURL='https://images.megapixl.com/4707/47075236.jpg', email='ronald@gmail.com', hashed_password='pbkdf2:sha256:260000$1VplqmGDpJCoRwRJ$9836268dc67e008195ab32b99201c824f2a3e7166098460d17bfcd3ebae0b884', bio='I would rather die of passion than of boredom.')
    susan = User(
        name='susan', username='susy', profileURL='https://images.pexels.com/photos/3361154/pexels-photo-3361154.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260', email='susy@gmail.com', hashed_password='abc', bio='A very caffeine dependent life form.')

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
