import React, { Component, createRef } from "react";

class Punto8 extends Component {
  constructor(props) {
    super(props);

    this.imputText = createRef();

    this.state = {
      error: 0,
      nombre: "",
      apellido: "",
      dni: "",
      email: "",
      persona: [],
    };
  }

  handleChange = (ev) => {
    const value = ev.target.value;
    const name = ev.target.name;
    this.setState({ [name]: value });
  };

  handleSubmit = (ev) => {
    if (this.state.nombre === "") {
      this.setState({ error: 1 });
    } else if (this.state.apellido === "") {
      this.setState({ error: 2 });
    } else if (this.state.dni === "") {
      this.setState({ error: 3 });
    } else if (this.state.email === "") {
      this.setState({ error: 4 });
    } else {
      const persona = this.state.persona;
      persona.push({
        nombre: this.state.nombre,
        apellido: this.state.apellido,
        dni: this.state.dni,
        email: this.state.email,
      });
      this.setState({ persona });
      this.setState({ error: 0 });
      this.setState({ nombre: "" });
      this.setState({ apellido: "" });
      this.setState({ dni: "" });
      this.setState({ email: "" });
      this.imputText.current.focus();
    }

    ev.preventDefault();
  };

  componentDidMount = () => {
    const persona = JSON.parse(localStorage.getItem("persona")) || [];
    this.setState({ persona });
  };
  componentDidUpdate = () => {
    localStorage.setItem("persona", JSON.stringify(this.state.persona));
  };

  render() {
    const mostrarErrorNombre = () => {
      if (this.state.error === 1) {
        return (
          <div className="alert alert-danger w-50 mt-1" role="alert">
            Debe ingresar un nombre . . .
          </div>
        );
      } else {
        return;
      }
    };
    const mostrarErrorApellido = () => {
      if (this.state.error === 2) {
        return (
          <div className="alert alert-danger w-50 mt-1" role="alert">
            Debe ingresar un apellido . . .
          </div>
        );
      } else {
        return;
      }
    };
    const mostrarErrorDni = () => {
      if (this.state.error === 3) {
        return (
          <div className="alert alert-danger w-50 mt-1" role="alert">
            Debe ingresar un dni . . .
          </div>
        );
      } else {
        return;
      }
    };
    const mostrarErrorEmail = () => {
      if (this.state.error === 4) {
        return (
          <div className="alert alert-danger w-50 mt-1" role="alert">
            Debe ingresar un email valido . . .
          </div>
        );
      } else {
        return;
      }
    };

    return (
			<div className="container mt-5">
				<div className="alert alert-info">
					<form onSubmit={this.handleSubmit}>
						<div className="form-group">
							<label>Ingrese nombre</label>
							<input
								onChange={this.handleChange}
								value={this.state.nombre}
								name="nombre"
								type="text"
								className="form-control"
								id="formGroupExampleInput"
								placeholder="Ingrese nombre. . ."
								autoComplete="off"
								ref={this.imputText}
							/>
							{mostrarErrorNombre()}
						</div>
						<div className="form-group">
							<label>Ingrese apellido</label>
							<input
								onChange={this.handleChange}
								value={this.state.apellido}
								name="apellido"
								type="text"
								className="form-control"
								id="formGroupExampleInput2"
								placeholder="Ingrese apellido. . ."
								autoComplete="off"
							/>
							{mostrarErrorApellido()}
						</div>
						<div className="form-group">
							<label>Ingrese DNI</label>
							<input
								onChange={this.handleChange}
								value={this.state.dni}
								name="dni"
								type="number"
								className="form-control"
								id="formGroupExampleInput3"
								placeholder="Ingrese DNI. . ."
								autoComplete="off"
							/>
							{mostrarErrorDni()}
						</div>
						<div className="form-group">
							<label>Ingrese Email</label>
							<input
								onChange={this.handleChange}
								value={this.state.email}
								name="email"
								type="email"
								className="form-control"
								id="formGroupExampleInput4"
								placeholder="Ingrese Email. . ."
								autoComplete="off"
							/>
							{mostrarErrorEmail()}
						</div>
						<button type="submit" className="btn btn-primary">
							Guardar
						</button>
					</form>
				</div>
			</div>
		);
  }
}

export default Punto8;
