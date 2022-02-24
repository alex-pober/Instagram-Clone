import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import './SignUpForm.css'
import Footer from "../footer"


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const validate = () => {
    const errors = [];



    if (!username) {
      errors.push("Please provide a username.")
    }
    if (!name) errors.push('Please provide a name.');
    if (!email || !email.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) errors.push('Please provide a valid email address.');
    if (!password) errors.push('Please provide a password');
    if (!repeatPassword) errors.push('Please confirm your password.');
    if (!(password === repeatPassword)) errors.push('Passwords did not match.')

    return errors

  }

  const onSignUp = async (e) => {
    e.preventDefault();
    const errors = validate();

    if (errors.length > 0) return setErrors(errors);



    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, name, email, password));
      if (data) {
        setErrors(data)
      }
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
    <div className="mainsignup">
      <img className="loginImage" src="https://i.imgur.com/whoaWyj.png"></img>
      <div className="signup">
        <form onSubmit={onSignUp}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div>
            <img src="https://i.imgur.com/2V6sFyy.png"></img>
            <p>Sign up to see photos and videos from your friends.</p>
            <input
              type='text'
              placeholder='Username'
              name='username'
              onChange={updateUsername}
              value={username}
            ></input>
          </div>
          <div>
            <input
              type='text'
              placeholder='Name'
              name='name'
              onChange={updateName}
              value={name}
            ></input>
          </div>
          <div>
            <input
              type='text'
              placeholder='Email'
              name='email'
              onChange={updateEmail}
              value={email}
            ></input>
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              name='password'
              onChange={updatePassword}
              value={password}
            ></input>
          </div>
          <div>
            <input
              type='password'
              placeholder='Confirm Password'
              name='repeat_password'
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
            ></input>
          </div>
          <br></br>
          <button type='submit'>Sign Up</button>
        </form>
        <div>
          <p>Have an account?
            <a tabindex="0" href="/login">   Log in</a>
          </p>
        </div>
      </div>
    </div>
    <br></br>
    <Footer />
    </>
  );
};

export default SignUpForm;
