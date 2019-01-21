import React, {Component} from 'react';

class Header extends Component{
    // constructor(){
    //     super();
    // }

    render(){
        return (
            <header className="gris">
                <div className="container">
                    <div className="row row-sin-margen">
                        <div className="col s12">
                            <img src={require("../../images/total-logo.png")} alt="Totalplay"/>
                                <div className="titulos right hide-on-small-only">
                                    <h1 className="white-text">Internet ● Televisión ● Telefonía</h1>
                                </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}
export default Header;