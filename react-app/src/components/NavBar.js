
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import DemoButton from './auth/DemoUser';
import { useSelector } from 'react-redux';

const NavBar = () => {
  const userId = useSelector(state => {
    if (state.session.user) {
      return state.session.user.id
    }
  })

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/feed' exact={true} activeClassName='active'>
            Home
          </NavLink>
        </li>
        {!userId && (
          <li>
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          </li>
        )}
        {!userId && (
          <li>
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          </li>
        )}
        {/* <li>
          <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>
        </li> */}
        {userId && (
          <li>
            <LogoutButton />
          </li>
        )}
        {!userId && (
          <li>
            <DemoButton />
          </li>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
