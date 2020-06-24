import React from "react";

import "./styles/BadgeNew.css";

import header from "../images/platziconf-logo.svg";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import api from "../api";

class BadgeNew extends React.Component {
  /* Asi nos tramos lo que pongamos en el badgeForm hacia aca */
  state = {
    form: {
      /* Inciializamos para que no salga el error de los input en consola */
      firstName: "",
      lastName: "",
      email: "",
      jobTitle: "",
      twitter: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  //Agregamos este escuchador del submit
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      await api.badges.create(this.state.form);
      this.setState({ loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo"></img>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-6">
              <Badge
                /*Asi hacemos que aparexca eso sino se pone nada en el badge*/
                firstName={this.state.form.firstName || "First name"}
                lastName={this.state.form.lastName || "Last name"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "twitter"}
                avatar="https://s.gravatar.com/avatar/484479aae5659fd266b2864a69b7c7cd?s=80"
              />
            </div>

            <div className="col-6">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
                //Agregamos
                onSubmit={this.handleSubmit}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
