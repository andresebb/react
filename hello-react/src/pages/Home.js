import React from "react";
import { Link } from "react-router-dom";

import "./styles/Home.css";

import astronauts from "../images/astronauts.svg";
import confLogo from "../images/platziconf-logo.svg";

class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home__container">
          <div className="home__left">
            <img src={confLogo} alt="conf logo" />
            <h2>Print your badges</h2>
            <p>
              The easiest way to manage <br />
              your conference
            </p>
            <Link className="boton" to="badges/new">
              Start Now
            </Link>
          </div>
          <div className="home-right">
            <img src={astronauts} alt="logo" />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
