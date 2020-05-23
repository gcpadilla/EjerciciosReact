import React, { Component } from "react";


class Punto6 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      empleados: [
        {
          id: 1,
          fullName: "Laya Dueñas",
          title: "CEO",
          department: "Business",
          pic: "usuario",
        },
        {
          id: 2,
          fullName: "Astryd Vallés",
          title: "CMO",
          department: "Marketing",
          pic: "usuario1",
        },
        {
          id: 3,
          fullName: "Shantell Meza",
          title: "CFO",
          department: "Business",
          pic: "usuario2",
        },
        {
          id: 4,
          fullName: "Sergio Ocampo",
          title: "CTO",
          department: "Engineering",
          pic: "usuario3",
        },
        {
          id: 5,
          fullName: "Ares Jiménez",
          title: "Art Director",
          department: "Marketing",
          pic: "usuario4",
        },
        {
          id: 6,
          fullName: "Marta Pérez",
          title: "Frontend Dev",
          department: "Engineering",
          pic: "usuario5",
        },
        {
          id: 7,
          fullName: "Ellen Balderas",
          title: "Digital Strategist",
          department: "Marketing",
          pic: "usuario6",
        },
        {
          id: 8,
          fullName: "Cynthia Valentín",
          title: "Backend Dev",
          department: "Engineering",
          pic: "usuario1",
        },
        {
          id: 9,
          fullName: "Bernard Jung",
          title: "DevOps Engineer",
          department: "Engineering",
          pic: "usuario2",
        },
      ],
    };
  }

  render() {
    const mostrar = this.state.empleados.map((empleado, i) => (
      <li className="list-group-item" key={i}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-4">
              <div
                className={`${empleado.pic}`}
              ></div>
            </div>
            <div className="col-8">
              <p>{empleado.fullName}</p>
              <div className="d-flex flex-nowrap">
                <h6>{empleado.title}</h6>
                <h6 className="bg-info text-white ml-3">
                  {empleado.department}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </li>
    ));

    return (
			<div className="container mt-3">
				<h3 className="mt-3">
					<span className="text-info">Ejercicio 6:</span> Hacer una lista de empleados
				</h3>
				<div className="row">
					<div className="col-3"></div>
					<div className="col-6">
						<ul className="list-group text-dark border border-primary">
							{mostrar}
						</ul>
					</div>
					<div className="col-3"></div>
				</div>
			</div>
		);
  }
}

export default Punto6;
