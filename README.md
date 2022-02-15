## AWS Integration
Pro.gram incorporates the use of AWS for the upload and storage of all photos on the application. This allows users to upload photos without needing to store them in our database, increasing the scalability of the app itself. To implement this, we first had to create an AWS bucket to store all uploaded files to, and then connect that bucket to the application. For security purposes, the bucket name and various keys associated that allow for this connection are stored as environment variables - in the .env for development, and on Heroku for production.

On the frontend, when a user fills out and submits the form for creating a new post, they are sending a mulipart/form-data body which is able to access both the form data (caption) and the uploaded file (image) that is being submitted. These are done with simple text and file inputs in an HTML form. Once that information is received on the backend, one function generates a unique filename for each upload using a UUID, and another uploads the file itself to s3. The latter function also returns a newly generated AWS URL, utilizing the s3 location and unique filename, which is stored in the database for future access. And just like that, we are able to send user-uploaded photos to AWS, store their new URLs in our database, and save precious storage space!

Setting up AWS can be a challenge at times, as you are managing data in various different forms and have to keep track of what, how, and where information is being sent. However, once functional, it is a huge asset to any application, as it allows for a significant increase in space efficiency. 

