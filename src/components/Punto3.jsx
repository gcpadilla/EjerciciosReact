import React, { Component } from "react";

class Punto3 extends Component {
  state = { texto: "Hello my friend!" };

  botonArriba = () => {
    this.setState({
      texto: "the mouse is on the button!",
    });
  };

  botonClik = () => {
    this.setState({
      texto: "you clicked!",
    });
  };

  botonLeave = () => {
    this.setState({
      texto: "Mouse is go on!",
    });
  };

  render() {
    return (
      <>
        <div className="container margenTop f">
        <h3 className="mt-3"><span className="text-info">Ejercicio 3:</span> Crear state</h3>
          <div className="row">
            <div className="col"></div>
            <div className="col-6 border border-dark">
              <h5 className="text-center">{this.state.texto}</h5>
              <button
                onMouseEnter={this.botonArriba}
                onClick={this.botonClik}
                onMouseLeave={this.botonLeave}
                type="button"
                className="btn btn-outline-primary mb-2"
              >
                click me
              </button>
            </div>
            <div className="col"></div>
          </div>
        </div>
      </>
    );
  }
}

export default Punto3;
