import React, {Component} from 'react';
import Formulario from './Formulario';

class Main extends Component{
    constructor() {
        super();
        this.handleData = this.handleData.bind(this);       
        this.state = {
          fromChild: ''
        };
      }
      
    handleData(data) {// esta funcion se ejecuta desde el componente Formulario en el OnSubmit
        this.setState({
            fromChild: data
        });
        var datosWS = conexionWS();
        datosWS.then(success=>{
            console.log(success);
        }).catch(err=>{
            alert(err);
        })
        
        
    }
      

    render(){
        return (
            <div className="row">
                <div className="col-md-4">
                    <Formulario handlerFromParent={this.handleData} />
                </div>
                <div className="col-md-8">
                    <h5>Recibiendo en la clase padre:<br />
                        <p className="text-success" role="alert">
                            {this.state.fromChild}
                            
                        </p>
                    </h5>
                </div>
            </div>
        );
    }
}

export default Main;



function conexionWS() {
    return new Promise((res, rej)=>{
        fetch('url', {
        method: 'get'
        })
        .then((response) => {
            res(response.json());
        }).catch((err)=>{
            rej("error "+err);
        });
    })

    
}

