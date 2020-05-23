import React from "react";

const Punto7Card = (props) => {

  const mostrar = ()=> {
console.log(props.datos.id)
  }
  return (
    <>
      <div className="card sombra mb-5 ml-3 text-dark">
        <div className="card-body">
          <div className="d-flex flex-row">
            <div className="spinner-grow text-primary" role="status">
              <span className="sr-only">Loading...</span>
            </div>

            <div>
              <div className="card-text">Mascota: {props.datos.Mascota}</div>
              <div className="card-text text-black-50">
                Dueño: {props.datos.Dueño}
              </div>
            </div>
          </div>

          <div className="alert-primary text-black">
            <div className="d-flex flex-nowrap m-2">
              <label className="col-form-label col-form-label-sm  mt-3">
                Fecha:
              </label>
              <div className="col-sm-10  mt-3">
                <input
                  type="date"
                  name="Mascota"
                  value={props.datos.Fecha}
                  className="form-control form-control-sm text-capitalize"
                  disabled
                />
              </div>
            </div>

            <div className="d-flex flex-nowrap m-2">
              <label className="col-form-label col-form-label-sm  mt-3">
                Hora:
              </label>
              <div className="col-sm-10  mt-3">
                <input
                  type="time"
                  name="Mascota"
                  value={props.datos.Hora}
                  className="form-control form-control-sm text-capitalize"
                  disabled
                />
              </div>
            </div>

            <div className="d-flex flex-nowrap m-2">
              <label className="col-form-label col-form-label-sm  mt-3">
                Sintoma
              </label>
              <div className="col-sm-10  mt-3 mb-3">
                <input
                  type="text"
                  name="Mascota"
                  value={props.datos.Sintomas}
                  className="form-control form-control-sm text-capitalize"
                  disabled
                />
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <button
              className="btn btn-danger mt-3"
              onClick={() => props.remove(props.datos.id)} onMouseEnter={mostrar}
            >
              Borrar
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Punto7Card;