import React, { Component } from 'react';

class Profile extends Component {
  render() {
    const { fullName, bio, imgSrc, profession } = this.props.person;

    return (
      <div>
        <img src={imgSrc} alt="profile" />
        <h1>{fullName}</h1>
        <h2>{profession}</h2>
        <p>{bio}</p>
      </div>
    );
  }
}

export default Profile;
