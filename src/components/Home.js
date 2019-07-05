import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <div className="banner">
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title is-size-1">Dev Prepped</h1>
                <h2 className="subtitle">
                Dev interviews can be hard and intimidating. We prep you to handle every question with lighting fast grace and perfection!<br/>
                Track your progress and get prepped to tackle any interview!{" "}
                </h2>

                <Link className=" button is-danger is-medium" to="/signin">
                  Get Prepp'd
                </Link>

                {/* HOW IT WORKS SECTION */}
                <hr/>
                <div className="block1">
                  <h2 className="title is-size-4	title1">How it works ?</h2>
                  <div className="columns card-section how-it-works-section">
                    <div className="column is-one-quarter home-column">
                      <div className="homeCard">
                        <div className="card-image is-flex is-horizontal-center ">
                          <figure className="image is-128x128">
                            <i class="fas fa-file-code" />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <h3>Take test</h3>
                          </div>
                          <p>
                            Take category based tests within dynamic
                            time-limits.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <i className="fas fa-arrow-circle-right has-text-danger" />
                    </div>
                    <div className="column is-one-quarter home-column">
                      <div className="homeCard">
                        <div className="card-image is-flex is-horizontal-center">
                          <figure className="image is-128x128">
                            <i class="fas fa-file-medical-alt" />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <h3>Get results</h3>
                          </div>
                          <p>
                            Understand how you performed, in terms of questions.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="column">
                      <i className="fas fa-arrow-circle-right has-text-danger" />
                    </div>
                    <div className="column is-one-quarter home-column">
                      <div className="homeCard">
                        <div className="card-image is-flex is-horizontal-center">
                          <figure className="image is-128x128">
                            <i class="fas fa-file-invoice" />
                          </figure>
                        </div>
                        <div className="card-content">
                          <div className="content">
                            <h3>Compare results</h3>
                          </div>
                          <p>
                            Learn about your progress and evaluate your growth
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
<hr/>
                <h2 className="title is-size-4	title2">Who is it For ?</h2>
                <div className="columns for-who-section">
                  <div className="column" />
                  <div className="column is-one-quarter home-column">
                    <div className="homeCard">
                      <div className="card-image is-flex is-horizontal-center">
                        <figure className="image is-128x128">
                          <i class="fas fa-user-graduate" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Students</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column" />
                  <div className="column is-one-quarter home-column">
                    <div className="homeCard">
                      <div className="card-image is-flex is-horizontal-center">
                        <figure className="image is-128x128">
                          <i class="fab fa-accessible-icon" />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Job Seekers</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column" />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    );
  }
}

export default Home;
