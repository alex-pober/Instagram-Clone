from app.models import db, Post




 # Andres's Posts
def seed_posts():

    stevePost1 = Post(
        user_id=2,
        imgURL='https://c1.wallpaperflare.com/preview/532/515/787/california-cars-city-crosswalk.jpg',
        caption="Always remember that you are absolutely unique. Just like everyone else.")
    stevePost2 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/168/900/28/rick-and-morty-vector-graphics-car-rainbows-wallpaper-preview.jpg',
        caption="You change the world by being yourself.")
    stevePost3 = Post(
        user_id=2,
        imgURL='https://c0.wallpaperflare.com/preview/600/996/919/lebron-james-nike-basketball-sports.jpg',
        caption="Success isn’t about the end result, it’s about what you learn along the way.")
    stevePost4 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/168/900/28/rick-and-morty-vector-graphics-car-rainbows-wallpaper-preview.jpg',
        caption="You change the world by being yourself.")
    stevePost5 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/61/887/701/mono-lake-california-wallpaper-preview.jpg',
        caption="Love the life you live. Live the life you love.")
    stevePost6 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/696/292/11/game-of-thrones-jon-snow-digital-art-fantasy-art-wallpaper-preview.jpg',
        caption="Love Is The Death Of Duty.")
    stevePost7 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-preview.jpg',
        caption="We become what we think about.")
    stevePost8 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/267/666/423/joker-2019-movie-joker-joaquin-phoenix-movies-dancing-hd-wallpaper-preview.jpg',
        caption="I thought my life was a tragedy, turns out it’s a comedy.")
    stevePost9 = Post(
        user_id=2,
        imgURL='https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg',
        caption="I lost some weight once, but I found it again in the fridge.")



    raulPost1 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/635/977/307/digital-art-computer-map-wallpaper-preview.jpg',
        caption="Stay true to yourself and never let what somebody else says distract you from your goals.")
    raulPost2 = Post(
        user_id=3,
        imgURL='https://w0.peakpx.com/wallpaper/769/6/HD-wallpaper-apple-macbook-computer-imac-ipad-iphone-ipod-laptop-mac-technology.jpg',
        caption="Mac is just so much better than any other computer.")
    raulPost3 = Post(
        user_id=3,
        imgURL='https://c0.wallpaperflare.com/preview/600/996/919/lebron-james-nike-basketball-sports.jpg',
        caption="Success isn’t about the end result, it’s about what you learn along the way.")
    raulPost4 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/168/900/28/rick-and-morty-vector-graphics-car-rainbows-wallpaper-preview.jpg',
        caption="You change the world by being yourself.")
    raulPost5 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/61/887/701/mono-lake-california-wallpaper-preview.jpg',
        caption="Love the life you live. Live the life you love.")
    raulPost6 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/696/292/11/game-of-thrones-jon-snow-digital-art-fantasy-art-wallpaper-preview.jpg',
        caption="Love Is The Death Of Duty.")
    raulPost7 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/52/465/301/illustration-landscape-digital-art-mountains-wallpaper-preview.jpg',
        caption="We become what we think about.")
    raulPost8 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/267/666/423/joker-2019-movie-joker-joaquin-phoenix-movies-dancing-hd-wallpaper-preview.jpg',
        caption="I thought my life was a tragedy, turns out it’s a comedy.")
    raulPost9 = Post(
        user_id=3,
        imgURL='https://c4.wallpaperflare.com/wallpaper/946/557/290/ice-cream-food-colorful-wallpaper-preview.jpg',
        caption="I lost some weight once, but I found it again in the fridge.")



    ronaldPost1 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
        caption="Got an idea.")
    ronaldPost2 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="I need a six-month holiday, twice a year.")
    ronaldPost3 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1183&q=80',
        caption="We tried to be normal once. Worst two minutes of our lives!.")
    ronaldPost4 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1495106245177-55dc6f43e83f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="We don't care what people think of us. Unless they're our customers. We definitely care what customers think of us.")
    ronaldPost5 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1594769124879-8b361d7a7554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="No thoughts brain empty just tacos and cats.")
    ronaldPost6 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1468971050039-be99497410af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
        caption="I know the voices in my head aren't real, but sometimes their ideas are just too good to ignore.")
    ronaldPost7 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1563657908433-d34c679c07b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Don't worry if plan A fails. There are 25 more letters in the alphabet.")
    ronaldPost8 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1560696811-f59310b1eb38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
        caption="If you fall, I will be there. Signed, Floor.")
    ronaldPost9 = Post(
        user_id=4,
        imgURL='https://images.unsplash.com/photo-1521097971132-6426103fb897?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        caption="Darn it, just accidentally had another thought again.")



    susanPost1 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1543221423-7c9b7c16778c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Patience — what you have when there are too many witnesses.")
    susanPost2 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1501457191481-671f811805de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Better an oops than a what if.")
    susanPost3 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1566713198695-80ada6ed1c18?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1132&q=80',
        caption="The world is changed by your example, not your opinion.")
    susanPost4 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1612814621951-b24b753ca716?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        caption="Seven billion smiles and these are my favorite.")
    susanPost5 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1443106479821-1617f92e6983?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Don’t quit your daydream.")
    susanPost6 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1524856949007-80db29955b17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="If you can’t convince them, confuse them.")
    susanPost7 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1584000046021-2edb5ff7e6ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
        caption="When nothing goes right, go left.")
    susanPost8 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1609215366798-4efbfe607f3c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Life is simple. It's just not easy.")
    susanPost9 = Post(
        user_id=5,
        imgURL='https://images.unsplash.com/photo-1509030034677-7e7fd91edc6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
        caption="Stop working hard and start working smart.")



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
