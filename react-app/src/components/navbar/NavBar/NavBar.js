
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import UserOptions from '../UserOptions/UserOptions';
import './NavBar.css'


const NavBar = () => {
  const [profileInfoOpen, setProfileInfoOpen] = useState(false)
  const user = useSelector(state => {
    if (state.session.user) {
      return state.session.user
    }
  })

  let post = 'a'

  return (
    <nav>
      <div id='navBarDiv'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img id='logo' src='https://i.imgur.com/2V6sFyy.png' />
        </NavLink>
        <div id='iconsDiv'>
          <NavLink to='/' exact={true} activeClassName='active'>
            <BsFillHouseDoorFill id='homeIcon' />
          </NavLink>
          <NavLink to='/new-post' exact={true} activeClassName='active'>
            <CgAddR id='addPostIcon' />
          </NavLink>
          <NavLink to='/explore' exact={true} activeClassName='active'>
            <AiOutlineCompass id='exploreIcon' />
          </NavLink>
          {!user?.id && (
            <NavLink to='/login' exact={true} activeClassName='active'>
              Login
            </NavLink>
          )}
          {!user?.id && (
            <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
            </NavLink>
          )}
          <div id='profilePicDiv'>
            <img id='profileButton' src={user?.profileURL} alt={user?.username} onClick={() => setProfileInfoOpen(!profileInfoOpen)} />
          </div>
          <NavLink to={`/users/${user?.id}`} exact={true} activeClassName='active'>
          </NavLink>
          {/* {user.id && (
            <LogoutButton />
          )} */}

        <i id='userOptionsDiv'>
          {profileInfoOpen && (
            <UserOptions />
          )}
        </i>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;