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
          <section className="hero">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Dev Prepped</h1>
                <h2 className="subtitle">
                  Get prepared for interviews, <br /> the easy way !!
                </h2>
                <Link className=" button is-primary" to="/signin">
                  Get Prepp'd
                </Link>

                {/* HOW IT WORKS SECTION */}

                <div className="columns card-section how-it-works-section">
                  <div className="column is-one-quarter home-column">
                    <div className="card">
                      <div className="card-image is-flex is-horizontal-center ">
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            src="https://bulma.io/images/placeholders/1280x960.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Take test</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <i className="fas fa-arrow-circle-right has-text-primary" />
                  </div>
                  <div className="column is-one-quarter home-column">
                    <div className="card">
                      <div className="card-image is-flex is-horizontal-center">
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            src="https://bulma.io/images/placeholders/1280x960.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Get results</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="column">
                    <i className="fas fa-arrow-circle-right has-text-primary" />
                  </div>
                  <div className="column is-one-quarter home-column">
                    <div className="card">
                      <div className="card-image is-flex is-horizontal-center">
                        <figure className="image is-128x128">
                          <img
                            className="is-rounded"
                            src="https://bulma.io/images/placeholders/1280x960.png"
                            alt="Placeholder image"
                          />
                        </figure>
                      </div>
                      <div className="card-content">
                        <div className="content">
                          <h3>Compare results</h3>
                        </div>
                      </div>
                    </div>
                  </div>
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
