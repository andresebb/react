import React from 'react';

class BadgeForm extends React.Component {

    /* Haremos que pase lo que se llene aqui en badgeform a  badge*/
    /* Cambiamos el valor de onchange de los inputs 


    Movimos el estado de aca de badgeform al badNew, que ahora le compart
    esa informacion al badge y al formulario.

    
    /* 


    Este ya no se usare, porque lo acomodamos en badgenew
    
    handleChange = e => {

        this.setState({
            [e.target.name]: e.target.value,
        })
    } */

    handleClick = e => {
        console.log('Button was clicked');
    }

    handleSubmit = e => {
        
        e.preventDefault();
        console.log("Form was submmitted");
        console.log(this.state)
    }

    render(){
        return(

            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="firstName" value={this.props.formValues.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.props.onChange} className="form-control" type="text" name="lastName" value={this.props.formValues.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.props.onChange} className="form-control" type="email" name="email" value={this.props.formValues.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.props.onChange}className="form-control" type="text" name="jobTitle" value={this.props.formValues.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.props.onChange}className="form-control" type="text" name="twitter" value={this.props.formValues.twitter}></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>

        )
    }
}

export default BadgeForm;