import React from "react";
import * as ROUTES from "../../constants/routes";
import { Link, NavLink } from "react-router-dom";
import { red } from "@material-ui/core/colors";
import "./index.css";

/* 
const Navigation = () => <div>VacTrax</div>;


  <div>
    <AuthUserContext.Consumer>
      {(authUser) => (authUser ? <NavigationAuth /> : <NavigationNonAuth />)}
    </AuthUserContext.Consumer>
  </div>
  
);
*/

const Navigation = () => (
  <div>
    <nav className="navbar navbar-expand-lg navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ">
          {
            //<li className="nav-item">
            //<NavLink className="nav-link" to={ROUTES.HOME}>
            //Home
            //</NavLink>
            //</li>}
          }

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={ROUTES.HOME}
              style={{ fontFamily: "copperplate" }}
            >
              VacTrax
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={ROUTES.USERS}
              style={{ fontFamily: "copperplate" }}
            >
              myTrax
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav ml-auto">
          {
            //<li className="nav-item">
            //<NavLink className="nav-link" to={ROUTES.HOME}>
            //Home
            //</NavLink>
            //</li>}
          }
          <li className="nav-item">
            <NavLink
              className="nav-link"
              to={ROUTES.EVENTS}
              style={{ fontFamily: "copperplate" }}
            >
              Local Events
            </NavLink>
          </li>
        </ul>
        {/*
        <AuthUserContext.Consumer>
          {(authUser) =>
            authUser && (
              <React.Fragment>
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={ROUTES.ACCOUNT}>
                      {authUser.email.toString()}
                    </NavLink>
                  </li>
                  <li className="nav-item">
                 
                    <NavLink className="nav-link" to={ROUTES.SIGN_OUT}>
                      Logout
                    </NavLink>
                  </li>
                </ul>
              </React.Fragment>
            )
          }
        </AuthUserContext.Consumer>
        */}
      </div>
    </nav>
  </div>
);

export default Navigation;
