import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import LogoutButton from '../../auth/LogoutButton'
import { CgProfile } from "react-icons/cg";
import { BsGearWide } from "react-icons/bs";


const UserOptions = () => {
    const userId = useSelector(state => state?.session.user?.id)

    return (
        <div className="drop-downmenu">
            <NavLink to={`/users/${userId}`}>
                <p className="textProfileDropDown"><CgProfile id='profileProfile' />Profile</p>
            </NavLink>
            <NavLink to={`/profile-edit`}>
                <p className="textProfileDropDown"><BsGearWide id='gearProfile' />Edit Profile</p>
            </NavLink>
            <div className="textProfileDropDown" id="logoutButtomDiv">
                <LogoutButton/>
            </div>
        </div>

    )
}

export default UserOptions