import React, { useState } from 'react';
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
  const user_id = useSelector(state => state.session?.user?.id);
  const dispatch = useDispatch();


  const validate = () => {
    const errors = [];
    if (!username) {
      errors.push("Please provide an updated username.")
    }
    if (!profileURL) errors.push('Please provide an image URL for your profile picture.');
    setErrors(errors)
    return errors;
  }

  const onEditProfile = async (e) => {
    e.preventDefault();
    let errors = validate();
    if (errors.length > 0) return setErrors(errors);

    const updated = await dispatch(EditProfile(user_id, username, bio, profileURL));
    if (updated[0].includes('Username is already in use')) {
      console.log(updated)
      console.log(errors)
      console.log(updated[0].split(":")[1])

      setErrors([updated[0].split(':')[1]])
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

  if (!user_id) {
    return <Redirect to='/feed' />;
  }


  return (
    <div className="post-main-edit-prof">
      <div className="newpost-edit-profile">

        <form onSubmit={onEditProfile}>
            <div>
              {errors?.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
         <div>
            <img src="https://i.imgur.com/2V6sFyy.png"></img>
          <label>User Name</label>
          <input type='text' name='username' onChange={updateUsername} value={username} required />
        </div>
        <div>
          <label>Profile Picture URL</label>
              <input type='text' name='profileURL' onChange={updateProfileURL} value={profileURL} />
            </div>
              <div>
                <label>Bio</label>
              <input className='input-element-edit-prof' type='text' name='bio' onChange={updateBio} value={bio} />
            </div>

          <button className='button-edit-prof' type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
