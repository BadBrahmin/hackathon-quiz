import React from "react";
import { NavLink } from "react-router-dom";

class Nav extends React.Component {

  render() {

    return (
      <>
        <div className="navbar" role="navigation" aria-label="main navigation">
          <div className="navbar-brand">
            <p>Interview It</p>
          </div>
  
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <NavLink
                  exact
                  activeClassName="active "
                  className="button is-primary"
                  to="/"
               >

                  Home
                </NavLink>
                <a
                  className="button is-primary"
                  href="http://localhost:4000/auth/github"
                >
                  <span class="icon is-small">
                    <i class="fab fa-github" />
                  </span>
                  <span>Sign in with github</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div />
      </>
    )
  }
}

export default Nav;
