import React, { Component } from 'react';
import Encabezado from './componets/totalplay/Header';
// import Tabla from './componets/Tabla'
import Main from './componets/totalplay/Main';
import Footer from './componets/totalplay/Footer'
class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row-fluid">
          <Encabezado message="Hola" />
        </div>
        <div className="row-fluid">
          <Main />
        </div>
        <div className="row-fluid">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
