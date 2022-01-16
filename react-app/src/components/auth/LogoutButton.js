import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';

const LogoutButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const onLogout = async (e) => {
    await dispatch(logout());
    history.push(`/`)
  };

  return <p id='logoutButtom' onClick={onLogout}>Sign out</p>;
};

export default LogoutButton;
