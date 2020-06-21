import React from 'react';

class BadgeForm extends React.Component {

    /* Cuando le agregamos el value al input hay que inicializar el state */
    state = {
        //Si quiere que el input ya sale con algo escrito
        jobTitle: 'Developer'
    }

    handleChange = e => {

        /* console.log({ 
            name: e.target.name,
            value: e.target.value,
        }); */


        /* setState es el lugar donde se va a guardar la informacion. */
        this.setState({
            //Asi guarda en el name del input, el valor que se le escriba.
            [e.target.name]: e.target.value,
        })
    }

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
                        {/* 
                        Esta informacion se esta guardando en dos sitios, cada input guarda su propio valor, 
                        y ademas le esta diciendo al setState guarda este valor. No queremos eso. 
                        
                        Para eso tenemos que cambiar nuestros inputs de no controlados a controlados. Agregando el props de value
                        
                         */}
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName" value={this.state.firstName}></input>
                    </div>

                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="lastName" value={this.state.lastName}></input>
                    </div>

                    <div className="form-group">
                        <label>Email</label>
                        <input onChange={this.handleChange} className="form-control" type="email" name="email" value={this.state.email}></input>
                    </div>

                    <div className="form-group">
                        <label>Job Title</label>
                        <input onChange={this.handleChange}className="form-control" type="text" name="jobTitle" value={this.state.jobTitle}></input>
                    </div>

                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange}className="form-control" type="text" name="twitter" value={this.state.twitter}></input>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>

        )
    }
}

export default BadgeForm;