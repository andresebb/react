import React from "react";

import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";

import BadgesList from "../components/BadgesList";

class Badges extends React.Component {
  /* Introduccion del ciclo de vida de un comopnente */

  /* Aca en constructor tenemos que inicializar la super clase
  que en este caso es component, por eso se le cola propss
  */
  constructor(props) {
    super(props);
    console.log("1. constructor()");
    /* Aqui en constructor es donde se incializa el state 
    por defecto lo incializaremos vacio, para asi llamarlos 
    en didmount
    */

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    console.log("3.componentDidMount()");

    /* Simularemos una peticion a un api */

    this.timeoutId = setTimeout(() => {
      this.setState({
        data: [
          {
            id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
            firstName: "Freda",
            lastName: "Grady",
            email: "Leann_Berge@gmail.com",
            jobTitle: "Legacy Brand Director",
            twitter: "FredaGrady22221-7573",
            avatarUrl:
              "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon",
          },
          {
            id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
            firstName: "Major",
            lastName: "Rodriguez",
            email: "Ilene66@hotmail.com",
            jobTitle: "Human Research Architect",
            twitter: "MajorRodriguez61545",
            avatarUrl:
              "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon",
          },
          {
            id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
            firstName: "Daphney",
            lastName: "Torphy",
            email: "Ron61@hotmail.com",
            jobTitle: "National Markets Officer",
            twitter: "DaphneyTorphy96105",
            avatarUrl:
              "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon",
          },
        ],
      });
    }, 3000);
  }

  /* 
  CompodidUpdate sucede despues de ejecutarse el render

  Recibe dos argumentos
  los pros que teniamos antos y el state que teniamos antes*/
  componentDidUpdate(prevProps, prevState) {
    console.log("5. componentDidUpdate()");
  }

  /* Sucede antes de que se vaya el componente del dom */
  componentWillUnmount() {
    console.log("6. componentWillUnmount");

    //Se hace para que no salga error en consola,
    clearTimeout(this.timeoutId);
  }

  render() {
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
