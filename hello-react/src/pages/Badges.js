import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();

    /* Aplicaremos el polling, esto srive para que cada cierto 
    determinado se vaya al servidor a pedir datos y se 
    actualice auto maticamente*/
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    /* Sirve para cancelar el poolling al pasar de pagina */
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    /* This.state.error es del polling para que no se muestre
    el loading cuando se ejecute el polling */
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />

          {/* Esto es del polling
          si eso es true entoces ensena el loading
           */}
          {this.state.loading && "Loading..."}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
