import React, { Component, createRef } from "react";
import Punto9Card from "./Punto9Card";

class Punto9 extends Component {
  constructor(props) {
    super(props);

    this.imputText = createRef();

    this.state = {
      id: "",
      nombre: "",
      descripcion: "",
      categoria: "",
      pelicula: [],
    };
  }

  handleChange = (ev) => {
    const value = ev.target.value;
    const name = ev.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
    if (
      this.state.nombre !== "" &&
      this.state.descripcion !== "" &&
      this.state.categoria !== ""
    ) {
      const pelicula = this.state.pelicula;
      let numero = new Date();
      numero =
        numero.getDate() +
        numero.getMonth() +
        1 +
        numero.getHours() +
        numero.getMinutes() +
        numero.getSeconds() +
        numero.getMilliseconds();
      pelicula.push({
        id: numero + Math.floor(Math.random() * 100000),
        nombre: this.state.nombre,
        descripcion: this.state.descripcion,
        categoria: this.state.categoria,
      });
      this.setState({ pelicula });
      this.setState({ nombre: "" });
      this.setState({ descripcion: "" });
      this.setState({ categoria: "" });
      this.imputText.current.focus();
    }
    ev.preventDefault();
  };

  componentDidMount = () => {
    const pelicula = JSON.parse(localStorage.getItem("pelicula")) || [];
    this.setState({ pelicula });
  };

  componentDidUpdate = () => {
    localStorage.setItem("pelicula", JSON.stringify(this.state.pelicula));
  };

  remove = (id) => {
    let pelicula = this.state.pelicula;
    pelicula = pelicula.filter((item) => item.id !== id);
    this.setState({ pelicula: pelicula });
  };

  render() {
    const mostrarCard = () => {
      if (this.state.pelicula.length !== 0) {
        return this.state.pelicula.map((peliculas) => (
          <Punto9Card
            datos={peliculas}
            key={peliculas.id}
            remove={this.remove}
          />
        ));
      }
    };
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-6 alert-primary text-black sombra">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group ">
                  <label>Nombre</label>
                  <input
                    onChange={this.handleChange}
                    name="nombre"
                    type="text"
                    value={this.state.nombre}
                    ref={this.imputText}
                    className="form-control"
                    id="formGroupExampleInput"
                    placeholder="Ingrese nombre de pelicula . . ."
                    autoComplete="off"
                  />
                </div>
                <div className="form-group">
                  <label>Descripcion</label>
                  <textarea
                    onChange={this.handleChange}
                    name="descripcion"
                    value={this.state.descripcion}
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Ingrese una descripcion . . ."
                    autoComplete="off"
                  ></textarea>
                </div>
                <div className="form-group">
                  <label>Genero</label>
                  <select
                    onChange={this.handleChange}
                    name="categoria"
                    className="form-control"
                    id="exampleFormControlSelect1"
                    autoComplete="off"
                  >
                    <option defaultValue="">
                      Seleccione una categoria . . .
                    </option>
                    <option value="comedia">Comedia</option>
                    <option value="drama">Drama</option>
                    <option value="infantil">Infantil</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="btn btn-outline-success mb-3 sombra"
                  onClick={this.handleSubmit}
                >
                  Guardar
                </button>
              </form>
            </div>
            <div className="col-3"></div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="d-flex flex-wrap">{mostrarCard()}</div>
        </div>
      </>
    );
  }
}

export default Punto9;