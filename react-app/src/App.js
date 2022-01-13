import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import NewPostForm from './components/posts/NewPostForm';
import UserFeed from './components/posts/UserFeed'
import SinglePost from './components/posts/SinglePost';
import EditPostForm from './components/posts/EditPostForm';
import NewCommentForm from './components/comments/NewComment';
import EditCommentForm from './components/comments/EditCommentForm'
// import ProfilePage from './components/profile/ProfilePage';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
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
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/feed' exact={true}>
          <UserFeed />
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
        <ProtectedRoute path='/' exact={true} >
          <h1>My Home Page</h1>
        </ProtectedRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
