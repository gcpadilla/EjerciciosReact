import React from "react";

const Punto9Card = (props) => {
  return (
    <>
      <div className="card mr-3">
        <div className="card-header bg-info text-white">
          Nombre: {props.datos.nombre}
        </div>
        <div className="card-body text-dark">
          <h5 className="card-title">Categoria: {props.datos.categoria}</h5>
          <p className="card-text">Descripcion: {props.datos.descripcion}</p>
          <button
            className="btn btn-danger"
            onClick={() => props.remove(props.datos.id)}
          >
            Borrar
          </button>
        </div>
      </div>
    </>
  );
};

export default Punto9Card;
