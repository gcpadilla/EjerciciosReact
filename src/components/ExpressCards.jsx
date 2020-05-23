import React from "react";
import { Link } from "react-router-dom";

const ExpressCards = (props) => {
	return (
		<>
			<div className="alert alert-primary mt-3">
				<button
					type="button"
					className="close"
					aria-label="Close"
					onClick={() => props.borrar(props.empleado._id)}
				>
					<span aria-hidden="true">&times;</span>
				</button>
				<strong>Id de usuario: </strong>
				{props.empleado._id}
				<br />
				<strong>Nombre de usuario: </strong>
				{props.empleado.fullName}
				<br />
				<strong>Departamento: </strong>
				{props.empleado.department}
				<div>
					<Link to={`/editar/${props.empleado._id}`}>
						<button type="button" className="btn btn-success mt-3">
							Editar
						</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ExpressCards;
