import React, { Component } from "react";
import "./profile.scss";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="columns">
          <div className="column" />
          <div className="column">
            <div className="card profile-card">
              <div className="card-image">
                <figure className="image is-4by3">
                  <img
                    src="https://bulma.io/images/placeholders/1280x960.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div className="card-content">
                <div className="content">
                  <h4>John Jacob</h4>
                  <p> Bio here</p>
                </div>
              </div>
            </div>
          </div>
          <div className="column" />
        </div>
      </>
    );
  }
}

export default Profile;
