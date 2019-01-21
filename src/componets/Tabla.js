import React, { Component } from 'react';

class Header extends Component {
    
    constructor(){
        super();
        this.state = {
            //message: "my friend (from state)!", 
            tabla: []
        }; 
               
    }
    
    handleClick = () => {
        console.log('this is:', this);
        alert("hola " + this.state.message);
        this.setState({
            message: " Alan!"
        });
        fetch('url', {
            method: 'get'
        })
        .then((response) => {
            return response.json()
        })
        .then((respuesta) => {         
            this.setState({ tabla: respuesta })
        }).catch((err)=>{
            alert("error "+err);
        });
    }

  render() {
    return (
        <div className="">
            <button className="btn btn-success" onClick={this.handleClick}> pruebame</button>
            <div className="table-responsive">
                <table className="table" border="1">
                    <thead>
                        <tr>
                            <th>
                                Vehículo
                            </th>
                        </tr>
                    </thead>
                    <tbody>                        
                    {
                        this.state.tabla.map(fila=>(
                            <tr>
                                <td>
                                    {fila.v001}
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    );
  }
}

export default Header;
