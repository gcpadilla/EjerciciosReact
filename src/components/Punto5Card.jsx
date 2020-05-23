import React from 'react';

const Punto5Card = (props) => {


  return (
    <>
      <div className="card mt-3 ml-3">
        <div className="card-header">
          <h5>Color: {props.datos.color}</h5>
        </div>
        <div className="card-body">
          <div className="alert alert-success" role="alert">
            <div className="d-flex flex-row justify-content-center align-items-center">
              <div
                className="cuadrado mr-2"
                style={{ backgroundColor: props.datos.color }}
              ></div>
            </div>
          </div>
          <button
            className="btn btn-danger float-right mb-3 sombra"
            onClick={() => props.remove(props.datos.id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Punto5Card;