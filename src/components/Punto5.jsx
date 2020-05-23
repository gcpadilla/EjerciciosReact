import React, { Component } from "react";
import Punto5Card from "./Punto5Card"

class Punto5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      colores: [],
    };
  }

  changeMode = (color) => {
    this.setState({ color });
  };

  handleChange = (ev) => {
    const color = ev.target.value;
    this.setState({ color });
  };

  handleClick = (e) => {
    if (this.state.color!=="") {
      const colores = this.state.colores;
      let numero= new Date()
      numero= numero.getDate() + numero.getMonth()+1 + numero.getHours() + numero.getMinutes() + numero.getSeconds() + numero.getMilliseconds()
      colores.push({
        id: numero + Math.floor(Math.random() * 100000),
        color: this.state.color,
      });
      this.setState({ colores });
      this.setState({ color: "" });
    }
    e.preventDefault();
  };

  remove = (id) => {
    let colores = this.state.colores;
    colores = colores.filter((item) => item.id !== id);
    this.setState({ colores:colores });
  };

  componentDidMount=()=>{
    const colores = JSON.parse(localStorage.getItem("colores")) || []
    this.setState({colores})
  }
  componentDidUpdate=()=>{
    localStorage.setItem("colores", JSON.stringify(this.state.colores));
  }

  render() {
    const mostrarCard = () => {
      if (this.state.colores.length !== 0) {
        return this.state.colores.map((color) => (
          <Punto5Card datos={color} key={color.id} remove={this.remove} />
        ));
      }
    };

    return (
			<>
				<div className="container margenTop f">
					<h3 className="mt-3">
						<span className="text-info">Ejercicio 5:</span> Hacer una paleta de
						colores
					</h3>
					<div className="d-flex flex-row justify-content-center align-items-center">
						<div className="card">
							<div className="card-header">Administrar colores</div>
							<form onSubmit={this.handleClick}>
								<div className="card-body">
									<div className="alert alert-success" role="alert">
										<div className="d-flex justify-content-center align-items-center">
											<div
												className="d-flex flex-row justify-content-center align-items-center cuadrado"
												style={{ backgroundColor: this.state.color }}
											>
												<p>Color</p>
											</div>
											<div>
												<input
													onChange={this.handleChange}
													className="form-control ml-2"
													type="text"
													placeholder="ingrese un color"
													value={this.state.color}
												/>
											</div>
										</div>
									</div>
									<button
										type="submit"
										className="btn btn-primary float-right sombra"
									>
										Guardar
									</button>
								</div>
							</form>
						</div>
					</div>
					<div className="container ">
						<div className="d-flex flex-wrap">{mostrarCard()}</div>
					</div>
				</div>
			</>
		);
  }
}

export default Punto5;