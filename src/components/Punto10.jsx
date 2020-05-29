import React, { Component } from "react";
import axios from "axios";
import Punto10Card from "./Punto10Card";

class Punto10 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			apikey: "&apiKey=826714bc7ddf4b5791efe65429893218",
			country: "country=ar",
			category: "&category=general",
			language: "&language=es",
			data: [],
			imagen1: "",
			imagen2: "",
			imagen3: "",
			titulo1: "",
			titulo2: "",
			titulo3: "",
		};
	}

	traer = async () => {
		const api = "https://newsapi.org/v2/top-headlines?/*";
		const url = `${api}${this.state.country}${this.state.category}${this.state.language}${this.state.apikey}`;
		
		try {
			await axios
		.get(url,{
			header:{
				'Content-Type': 'application/json',
				'X-Requested-With': 'XMLHttpRequest',
				'Access-Control-Allow-Origin': '*'
			}
		})
		.then((res) => {
			const dat = res.data.articles;
			this.setState({ data: dat });
			this.setState({ imagen1: this.state.data[5].urlToImage });
			this.setState({ imagen2: this.state.data[10].urlToImage });
			this.setState({ imagen3: this.state.data[13].urlToImage });
			this.setState({ titulo1: this.state.data[5].title });
			this.setState({ titulo2: this.state.data[10].title });
			this.setState({ titulo3: this.state.data[13].title });
		});
		} catch (error) {
			console.log("Error traer")
		}
	}

	componentDidMount  () {
		this.traer()
	}

	handleChange = (ev) => {
		const value = ev.target.value;
		const name = ev.target.name;
		this.setState({ [name]: value });
	};
	

	handleSubmit = (ev) => {
		this.traer()
		ev.preventDefault();
	};

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
				<div className="container-fluid">
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
								<section>
									<div className="container">
										<div className="row">
											<div className="col-1"></div>
											<div className="col-10">
												<div
													id="carouselExampleCaptions"
													className="carousel slide"
													data-ride="carousel"
												>
													<ol className="carousel-indicators">
														<li
															data-target="#carouselExampleCaptions"
															data-slide-to="0"
															className="active"
														></li>
														<li
															data-target="#carouselExampleCaptions"
															data-slide-to="1"
														></li>
														<li
															data-target="#carouselExampleCaptions"
															data-slide-to="2"
														></li>
													</ol>
													<div className="carousel-inner">
														<div
															className="carousel-item active"
															data-interval="5000"
															style={{
																height: "400px",
																backgroundPosition: "center",
																backgroundSize: "cover",
															}}
														>
															<img
																src={this.state.imagen1}
																className="d-block w-100"
																alt="..."
															/>
															<div
																className="carousel-caption d-none d-md-block card-opacity"
																style={{ marginBottom: "80px" }}
															>
																<h5>{this.state.titulo1}</h5>
															</div>
														</div>
														<div
															className="carousel-item"
															data-interval="5000"
															style={{
																height: "400px",
																backgroundPosition: "center",
																backgroundSize: "cover",
															}}
														>
															<img
																src={this.state.imagen2}
																className="d-block w-100"
																alt="..."
															/>
															<div
																className="carousel-caption d-none d-md-block card-opacity"
																style={{ marginBottom: "80px" }}
															>
																<h5>{this.state.titulo2}</h5>
															</div>
														</div>
														<div
															className="carousel-item"
															data-interval="5000"
															style={{
																height: "400px",
																backgroundPosition: "center",
																backgroundSize: "cover",
															}}
														>
															<img
																src={this.state.imagen3}
																className="d-block w-100"
																alt="..."
															/>
															<div
																className="carousel-caption d-none d-md-block card-opacity"
																style={{ marginBottom: "80px" }}
															>
																<h5>{this.state.titulo3}</h5>
															</div>
														</div>
													</div>
													<a
														className="carousel-control-prev"
														href="#carouselExampleCaptions"
														role="button"
														data-slide="prev"
													>
														<span
															className="carousel-control-prev-icon"
															aria-hidden="true"
														></span>
														<span className="sr-only">Previous</span>
													</a>
													<a
														className="carousel-control-next"
														href="#carouselExampleCaptions"
														role="button"
														data-slide="next"
													>
														<span
															className="carousel-control-next-icon"
															aria-hidden="true"
														></span>
														<span className="sr-only">Next</span>
													</a>
												</div>
											</div>
											<div className="col-1"></div>
										</div>
									</div>
								</section>
							</div>
						</div>
						<div className="d-flex flex-wrap justify-content-center">
							{mostrarNoticia()}
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default Punto10;
