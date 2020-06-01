import React, { useRef, useState, useEffect } from "react";

import Punto7Card from "./Punto7Card";

const Punto7Hooks = () => {
	const ref = useRef();

	const [Citas, setCitas] = useState({
		id: "",
		Mascota: "",
		Dueño: "",
		Fecha: "",
		Hora: "",
		Sintomas: "",
		Citas: [],
	});

	const handleChange = (ev) => {
		setCitas({
			...Citas,
			[ev.target.name]: ev.target.value,
		});
	};

	const handleSubmit = (ev) => {
		if (
			Citas.Mascota !== "" &&
			Citas.Dueño !== "" &&
			Citas.Fecha !== "" &&
			Citas.Hora !== "" &&
			Citas.Sintomas !== ""
		) {
			let citas = Citas.Citas;
			let numero = new Date();
			numero =
				numero.getDate() +
				numero.getMonth() +
				1 +
				numero.getHours() +
				numero.getMinutes() +
				numero.getSeconds() +
				numero.getMilliseconds();
			citas.push({
				id: numero + Math.floor(Math.random() * 100000),
				Mascota: Citas.Mascota,
				Dueño: Citas.Dueño,
				Fecha: Citas.Fecha,
				Hora: Citas.Hora,
				Sintomas: Citas.Sintomas,
			});
			setCitas({
				id: "",
				Mascota: "",
				Dueño: "",
				Fecha: "",
				Hora: "",
				Sintomas: "",
				Citas: citas,
			});
			ref.current.focus();
		}
		localStorage.setItem("citasHooks", JSON.stringify(Citas.Citas));
		ev.preventDefault();
	};

	// useEffect(() => {
	// 	setCitas({ Citas: JSON.parse(localStorage.getItem("citasHooks")) || [] });
	// 	ref.current.focus();
	// },[]);

	useEffect(() => {
		const citasStorage = JSON.parse(localStorage.getItem("citasHooks"));
		if (citasStorage)
			setCitas({
				id: "",
				Mascota: "",
				Dueño: "",
				Fecha: "",
				Hora: "",
				Sintomas: "",
				Citas: citasStorage,
			});
		ref.current.focus();
	}, []);

	const remove = (id) => {
		let CitasCard = Citas.Citas;
		CitasCard = CitasCard.filter((item) => item.id !== id);
		localStorage.setItem("citasHooks", JSON.stringify(CitasCard));
		setCitas({
			id: "",
			Mascota: "",
			Dueño: "",
			Fecha: "",
			Hora: "",
			Sintomas: "",
			Citas: CitasCard,
		});
		ref.current.focus();
	};

	const mostrarCard = () => {
		const citas = Citas.Citas;
		if (citas.length !== 0) {
			return citas.map((citas) => (
				<Punto7Card datos={citas} key={citas.id} remove={remove} />
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
		<>
			<h3 className="text-center mt-3">
				Administrador pacientes de veterinaria
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
								Nombre del dueño
							</label>
							<div className="col-sm-10">
								<input
									onChange={handleChange}
									type="text"
									name="Dueño"
									value={Citas.Dueño}
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
