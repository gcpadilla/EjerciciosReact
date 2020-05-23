import React from "react";

const Punto10Card = (props) => {
	let fecha = props.article.publishedAt;
	let año = fecha.substring(0, 4);
	let mes = fecha.substring(5, 7);
	let dia = fecha.substring(8, 10);

	return (
		<>
			<div className="row text-dark">
				<div className="col-12">
					<section className="m-3">
						<div
							className="card border border-dark overflow-auto averhiden"
							style={{ width: "320px", height: "400px" }}
						>
							<img
								src={props.article.urlToImage}
								className="card-img-top"
								alt="..."
								style={{
									width: "100%",
									height: "200px",
									backgroundPosition: "center",
									backgroundSize: "cover",
								}}
							/>
							<div className="card-body">
								<p className="card-text">
									nombre diario: {props.article.source.name}
								</p>
								<p className="card-text">
									Fecha: {dia}-{mes}-{año}
								</p>
								<h5 className="card-title">{props.article.title}</h5>
								<p className="card-text">{props.article.description}</p>
								<div className="row border-top border-dark ">
									<a
										href={props.article.url}
										target="blank"
										className="btn btn-primary stretched-link mb-3 mt-3"
									>
										Fuente
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
};

export default Punto10Card;
