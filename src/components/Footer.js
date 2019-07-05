import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <footer class="footer is-primary">
          <div class="content has-text-centered">
            <p>
              <strong>Dev Prepped</strong>, a Hackathon product from{" "}
              <a href="https://altcampus.io">AltCampus</a>
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
