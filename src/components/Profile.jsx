import React, { Component } from 'react';
import { Redirect } from "react-router-dom";

class Profile extends Component {
  render() {
	const { userLogged } = this.props;
	if(userLogged) {
	    return (
	      <div className="content">
	      <h1>This is your profile</h1>
	      <p>Welcome user!</p>
	      </div>
	    );
	} else {
	    return (
	      <Redirect to="/login" />
	    );
	}
  }
}

export default Profile;