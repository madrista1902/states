import React from 'react';

const Profile = ({ person }) => {
  const { fullName, bio, imgSrc, profession } = person;

  return (
    <div>
      <img src={imgSrc} alt="profile" />
      <h1>{fullName}</h1>
      <h2>{profession}</h2>
      <p>{bio}</p>
    </div>
  );
};

export default Profile;
