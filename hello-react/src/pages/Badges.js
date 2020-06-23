import React from "react";

import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import BadgesList from "../components/BadgesList";

import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  /* El mejor lugar par llamar a una api es aca, en el componentDidMount */
  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    /* cuando se incia la peticion pasa esto */
    this.setState({ loading: true, error: null });

    /* Si la api nos trae los datos, loading pasa a false
    y metemos esos datos en data */
    try {
      //Vease api.js
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    if (this.state.loading === true) {
      return "Loading...";
    }

    console.log("2/4. render()");
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-log"
                src={confLogo}
                alt="pinchi imagen"
              ></img>
            </div>
          </div>
        </div>

        <div className="Badge__container">
          <div className="Badges__buttons">
            <Link to="badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
        </div>

        <div className="Badges__list">
          <div className="Badges__container">
            <BadgesList badges={this.state.data} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
