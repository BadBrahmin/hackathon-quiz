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
              <strong>Interview It</strong> by altcampus
            </p>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
