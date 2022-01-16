import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import EditProfileForm from './components/auth/EditProfileForm';
import NavBar from './components/navbar/NavBar/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import { getAllPosts } from './store/posts';
import { getAllLikesAllPosts } from './store/likesfromallposts';
import NewPostForm from './components/posts/NewPostForm';
import UserFeed from './components/posts/UserFeed'
import SinglePost from './components/posts/SinglePost';
import SinglePostModal from './components/posts/SinglePostModal'
import EditPostForm from './components/posts/EditPostForm';
import NewCommentForm from './components/comments/NewComment';
import EditCommentForm from './components/comments/EditCommentForm'
import ExploreFeed from './components/posts/ExploreFeed';
// import ProfilePage from './components/profile/ProfilePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      await dispatch(getAllPosts())
      await dispatch(getAllLikesAllPosts())
      setLoaded(true);
    })();
  }, [dispatch]);


  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <UserFeed />
        </Route>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/profile-edit'exact={true}>
          <EditProfileForm />
        </Route>
        <Route path='/explore' exact={true}>
          <ExploreFeed />
        </Route>
        <Route path='/new-post' exact={true}>
          <NewPostForm />
        </Route>
        <Route path='/posts/:id/new-comment' exact={true}>
          <NewCommentForm />
        </Route>
        <Route path='/comments/:id/edit' exact={true}>
          <EditCommentForm />
        </Route>
        <Route path='/posts/:id' exact={true}>
          <SinglePost />
        </Route>
        <Route path='/posts/:id/edit'>
          <EditPostForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route>
          <Redirect to='/' />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
