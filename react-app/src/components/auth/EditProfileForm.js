import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { EditProfile } from '../../store/session';

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
    return errors

  }



  const onEditProfile = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (errors.length > 0) return setErrors(errors);

    const updated = await dispatch(EditProfile(user_id, username, bio, profileURL));
    if (updated) {
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
    <form onSubmit={onEditProfile}>
      <div>
        {errors?.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <div>
        <label>User Name</label>
        <input type='text' name='username' onChange={updateUsername} value={username} required />
      </div>
      <div>
        <label>Profile Picture URL</label>
        <input type='text' name='profileURL' onChange={updateProfileURL} value={profileURL} />
      </div>
      <div>
        <label>Bio</label>
        <textarea type='text' name='bio' onChange={updateBio} value={bio} />
      </div>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default EditProfileForm;
