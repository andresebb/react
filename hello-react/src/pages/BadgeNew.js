import React from 'react';


import './styles/BadgeNew.css';

import header from '../images/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';



class BadgeNew extends React.Component {
    render() {
        return(
            <div>
                <Navbar/>
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo">

                    </img>
                </div>
                
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Andres" lastName="Betancourt" jobTitle="Frontend Dev" twitter="andresebb" avatar="https://s.gravatar.com/avatar/484479aae5659fd266b2864a69b7c7cd?s=80"/>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default BadgeNew;