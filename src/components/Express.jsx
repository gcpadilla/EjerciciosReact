import React, { useRef, useState, useEffect } from "react";
import axios from "axios";
import ExpressCards from "./ExpressCards";

const Express = () => {
  //HOOKS-------------------
  const ref = useRef();
  const [Data, setData] = useState({
    fullName: "",
    title: "",
    department: "",
    pic: "",
    data: [],
  });
  const [actualizar, setActualizar] = useState(true);

  //FUNCIONES-------------------

  
  const traer = async () => {
    await axios.get(`/api/v1/empleados`).then((res) => {
      const data = res.data;
      setData({
        fullName: "",
        title: "",
        department: "",
        pic: "",
        data: data,
      });
    });
  };

  const guardar = async (data) => {
    await axios.post(`/api/v1/empleados`, data).then(() => {
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
    setData({
      ...Data,
      [ev.target.name]: ev.target.value,
    });
  };

  const handleSubmit = (ev) => {
    let datos = {
      fullName: Data.fullName,
      title: Data.title,
      department: Data.department,
      pic: Data.pic,
    };
    guardar(datos);

    setData({
      fullName: "",
      title: "",
      department: "",
      pic: "",
      data: [],
    });

    ev.preventDefault();
  };
  const borrar = async (id) => {
    await axios.delete(`/api/v1/empleados/${id}`);
    setActualizar(true);
  };

  const mostrar = () => {
    if (Data.data.length !== 0) {
      return Data.data.map((empleado, i) => (
        <ExpressCards empleado={empleado} borrar={borrar} key={i} />
      ));
    } else {
      return (
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      );
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mt-3">Datos del servidor mongo</h1>

      <div className="shadow-lg p-3 mb-5 bg-white rounded">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="col">
              <input
                onChange={handleChange}
                value={Data.fullName}
                ref={ref}
                type="text"
                name="fullName"
                className="form-control mt-2"
                placeholder="nombre"
              />
            </div>
          </div>
          <div className="form-row">
            <div className="col">
              <input
                onChange={handleChange}
                value={Data.title}
                type="text"
                name="title"
                className="form-control mt-2"
                placeholder="titulo"
              />
            </div>
            <div className="col">
              <input
                onChange={handleChange}
                value={Data.department}
                type="text"
                name="department"
                className="form-control mt-2"
                placeholder="departamento"
              />
            </div>
            <div className="col">
              <input
                onChange={handleChange}
                value={Data.pic}
                type="text"
                name="pic"
                className="form-control mt-2"
                placeholder="un texto"
              />
            </div>
          </div>
          <button className="btn btn-primary mt-3" type="submit">
            Guardar
          </button>
        </form>
      </div>

      <div className="container mt-5">{mostrar()}</div>
    </div>
  );
};

export default Express;
