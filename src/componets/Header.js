import React, { Component } from 'react';

class Header extends Component {
    constructor(){
        super();
        this.state = {
            message: "my friend (from state)!"
        };
        this.updateMessage = this.updateMessage.bind(this);
    }
     updateMessage() {
         this.setState({
             message: "my friend (from changed state)!"
         });
     }   
  render() {
    return (
        <header className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" to="javascript:void()">{  this.props.message } {  this.state.message }</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" to="javascript:void()">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" to="javascript:void()">Link</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" to="javascript:void()" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a className="dropdown-item" to="javascript:void()">Action</a>
                        <a className="dropdown-item" to="javascript:void()">Another action</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" to="javascript:void()">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link disabled" to="javascript:void()">Disabled</a>
                    </li>
                </ul>
                <button className="btn btn-primary" onClick={this.updateMessage}>cambiar estatus!</button>
            </div>
        </header>
    );
  }
}

export default Header;
