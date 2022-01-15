from app.models import db, Like

def seed_likes():
    demoLike1 = Like(
        user_id=1,
        post_id=1
    )
    demoLike2 = Like(
        user_id=1,
        post_id=2
    )
    demoLike3 = Like(
        user_id=1,
        post_id=3
    )
    steveLike1 = Like(
        user_id=2,
        post_id=4
    )
    steveLike2 = Like(
        user_id=2,
        post_id=4
    )
    steveLike3 = Like(
        user_id=2,
        post_id=3
    )
    steveLike4 = Like(
        user_id=2,
        post_id=6
    )
    steveLike5 = Like(
        user_id=2,
        post_id=7
    )
    steveLike6 = Like(
        user_id=2,
        post_id=8
    )
    steveLike7 = Like(
        user_id=2,
        post_id=9
    )
    steveLike8 = Like(
        user_id=2,
        post_id=10
    )
    steveLike9 = Like(
        user_id=2,
        post_id=21
    )
    raulLike1 = Like(
        user_id=3,
        post_id=5
    )
    raulLike2 = Like(
        user_id=3,
        post_id=6
    )
    raulLike3 = Like(
        user_id=3,
        post_id=7
    )
    raulLike4 = Like(
        user_id=3,
        post_id=8
    )
    raulLike5 = Like(
        user_id=3,
        post_id=9
    )
    ronaldLike1 = Like(
        user_id=4,
        post_id=10
    )
    ronaldLike2 = Like(
        user_id=4,
        post_id=11
    )
    ronaldLike3 = Like(
        user_id=4,
        post_id=8
    )
    ronaldLike4 = Like(
        user_id=4,
        post_id=3
    )
    susanLike1 = Like(
        user_id=5,
        post_id=2
    )
    susanLike2 = Like(
        user_id=5,
        post_id=1
    )
    susanLike3 = Like(
        user_id=5,
        post_id=8
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