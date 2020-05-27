import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-1"></div>
					<div className="col-9">
						<ul className="nav nav-tabs ">
							<li className="nav-item">
								<Link className="nav-link active" to="/">
									Home
								</Link>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle text-dark"
									data-toggle="dropdown"
									to="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Ejercicios 1 al 6
								</Link>
								<div className="dropdown-menu bg-info ">
									<Link className="dropdown-item " to="/Punto1">
										Ejercicio 1
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto2">
										Ejercicio 2
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto3">
										Ejercicio 3
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto4">
										Ejercicio 4
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto5">
										Ejercicio 5
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto6">
										Ejercicio 6
									</Link>
								</div>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle text-dark"
									data-toggle="dropdown"
									to="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Ejercicios 7 al 12
								</Link>
								<div className="dropdown-menu bg-info">
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto7">
										Ejercicio 7
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto8">
										Ejercicio 8
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto9">
										Ejercicio 9
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto10">
										Ejercicio 10
									</Link>
									<div className="dropdown-divider"></div>
									<Link
										className="dropdown-item"
										to="/TareaRouterParams/15?background=rgba(65,65,65,0.5)&width=100&textcolor=white"
									>
										Tarea router params
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto7Hooks">
										Ejercicio 7 hooks
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/express">
										express
									</Link>
								</div>
							</li>
							<li className="nav-item dropdown">
								<Link
									className="nav-link dropdown-toggle text-dark"
									data-toggle="dropdown"
									to="#"
									role="button"
									aria-haspopup="true"
									aria-expanded="false"
								>
									Ejercicios 13 al 19
								</Link>
								<div className="dropdown-menu bg-info">
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/Punto7HooksMondo">
										p7HookMongo
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/">
										Ejercicio 14
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/">
										Ejercicio 15
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/">
										Ejercicio 16
									</Link>
									<div className="dropdown-divider"></div>
									<Link
										className="dropdown-item"
										to="/T"
									>
										Ejercicio 17
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/">
										Ejercicio 18
									</Link>
									<div className="dropdown-divider"></div>
									<Link className="dropdown-item" to="/">
										ejercicio 19
									</Link>
								</div>
							</li>
						</ul>
					</div>
					<div className="col-2"></div>
				</div>
			</div>
		</>
	);
};

export default Nav;
