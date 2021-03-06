from app.models import db, Post


def seed_posts():
    demoPost1 = Post(
        user_id=1,
        imgURL='https://images.pexels.com/photos/3913025/pexels-photo-3913025.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="If you want to be strong, learn how to fight alone.",
        created_at="2022-01-15 10:10:47.293288")
    demoPost2 = Post(
        user_id=1,
        imgURL='https://images.pexels.com/photos/3970330/pexels-photo-3970330.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        caption="I don't need your attitude, I have my own.",
        created_at="2022-01-16 10:10:47.293288")
    demoPost3 = Post(
        user_id=1,
        imgURL='https://images.pexels.com/photos/3825569/pexels-photo-3825569.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption="Life is the biggest party you'll ever be at.",
        created_at="2022-01-17 10:10:47.293288")


    stevePost1 = Post(
        user_id=2,
        imgURL='https://c1.wallpaperflare.com/preview/532/515/787/california-cars-city-crosswalk.jpg',
        caption="Always remember that you are absolutely unique. Just like everyone else.",
        created_at="2022-01-15 10:10:47.293288")
    stevePost2 = Post(
        user_id=2,
        imgURL='https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="You change the world by being yourself.",
        created_at="2022-01-16 10:22:47.293288")
    stevePost3 = Post(
        user_id=2,
        imgURL='https://c0.wallpaperflare.com/preview/600/996/919/lebron-james-nike-basketball-sports.jpg',
        caption="Success isn't about the end result, it's about what you learn along the way.",
        created_at="2022-01-15 11:10:47.293288")
    stevePost4 = Post(
        user_id=2,
        imgURL='https://images.pexels.com/photos/167590/pexels-photo-167590.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="You change the world by being yourself.",
        created_at="2022-01-13 10:12:47.293288")
    stevePost5 = Post(
        user_id=2,
        imgURL='https://images.pexels.com/photos/264279/pexels-photo-264279.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Love the life you live. Live the life you love.",
        created_at="2022-01-11 09:10:47.293288")
    stevePost6 = Post(
        user_id=2,
        imgURL='https://images.pexels.com/photos/3211459/pexels-photo-3211459.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Love Is The Death Of Duty.",
        created_at="2022-01-13 10:10:47.293288")
    stevePost7 = Post(
        user_id=2,
        imgURL='https://images.pexels.com/photos/876218/pexels-photo-876218.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        caption="We become what we think about.",
        created_at="2022-01-14 10:10:47.293288")
    stevePost8 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/267/666/423/joker-2019-movie-joker-joaquin-phoenix-movies-dancing-hd-wallpaper-preview.jpg',
        caption="I thought my life was a tragedy, turns out it's a comedy.",
        created_at="2022-01-12 08:10:47.293288")
    stevePost9 = Post(
        user_id=2,
        imgURL='https://images.pexels.com/photos/1658967/pexels-photo-1658967.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="I lost some weight once, but I found it again in the fridge.",
        created_at="2022-01-17 10:10:47.293288")



    raulPost1 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/635/977/307/digital-art-computer-map-wallpaper-preview.jpg',
        caption="Stay true to yourself and never let what somebody else says distract you from your goals.",
        created_at="2022-01-16 10:10:47.293288")
    raulPost2 = Post(
        user_id=3,
        imgURL='https://w0.peakpx.com/wallpaper/769/6/HD-wallpaper-apple-macbook-computer-imac-ipad-iphone-ipod-laptop-mac-technology.jpg',
        caption="Mac is just so much better than any other computer.",
        created_at="2022-01-12 10:10:47.293288")
    raulPost3 = Post(
        user_id=3,
        imgURL='https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Success isn't about the end result, it's about what you learn along the way.",
        created_at="2022-01-13 10:07:47.293288")
    raulPost4 = Post(
        user_id=3,
        imgURL='https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="You change the world by being yourself.",
        created_at="2022-01-09 10:10:47.293288")
    raulPost5 = Post(
        user_id=3,
        imgURL='https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Love the life you live. Live the life you love.",
        created_at="2022-01-14 10:11:47.293288")
    raulPost6 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/696/292/11/game-of-thrones-jon-snow-digital-art-fantasy-art-wallpaper-preview.jpg',
        caption="Love Is The Death Of Duty.",
        created_at="2022-01-16 11:10:48.293288")
    raulPost7 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-preview.jpg',
        caption="We become what we think about.",
        created_at="2022-01-15 10:10:48.293288")
    raulPost8 = Post(
        user_id=3,
        imgURL='https://images.pexels.com/photos/6043246/pexels-photo-6043246.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="I thought my life was a tragedy, turns out it's a comedy.",
        created_at="2022-01-11 10:10:47.293288")
    raulPost9 = Post(
        user_id=3,
        imgURL='https://images.pexels.com/photos/685778/pexels-photo-685778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="I lost some weight once, but I found it again in the fridge.",
        created_at="2022-01-09 10:10:47.293288")



    ronaldPost1 = Post(
        user_id=4,
        imgURL='https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Got an idea.",
        created_at="2022-01-13 09:10:47.293288")
    ronaldPost2 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="I need a six-month holiday, twice a year.",
        created_at="2022-01-16 11:10:47.293288")
    ronaldPost3 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80',
        caption="We tried to be normal once. Worst two minutes of our lives!.",
        created_at="2022-01-14 10:10:47.293288")
    ronaldPost4 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="We don't care what people think of us. Unless they're our customers. We definitely care what customers think of us.",
        created_at="2022-01-13 10:10:47.293288")
    ronaldPost5 = Post(
        user_id=4,
        imgURL='https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="No thoughts brain empty just tacos and cats.",
        created_at="2022-01-07 10:10:47.293288")
    ronaldPost6 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        caption="I know the voices in my head aren't real, but sometimes their ideas are just too good to ignore.",
        created_at="2022-01-17 07:10:47.293288")
    ronaldPost7 = Post(
        user_id=4,
        imgURL='https://images.pexels.com/photos/3274903/pexels-photo-3274903.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Don't worry if plan A fails. There are 25 more letters in the alphabet.",
        created_at="2022-01-15 09:11:47.293288")
    ronaldPost8 = Post(
        user_id=4,
        imgURL='https://images.pexels.com/photos/33317/windows-building-pattern-modern.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="If you fall, I will be there. Signed, Floor.",
        created_at="2022-01-16 10:11:47.293288")
    ronaldPost9 = Post(
        user_id=4,
        imgURL='https://images.pexels.com/photos/34107/milky-way-stars-night-sky.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Darn it, just accidentally had another thought again.",
        created_at="2022-01-09 03:10:47.293288")



    susanPost1 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1543221423-7c9b7c16778c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Patience ??? what you have when there are too many witnesses.",
        created_at="2022-01-15 02:11:50.293288")
    susanPost2 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1501457191481-671f811805de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Better an oops than a what if.",
        created_at="2022-01-16 04:10:47.293288")
    susanPost3 = Post(
        user_id=5,
        imgURL='https://images.pexels.com/photos/4179480/pexels-photo-4179480.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="The world is changed by your example, not your opinion.",
        created_at="2022-01-16 03:11:42.293288")
    susanPost4 = Post(
        user_id=5,
        imgURL='https://images.pexels.com/photos/2835562/pexels-photo-2835562.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        caption="Seven billion smiles and these are my favorite.",
        created_at="2022-01-17 12:10:47.293288")
    susanPost5 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1443106479821-1617f92e6983?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Don't quit your daydream.",
        created_at="2022-01-12 10:10:47.293288")
    susanPost6 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1524856949007-80db29955b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="If you can't convince them, confuse them.",
        created_at="2022-01-11 10:10:47.293288")
    susanPost7 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1584000046021-2edb5ff7e6ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        caption="When nothing goes right, go left.",
        created_at="2022-01-10 08:10:47.293288")
    susanPost8 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1609215366798-4efbfe607f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Life is simple. It's just not easy.",
        created_at="2022-01-12 07:10:47.293288")
    susanPost9 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1509030034677-7e7fd91edc6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Stop working hard and start working smart.",
        created_at="2022-01-15 10:10:48.293288")



    db.session.add(demoPost1)
    db.session.add(demoPost2)
    db.session.add(demoPost3)

    db.session.add(stevePost1)
    db.session.add(stevePost2)
    db.session.add(stevePost3)
    db.session.add(stevePost4)
    db.session.add(stevePost5)
    db.session.add(stevePost6)
    db.session.add(stevePost7)
    db.session.add(stevePost8)
    db.session.add(stevePost9)

    db.session.add(raulPost1)
    db.session.add(raulPost2)
    db.session.add(raulPost3)
    db.session.add(raulPost4)
    db.session.add(raulPost5)
    db.session.add(raulPost6)
    db.session.add(raulPost7)
    db.session.add(raulPost8)
    db.session.add(raulPost9)

    db.session.add(ronaldPost1)
    db.session.add(ronaldPost2)
    db.session.add(ronaldPost3)
    db.session.add(ronaldPost4)
    db.session.add(ronaldPost5)
    db.session.add(ronaldPost6)
    db.session.add(ronaldPost7)
    db.session.add(ronaldPost8)
    db.session.add(ronaldPost9)


    db.session.add(susanPost1)
    db.session.add(susanPost2)
    db.session.add(susanPost3)
    db.session.add(susanPost4)
    db.session.add(susanPost5)
    db.session.add(susanPost6)
    db.session.add(susanPost7)
    db.session.add(susanPost8)
    db.session.add(susanPost9)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_posts():
    db.session.execute('TRUNCATE posts RESTART IDENTITY CASCADE;')
    db.session.commit()
