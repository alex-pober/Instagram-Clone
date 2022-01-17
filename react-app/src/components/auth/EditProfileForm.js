import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { EditProfile } from '../../store/session';
import './EditProfileForm.css'

const EditProfileForm = () => {
  const history = useHistory()
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profileURL, setprofileURL] = useState('');
  const [name, setName] = useState('')
  const user_id = useSelector(state => state.session?.user?.id);
  const userSession = useSelector(state => state.session.user)
  const dispatch = useDispatch();

  useEffect(() => {
    setUsername(userSession.username)
    setBio(userSession.bio)
    setprofileURL(userSession.profileURL)
    setName(userSession.name)
  }, [])

  const validate = () => {
    const errors = [];


    if (!username) {
      errors.push("Please provide an updated username.")
    }
    if (profileURL.length > 2000) {
      errors.push("Please provide a valid URL.")
    }
    if (!profileURL) errors.push('Please provide an image URL for your profile picture.');
    setErrors(errors)
    return errors;
  }

  const onEditProfile = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (errors.length > 0) return setErrors(errors);

    const updated = await dispatch(EditProfile(user_id, username, bio, name, profileURL));
    console.log(updated)
    if (updated[0].includes('Username is already in use')) {
      console.log(updated[0])
      setErrors(updated)
      console.log(errors)

    } else {
      history.push(`/users/${user_id}`)
    }
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateProfileURL = (e) => {
    setprofileURL(e.target.value);
  };

  const updateName = (e) => {
    setName(e.target.value);
  };

  if (!user_id) {
    return <Redirect to='/feed' />;
  }


  return (
    <>
    <div className='page-container'>
      <div className='edit-profile-container'>
        <div id='edit-profile-title'>
          <p id='edit-profile-title-text'>Edit Profile</p>
        </div>
        <form className="editProfileForm" onSubmit={onEditProfile}>
          <div id="error-container">
            {errors?.map((error, ind) => (
              <div key={ind} className='error-item'>{error}</div>
            ))}
          </div>
          <div className='user-input'>
            <label for='username'>User Name</label>
            <input type='text' name='username' onChange={updateUsername} value={username} />
          </div>
          <div className='user-input'>
            <label for='profileURL'>Profile Picture URL</label>
            <input type='text' name='profileURL' onChange={updateProfileURL} value={profileURL} />
          </div>
          <div className='user-input'>
            <label for='bio'>Bio</label>
            <input className='input-element-edit-prof' type='text' name='bio' onChange={updateBio} value={bio} />
          </div>
          <div className='user-input'>
            <label for='name'>Name</label>
            <input className='input-element-edit-prof' type='text' name='name' onChange={updateName} value={name} />
          </div>
          <button class='button-edit-prof' type='submit'>Submit</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditProfileForm;
