import React from 'react';

/* const punto2 = ({otrosaludo, otrosaludomas}) => {

    return (
        <h1 className="text-center">Hello {otrosaludo} {otrosaludomas}</h1>
    )
}
export default punto2; */

//CON PROPS
const punto2 = (props) => {

    return (
      <div className="container">
      <h3 className="mt-3"><span className="text-info">Ejercicio 2:</span> Crear componente y envierle props</h3>
        <h5 className="text-center margenTop f">
          Hello my (props1) {props.saludo} (props2) {props.saludo1}
        </h5>
      </div>
    );
}
export default punto2;
