import React from 'react';

class BadgeForm extends React.Component {

    /* Asi se maneja el evento de input en react */
    handleChange = e => {
        /* Asi vemos que se va escribiendo en el input */
        console.log({ 
            name: e.target.name,
            value: e.target.value,
        });
    }

    /* Si el boton esta type submit la pagina se recarga,
    Si no queremos que eso pase le ponemos type button
    */
    handleClick = e => {
        console.log('Button was clicked');
    }

    render(){
        return(

            <div>
                <h1>New Attendant</h1>
                <form>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange}className="form-control" type="text" name="firstName"></input>
                    </div>
                    <button type="button" onClick={this.handleClick} className="btn btn-primary">Save</button>
                </form>
            </div>

        )
    }
}

export default BadgeForm;