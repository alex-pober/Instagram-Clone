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

    const updated = await dispatch(EditProfile(user_id, username, name, bio, profileURL));
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
      <div>
        <span className="edit-profile-title">Edit Profile</span>
      </div>
      <div className="splitlabels">
        <div className='labels'>
          <label>User Name</label>
          <label>Profile Picture URL</label>
          <label>Name</label>
          <label >Bio</label>
        </div>
        <form className="editProfileForm"onSubmit={onEditProfile}>
          <div>
            <input type='text' name='username' onChange={updateUsername} value={username} />
          </div>
          <div>
            <input type='text' name='profileURL' onChange={updateProfileURL} value={profileURL} />
          </div>
          <div>
            <input type='text' name='name' onChange={updateName} value={name} />
          </div>
          <div>
            <textarea className='input-element-edit-prof' type='text' name='bio' onChange={updateBio} value={bio} />
          </div>
          <button class='submit-new-comment' type='submit'>Submit</button>
          <div className="errors">
            {errors?.map((error, ind) => (
          <div key={ind}>{error}</div>
          ))}
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfileForm;
