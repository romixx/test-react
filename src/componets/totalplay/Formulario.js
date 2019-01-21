import React, {Component} from 'react'

class Formulario extends Component{
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.state = {
          inputField: ''
        };
      }

      submitHandler(evt) {
        evt.preventDefault();
        this.props.handlerFromParent(this.state.inputField);       
        this.setState({
          inputField: ''
        });
      }
      
      handleChange(event) {
        this.setState({
          inputField: event.target.value
        });
      }
    
      render() {
        return (
          <div>
            <form onSubmit={this.submitHandler}>
              <input type="text" 
                     id="theInput" 
                     value={this.state.inputField} 
                     onChange={this.handleChange} />
              <input type="submit" className="btn btn-primary"/>
            </form>
            <h5>Ver en tiempo real lo que se tecla:<br />
                <p className="text-primary" role="alert">
                    {this.state.inputField}
                </p>               
            </h5>
          </div>
        );
      }
    }

export default Formulario;