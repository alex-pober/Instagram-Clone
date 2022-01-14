from app.models import db, Like

def seed_likes():
    demoLike1 = Like(
        userId=1,
        postId=1
    )
    demoLike2 = Like(
        userId=1,
        postId=2
    )
    demoLike3 = Like(
        userId=1,
        postId=3
    )
    steveLike1 = Like(
        userId=2,
        postId=4
    )
    steveLike2 = Like(
        userId=2,
        postId=4
    )
    steveLike3 = Like(
        userId=2,
        postId=3
    )
    steveLike4 = Like(
        userId=2,
        postId=6
    )
    steveLike5 = Like(
        userId=2,
        postId=7
    )
    steveLike6 = Like(
        userId=2,
        postId=8
    )
    steveLike7 = Like(
        userId=2,
        postId=9
    )
    steveLike8 = Like(
        userId=2,
        postId=10
    )
    steveLike9 = Like(
        userId=2,
        postId=21
    )
    raulLike1 = Like(
        userId=3,
        postId=5
    )
    raulLike2 = Like(
        userId=3,
        postId=6
    )
    raulLike3 = Like(
        userId=3,
        postId=7
    )
    raulLike4 = Like(
        userId=3,
        postId=8
    )
    raulLike5 = Like(
        userId=3,
        postId=9
    )
    ronaldLike1 = Like(
        userId=4,
        postId=10
    )
    ronaldLike2 = Like(
        userId=4,
        postId=11
    )
    ronaldLike3 = Like(
        userId=4,
        postId=8
    )
    ronaldLike4 = Like(
        userId=4,
        postId=3
    )
    susanLike1 = Like(
        userId=5,
        postId=2
    )
    susanLike2 = Like(
        userId=5,
        postId=1
    )
    susanLike3 = Like(
        userId=5,
        postId=8
    )
    db.session.add(demoLike1)
    db.session.add(demoLike2)
    db.session.add(demoLike3)
    db.session.add(steveLike1)
    db.session.add(steveLike2)
    db.session.add(steveLike3)
    db.session.add(steveLike4)
    db.session.add(steveLike5)
    db.session.add(steveLike6)
    db.session.add(steveLike7)
    db.session.add(steveLike8)
    db.session.add(steveLike9)
    db.session.add(raulLike1)
    db.session.add(raulLike2)
    db.session.add(raulLike3)
    db.session.add(raulLike4)
    db.session.add(raulLike5)
    db.session.add(ronaldLike1)
    db.session.add(ronaldLike2)
    db.session.add(ronaldLike3)
    db.session.add(ronaldLike4)
    db.session.add(susanLike1)
    db.session.add(susanLike2)
    db.session.add(susanLike3)
    db.session.commit()

def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()