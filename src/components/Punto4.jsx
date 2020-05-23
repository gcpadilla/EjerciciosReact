import React, { Component, createRef} from "react";
import Cabeza from "./Cabeza";



class Punto4 extends Component {
  constructor(props) {
    super(props);

    this.imputText = createRef();

    this.state = {
      tarea: "",
      name: "",
      email: "",
      tareas: []
    };
  }

  handleChange = (ev) => {
    const value = ev.target.value;
    const name = ev.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
    if (
      this.state.tarea !== "" &&
      this.state.name !== "" &&
      this.state.email !== ""
    ) {
      const tareas = this.state.tareas;
      let numero= new Date()
      numero= numero.getDate() + numero.getMonth()+1 + numero.getHours() + numero.getMinutes() + numero.getSeconds() + numero.getMilliseconds()
      tareas.push({
        id: numero + Math.floor(Math.random() * 100000),
        tarea: this.state.tarea,
        name: this.state.name,
        email: this.state.email,
      });
      this.setState({ tareas });
      this.setState({ tarea: "" });
      this.setState({ name: "" });
      this.setState({ email: "" });
      this.imputText.current.focus();
    }

    ev.preventDefault();
  };

  removeTarea = (id) => {
    let tareas = this.state.tareas;
    tareas = tareas.filter((item) => item.id !== id);
    this.setState({ tareas: tareas });
  };

  componentDidMount = () => {
    const tareas = JSON.parse(localStorage.getItem("tareas")) || [];
    this.setState({ tareas });
  };
  componentDidUpdate = () => {
    localStorage.setItem("tareas", JSON.stringify(this.state.tareas));
  };

  render() {
    const mostrarCabeza = () => {
      if (this.state.tareas.length !== 0) {
        return <Cabeza tareas={this.state.tareas} remove={this.removeTarea} />;
      }
    };

    return (
			<>
				<div className="container margenTop">
					<h3 className="mt-3">
						<span className="text-info">Ejercicio 4:</span> Hacer una lista de
						tareas
					</h3>
					<div className="row">
						<div className="col-2"></div>
						<div className="col border border-info">
							<h3 className="text-center">Bienvenido</h3>
							<p className="text-center">Ingresa tus tareas</p>
							<form onSubmit={this.handleSubmit}>
								<input
									onChange={this.handleChange}
									type="text"
									autoComplete="off"
									className="form-control mb-5 imput"
									aria-label="Text input with segmented dropdown button"
									placeholder="Ingrese tarea..."
									name="tarea"
									value={this.state.tarea}
									ref={this.imputText}
								/>
								<input
									onChange={this.handleChange}
									type="text"
									autoComplete="off"
									className="form-control mb-5 imput"
									aria-label="Text input with segmented dropdown button"
									placeholder="Ingrese nombre..."
									name="name"
									value={this.state.name}
								/>
								<input
									onChange={this.handleChange}
									type="text"
									autoComplete="off"
									className="form-control mb-5 imput"
									aria-label="Text input with segmented dropdown button"
									placeholder="Ingrese email..."
									name="email"
									value={this.state.email}
								/>
								<button type="submit" className="btn btn-primary mb-3">
									Guardar
								</button>
							</form>
							{mostrarCabeza()}
						</div>
						<div className="col-2"></div>
					</div>
				</div>
			</>
		);
  }
}

export default Punto4;
