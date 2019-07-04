import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="banner">
          <section class="hero">
            <div class="hero-body">
              <div class="container">
                <h1 class="title">Interview It</h1>
                <h2 class="subtitle">
                  Get prepared for interviews, <br /> the easy way !!
                </h2>
                <Link className=" button is-primary" to="/signin">
                  Get Prepp'd
                </Link>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
