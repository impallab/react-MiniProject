import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
function Profile() {
  const { user } = useContext(UserContext)
  console.log(user);
  if (!user) return <div>Please login / sign up to see your profile</div>;
  return <div>Hey {user.username} , welcome to your profile page! </div>
}


export default Profile