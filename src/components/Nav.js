import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <img
            src={require("../media/dev-prepped-logo-new.png")}
            width="170"
            height="62"
          />
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
              {/* <NavLink
                activeClassName="active "
                className="button is-primary"
                to="https://www.google.com/"
              >
                <span class="icon is-small">
                  <i class="fab fa-github" />
                </span>
                <span>Sign in with github</span>
              </NavLink> */}

              <a
                href="https://www.google.com/"
                activeClassName="active "
                className="button is-primary"
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
  );
}

export default Nav;
