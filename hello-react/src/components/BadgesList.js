import React from 'react';

import './styles/BadgeList.css'

import twitterLogo from '../images/twitterLogo.svg'

class BadgesList extends React.Component{
    render(){
        return(
            <div className="BadgesList">
                <ul className="list-unstyled">
                    {/* vamos a mapear cada uno de los objetos que estan en state (en badges.js)y los
                    metemos dentro de la variable badge */}
                    {this.props.badges.map((badge) => {
                        return(
                            <li key={badge.id}>
                                <div className="image">
                                    <img className="" src={badge.avatarUrl} alt="mierda"></img>
                                </div>

                                <div className="about">
                                    <div className="about__name">
                                        <p>{badge.firstName} {badge.lastName}</p>
                                    </div>
                                    <div className="about__job">
                                        <p>{badge.jobTitle}</p>
                                    </div>
                                    <div className="about__twitter">
                                        <div className="twitter__logo">
                                        <img src={twitterLogo} alt="mierdsa2"></img>
                                        </div>
                                        <p>@{badge.twitter}</p>
                                    </div>
                                </div>

                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}

export default BadgesList;