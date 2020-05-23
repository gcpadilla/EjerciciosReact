import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import Punto7CardMongo from "./Punto7CardMongo";

const Punto7Hooks = () => {
  const ref = useRef();

  const [actualizar, setActualizar] = useState(true);
  const [Citas, setCitas] = useState({
    Mascota: "",
    Duenio: "",
    Fecha: "",
    Hora: "",
    Sintomas: "",
    Citas: [],
  });

  const traer = async () => {
    await axios.get(`/api/v1/pacientes`).then((res) => {
      const data = res.data;
      setCitas({
        Mascota: "",
        Duenio: "",
        Fecha: "",
        Hora: "",
        Sintomas: "",
        Citas: data
      });
    });
  };

  const guardar = async (data) => {
    await axios.post(`/api/v1/pacientes`, data).then(() => {
      setActualizar(true);
    });
  };

  useEffect(() => {
    if (actualizar === true) {
      traer();
      setActualizar(false);
      ref.current.focus();
    }
  }, [actualizar]);

  const handleChange = (ev) => {
    setCitas({
      ...Citas,
      [ev.target.name]: ev.target.value,
    });
  };

  

  const handleSubmit = (ev) => {
    if (
      Citas.Mascota !== "" &&
      Citas.Duenio !== "" &&
      Citas.Fecha !== "" &&
      Citas.Hora !== "" &&
      Citas.Sintomas !== ""
    ) {
      let citas = {
        Mascota: Citas.Mascota,
        Duenio: Citas.Duenio,
        Fecha: Citas.Fecha,
        Hora: Citas.Hora,
        Sintomas: Citas.Sintomas,
      };

      guardar(citas);
      setCitas({
        Mascota: "",
        Duenio: "",
        Fecha: "",
        Hora: "",
        Sintomas: "",
        Citas: [],
      });
      ref.current.focus();
    }
    ev.preventDefault();
  };

  const borrar = async (id) => {
    await axios.delete(`/api/v1/pacientes/${id}`);
    setActualizar(true);
  };

  const mostrarCard = () => {
      
    if (Citas.Citas.length !== 0) {
      return Citas.Citas.map((citas, i) => (
        <Punto7CardMongo datos={citas} key={i} remove={borrar} />
      ));
    } else if (actualizar === false) {
      return (
        <div className="container">
          <h1 className="display-4">No hay citas</h1>
        </div>
      );
    } else{
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  };

  return (
    <>
      <h3 className="text-center mt-3">
        Administrador pacientes de veterinaria con mondo
      </h3>
      <div className="container sombra">
        <div className="row m-3 ">
          <h5>Llenar el formulario para crear una cita</h5>
        </div>
        <div className=" container alert-primary text-black">
          <form onSubmit={handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label col-form-label-sm  mt-3">
                Nombre de la mascota
              </label>
              <div className="col-sm-10  mt-3">
                <input
                  onChange={handleChange}
                  type="text"
                  name="Mascota"
                  value={Citas.Mascota}
                  ref={ref}
                  className="form-control form-control-sm text-capitalize"
                  placeholder="Nombre de la mascota . . ."
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label col-form-label-sm">
                Nombre del Dueño
              </label>
              <div className="col-sm-10">
                <input
                  onChange={handleChange}
                  type="text"
                  name="Duenio"
                  value={Citas.Duenio}
                  className="form-control form-control-sm text-capitalize"
                  placeholder="Nombre del Duenio . . ."
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label col-form-label-sm">
                    Fecha
                  </label>
                  <div className="col-sm-10">
                    <input
                      onChange={handleChange}
                      type="date"
                      name="Fecha"
                      value={Citas.Fecha}
                      className="form-control form-control-sm"
                      placeholder="Nombre de la mascota . . ."
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label col-form-label-sm">
                    Hora
                  </label>
                  <div className="col-sm-10">
                    <input
                      onChange={handleChange}
                      type="time"
                      name="Hora"
                      value={Citas.Hora}
                      className="form-control form-control-sm"
                      placeholder="Nombre de la mascota . . ."
                      autoComplete="off"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-2 col-form-label col-form-label-sm  mb-3">
                Sintomas
              </label>
              <div className="col-sm-10  mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  name="Sintomas"
                  value={Citas.Sintomas}
                  className="form-control form-control-sm text-capitalize"
                  placeholder="Sintomass . . ."
                  autoComplete="off"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn btn-primary mt-3 mb-3 sombra"
              >
                Agregar nueva cita
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mt-5">
        {/* <h1>citas length: {Citas.Citas.length}</h1> */}
        {/* {Citas.Citas.map( (item) => (<h5>{item.Fecha}</h5>))} */}
        <div className="d-flex flex-wrap">{mostrarCard()}</div>
      </div>
    </>
  );
};

export default Punto7Hooks;
