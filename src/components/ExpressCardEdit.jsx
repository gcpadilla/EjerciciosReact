import React, { useRef, useState, useEffect, useCallback } from "react";
import { useHistory, useParams } from 'react-router-dom';
import axios from "axios";

const ExpressCardEdit = () => {
	//HOOKS-------------------

	const history = useHistory();
	const params = useParams();
	const ref = useRef();
	const [Data, setData] = useState({
		fullName: "",
		title: "",
		department: "",
		pic: "",
		data: [],
	});

	//FUNCIONES-------------------

	const traer = useCallback(async () => {
		await axios
			.get(`/api/v1/empleados/${params.id}`)
			.then((res) => {
				const data = res.data;
				setData({
					fullName: data.fullName,
					title: data.title,
					department: data.department,
					pic: data.pic,
					data: data,
				});
			});
	},[params.id])

	useEffect(() => {
		/* const traer = async () => {
			await axios
				.get(`/api/v1/empleados/${params.id}`)
				.then((res) => {
					const data = res.data;
					setData({
						fullName: data.fullName,
						title: data.title,
						department: data.department,
						pic: data.pic,
						data: data,
					});
				});
		}; */
		traer();
		ref.current.focus();
	}, [traer]);



	

	const guardar = async (data) => {
		await axios
			.put(`/api/v1/empleados/${params.id}`, data)
			.then(() => {
				history.push('/express');
			});
	};

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

	return (
		<div className="container">
			<h1 className="text-center mt-3">Actualizar Datos del servidor mongo</h1>

			<div className="shadow-lg p-3 mb-5 bg-white rounded">
				<form onSubmit={handleSubmit}>
					<div className="form-row">
						<div className="col">
							<input
								onChange={handleChange}
								value={Data.fullName || ""}
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
								value={Data.title || ""}
								type="text"
								name="title"
								className="form-control mt-2"
								placeholder="titulo"
							/>
						</div>
						<div className="col">
							<input
								onChange={handleChange}
								value={Data.department || ""}
								type="text"
								name="department"
								className="form-control mt-2"
								placeholder="departamento"
							/>
						</div>
						<div className="col">
							<input
								onChange={handleChange}
								value={Data.pic || ""}
								type="text"
								name="pic"
								className="form-control mt-2"
								placeholder="un texto"
							/>
						</div>
					</div>
					<button className="btn btn-primary mt-3" type="submit">
						Actualizar
					</button>
				</form>
			</div>
		</div>
	);
};

export default ExpressCardEdit;
