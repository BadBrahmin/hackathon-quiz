import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
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
              <NavLink
                activeClassName="active "
                className="button is-primary"
                to="/signin"
              >
                <span class="icon is-small">
                  <i class="fab fa-github" />
                </span>
                <span>Sign in with github</span>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      <div />
    </>
  );
}

export default Nav;
