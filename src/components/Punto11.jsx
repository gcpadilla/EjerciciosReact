import React, { Component } from "react";
import axios from "axios";
import Punto10Card from "./Punto10Card";

class Punto11 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// apikey: "&apiKey=826714bc7ddf4b5791efe65429893218",
			// country: "country=ar",
			// category: "&category=general",
			// language: "&language=es",
			data: [],
		};
	}

	componentDidMount() {
		//const api = "api.openweathermap.org/data/2.5/weather?id=3385980&appid=732e3aecbcca30ffee809c333ed39b58";
		const url = "api.openweathermap.org/data/2.5/weather?id=3385980&appid=732e3aecbcca30ffee809c333ed39b58";
		axios.get(url).then((res) => {
			const dat = res.data.articles;
			this.setState({ data: dat });
		});
	}

	componentDidUpdate() {}

	// handleChange = (ev) => {
	// 	const value = ev.target.value;
	// 	const name = ev.target.name;
	// 	this.setState({ [name]: value });
	// };

	// handleSubmit = (ev) => {
	// 	const api = "http://newsapi.org/v2/top-headlines?";
	// 	const url = `${api}${this.state.country}${this.state.category}${this.state.language}${this.state.apikey}`;
	// 	axios.get(url).then((res) => {
	// 		const dat = res.data.articles;
	// 		this.setState({ data: dat });
	// 	});
	// 	ev.preventDefault();
	// };

	render() {
		const mostrarNoticia = () => {
			const articles = this.state.data;
			if (articles.length !== 0) {
				return articles.map((article, i) => (
					<Punto10Card article={article} key={i} />
				));
			}
		};

		return (
			<>
				<div className="container-fluid m-5">
					<h1 className="display-4 text-center border-bottom border-dark">
						Noticias
					</h1>
					<div className="container border border-dark m-5">
						<div className="row">
							<div className="col-12 border-bottom border-dark">
								<section className="m-2">
									<form className="mt-5" onSubmit={this.handleSubmit}>
										<div className="form-group row mb-5">
											<label className="col-sm-3 col-form-label">
												Buscar por categoria
											</label>
											<select
												className="custom-select col-sm-4"
												onChange={this.handleChange}
												name="category"
											>
												<option value="&category=general">General</option>
												<option value="&category=entertainment">
													Entretenimiento
												</option>
												<option value="&category=health">Salud</option>
												<option value="&category=science">Ciencia</option>
												<option value="&category=sports">Deportes</option>
												<option value="&category=technology">Tecnologia</option>
											</select>
										</div>
										<div className="form-group row mb-5">
											<label className="col-sm-3 col-form-label">
												Buscar por pais
											</label>
											<select
												className="custom-select col-sm-4"
												onChange={this.handleChange}
												name="country"
											>
												<option value="country=ar">Argentina</option>
												<option value="country=us">Usa</option>
												<option value="country=jp">Japon</option>
												<option value="country=br">Brasil</option>
											</select>
										</div>
										<button type="submit" className="btn btn-primary mb-3">
											Buscar
										</button>
									</form>
								</section>
							</div>
						</div>
						<div className="d-flex flex-wrap justify-content-center">
							{/* {mostrarNoticia()} */}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Punto11;
