
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getAllRandomPosts } from '../../../store/allpostsrandom'
import { BsFillHouseDoorFill } from "react-icons/bs";
import { AiOutlineCompass } from "react-icons/ai";
import { CgAddR } from "react-icons/cg";
import UserOptions from '../UserOptions/UserOptions';
import './NavBar.css'


const NavBar = () => {
  const dispatch = useDispatch();
  const [profileInfoOpen, setProfileInfoOpen] = useState(false)
  const user = useSelector(state => {
    if (state.session.user) {
      return state.session.user
    }
  })

  let circleProfile = profileInfoOpen ? 'clicked-circle' : ""
  const onClick = () => {
    dispatch(getAllRandomPosts())
  }
  // if (user?.id) setProfileInfoOpen(false)

  return (
    <nav>
      <div id='navBarDiv'>
        <NavLink to='/' exact={true} activeClassName='active'>
          <img id='logo' src='https://i.imgur.com/2V6sFyy.png' />
        </NavLink>
          {user?.id && (
            <div id='iconsDiv'>
            <NavLink to='/' exact={true} activeClassName='active'>
              <BsFillHouseDoorFill className="iconwhite" onClick={onClick} id='homeIcon' />
            </NavLink>
            <NavLink to='/new-post' exact={true} activeClassName='active'>
              <CgAddR className="iconwhite" onClick={onClick} id='addPostIcon' />
            </NavLink>
            <NavLink to='/explore' exact={true} activeClassName='active'>
              <AiOutlineCompass className="iconwhite" id='exploreIcon' />
            </NavLink>

          {/* {!user?.id && (
            <NavLink to='/login' exact={true} activeClassName='active'>
            Login
            </NavLink>
            )}
            {!user?.id && (
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
              Sign Up
              </NavLink>
            )} */}
          <div id='profilePicDiv'>
            <div id='profilePicInnerDiv'>
              <img id='profileButton' className={circleProfile} src={user?.profileURL} alt={user?.username}
                onClick={() => setProfileInfoOpen(!profileInfoOpen)}
                />
            </div>
            {profileInfoOpen && (
              <div id='userOptionsDiv' className='dropdown-content'
              onMouseLeave={() => setProfileInfoOpen(false)}
              onClick={() => setProfileInfoOpen(false)}
              >
                <UserOptions />
              </div>
            )}
          </div>
        </div>
                )}
      </div>
    </nav >
  );
}

export default NavBar;
