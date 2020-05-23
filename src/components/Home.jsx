import React, { Component } from "react";
import WOW from "wowjs";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    new WOW.WOW({
      live: false,
    }).init();
  }

  render() {
    return (
      <div className="d-flex fimg justify-content-center align-items-center">
        <div
          className="card-opacity "
          data-wow-duration="2.5s" // El tiempo del elemento realiza la acción establecida. cuyo formato de ejemplo sería 2.5s
          //data-wow-delay="5s" // El tiempo que se demora en empezar la ejecucion del elemento. cuyo formato de ejemplo sería 2.5s
          data-wow-iteration="infinite" //La cantidad de veces que hará la iteración hasta que se detenga.El valor de entrada es numerico(infinite)
          //data-wow-offset="100" // Inicia el efecto de movimiento cuando la distancia sea la asignada, tomando como inicio la parte inferior de la web. El valor de entrada es numerico.
        >
          <h1
            className="text-center wow pulse"
            data-wow-duration="3s"
            data-wow-iteration="infinite"
          >
            EJERCICIOS REACT
          </h1>
        </div>
      </div>
    );
  }
}

export default Home;
