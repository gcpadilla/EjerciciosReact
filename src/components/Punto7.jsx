import React, { Component, createRef } from "react";
import Punto7Card from "./Punto7Card";

class Punto7 extends Component {
	constructor(props) {
		super(props);
		this.imputText = createRef();
		this.state = {
			id: "",
			Mascota: "",
			Dueño: "",
			Fecha: "",
			Hora: "",
			Sintoma: "",
			Citas: [],
		};
	}

	handleChange = (ev) => {
		const value = ev.target.value;
		const name = ev.target.name;
		this.setState({ [name]: value });
	};

	handleSubmit = (ev) => {
		if (
			this.state.Mascota !== "" &&
			this.state.Dueño !== "" &&
			this.state.Fecha !== "" &&
			this.state.Hora !== "" &&
			this.state.Sintomas !== ""
		) {
			const Citas = this.state.Citas;
			let numero = new Date();
			numero =
				numero.getDate() +
				numero.getMonth() +
				1 +
				numero.getHours() +
				numero.getMinutes() +
				numero.getSeconds() +
				numero.getMilliseconds();
			Citas.push({
				id: numero + Math.floor(Math.random() * 100000),
				Mascota: this.state.Mascota,
				Dueño: this.state.Dueño,
				Fecha: this.state.Fecha,
				Hora: this.state.Hora,
				Sintomas: this.state.Sintomas,
			});
			this.setState({ Citas });
			this.setState({ Mascota: "" });
			this.setState({ Dueño: "" });
			this.setState({ Fecha: "" });
			this.setState({ Hora: "" });
			this.setState({ Sintomas: "" });
			this.imputText.current.focus();
		}
		ev.preventDefault();
	};

	componentDidMount = () => {
		const Citas = JSON.parse(localStorage.getItem("Citas")) || [];
		this.setState({ Citas });
	};
	componentDidUpdate = () => {
		localStorage.setItem("Citas", JSON.stringify(this.state.Citas));
	};
	remove = (id) => {
		let Citas = this.state.Citas;
		Citas = Citas.filter((item) => item.id !== id);
		this.setState({ Citas: Citas });
	};

	render() {
		const mostrarCard = () => {
			if (this.state.Citas.length !== 0) {
				return this.state.Citas.map((citas) => (
					<Punto7Card datos={citas} key={citas.id} remove={this.remove} />
				));
			} else {
				return (
					<div className="container">
						<h1 className="display-4">No hay citas</h1>
					</div>
				);
			}
		};
		return (
			<div className="container">
				<h3 className="mt-3">
					<span className="text-info">Ejercicio 7:</span> Veterinaria
				</h3>
				<h3 className="text-center mt-3">
					Administrador pacientes de veterinaria
				</h3>
				<div className="container sombra">
					<div className="row m-3 ">
						<h5>Llenar el formulario para crear una cita</h5>
					</div>
					<div className=" container alert-primary text-black">
						<form>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label col-form-label-sm  mt-3">
									Nombre de la mascota
								</label>
								<div className="col-sm-10  mt-3">
									<input
										onChange={this.handleChange}
										type="text"
										name="Mascota"
										value={this.state.Mascota}
										ref={this.imputText}
										className="form-control form-control-sm text-capitalize"
										placeholder="Nombre de la mascota . . ."
										autoComplete="off"
									/>
								</div>
							</div>
							<div className="form-group row">
								<label className="col-sm-2 col-form-label col-form-label-sm">
									Nombre del dueño
								</label>
								<div className="col-sm-10">
									<input
										onChange={this.handleChange}
										type="text"
										name="Dueño"
										value={this.state.Dueño}
										className="form-control form-control-sm text-capitalize"
										placeholder="Nombre del dueño . . ."
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
												onChange={this.handleChange}
												type="date"
												name="Fecha"
												value={this.state.Fecha}
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
												onChange={this.handleChange}
												type="time"
												name="Hora"
												value={this.state.Hora}
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
										onChange={this.handleChange}
										type="text"
										name="Sintomas"
										value={this.state.Sintomas}
										className="form-control form-control-sm text-capitalize"
										placeholder="Sintomas . . ."
										autoComplete="off"
									/>
								</div>
							</div>
						</form>
					</div>
					<div className="d-flex justify-content-center">
						<button
							type="button"
							onClick={this.handleSubmit}
							className="btn btn-primary mt-3 mb-3 sombra"
						>
							Agregar nueva cita
						</button>
					</div>
				</div>
				<div className="container mt-5">
					<div className="d-flex flex-wrap">{mostrarCard()}</div>
				</div>
			</div>
		);
	}
}

export default Punto7;
