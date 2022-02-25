import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'
import DemoButton from './DemoUser'
import Footer from "../footer"

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors('Login failed. Please try again.');
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
     <div className="mainsignup">
      <img className="loginImage" src="https://i.imgur.com/whoaWyj.png"></img>
      <div className="signup">
        <form onSubmit={onLogin}>
          <div className="errors">
            {errors && (
              <div>{errors}</div>
            )}
          </div>
          <div>
            <img src="https://i.imgur.com/2V6sFyy.png"></img>
            <input
              name='email'
              placeholder="Email"
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div>
            <input
              name='password'
              placeholder="Password"
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
            <br></br>
            <button type='submit'>Login</button>
            <br></br>
          <DemoButton/>
        </form>
        <div>
          <p>Don't have an account?
            <a href="/sign-up">   Sign Up</a>
          </p>
        </div>
      </div>
    </div>
    <br></br>
    <Footer />
    </>
  );
};

export default LoginForm;
