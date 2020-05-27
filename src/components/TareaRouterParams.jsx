import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";
import axios from "axios";
import querystring from "query-string";

class TreaRouterParams extends Component {
	constructor(props) {
		super(props);
		this.state = {
			posts: {},
			userid: this.props.match.params.userid,
		};
	}

	componentDidMount() {
		axios
			.get(
				`https://jsonplaceholder.typicode.com/posts/${this.state.userid}`
			)
			.then((res) => {
				const posts = res.data;
				this.setState({ posts });
			});
	}

	handleChange = (ev) => {
		const value = ev.target.value;
		const name = ev.target.name;
		this.setState({ [name]: value });
	};

	Handleboton = () => {
		const jsonplaceholder = "https://jsonplaceholder.typicode.com/posts/";
		const url = `${jsonplaceholder}${this.state.userid}`;
		//console.log(url);

		axios
			.get(url)
			.then((response) => response.data)
			.then((data) => {
				this.setState({ posts: data });
			});
		this.setState({ userid: "" });
		this.props.match.params.userid = this.state.userid;
	};

	componentDidUpdate = () => {
	};

	render() {
		const queryParams = querystring.parse(this.props.location.search);
		//console.log(queryParams);
		return (
			<>
				{this.props.match.params.userid ? "" : <Redirect to="/" />}
				<div className="container">
					<div className="card mt-3 text-dark">
						{/* <img src="..." className="card-img-top" alt="..." /> */}
						<div
							className="card-body"
							style={{
								background: queryParams.background,
								color: queryParams.textcolor,
							}}
						>
							<h6>id: {this.state.posts.id}</h6>
							<h5 className="card-title">
								Card title: {this.state.posts.title}
							</h5>
							<p className="card-text">Card body: {this.state.posts.body}</p>
							<Link
								to={`/TareaRouterParams/${this.state.userid}?background=rgba(65,65,65,0.5)&width=100&textcolor=white`}
							>
								<button onClick={this.Handleboton} className="btn btn-primary">
									Change Id
								</button>
							</Link>
							<input
								className="text-right ml-3"
								onChange={this.handleChange}
								name="userid"
								type="text"
								value={this.state.userid}
							></input>
						</div>
					</div>
				</div>
			</>
		);
	}
}
export default TreaRouterParams;
