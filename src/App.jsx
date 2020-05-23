import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Nav from "./components/Nav";
import Selector from "./components/Selector";
import Punto1 from "./components/Punto1";
import Punto2 from "./components/Punto2";
import Punto3 from "./components/Punto3";
import Punto4 from "./components/Punto4";
import Punto5 from "./components/Punto5";
import Punto6 from "./components/Punto6";
import Punto7 from "./components/Punto7";
import Punto8 from "./components/Punto8";
import Punto9 from "./components/Punto9";
import Punto10 from "./components/Punto10";
import TareaRouterParams from "./components/TareaRouterParams";
import Punto7Hooks from "./components/Punto7Hooks";
import Punto7HooksMondo from "./components/Punto7HooksMondo";
import Express from "./components/Express";
import Home from "./components/Home";
import ExpressCardEdit from "./components/ExpressCardEdit";

class App extends Component {
	state = {
		mode: "light"
	};

	changeMode = (mode) => {
		this.setState({ mode });
	};

	
	render() {
		return (
			<div className={`${this.state.mode}`}>
				<Selector changeMode={this.changeMode} mode={this.state.mode} />
				<div className={`${this.state.mode}`}>
					<Router>
						<Nav />
						<Switch>
							<Route path="/Punto1" exact component={Punto1} />
							<Route
								exact
								path="/Punto2"
								render={(props) => (
									<Punto2 {...props} saludo={`perro`} saludo1={`loco`} />
								)}
							/>
							<Route path="/Punto3" exact component={Punto3} />
							<Route path="/Punto4" exact component={Punto4} />
							<Route path="/Punto5" exact component={Punto5} />
							<Route path="/Punto6" exact component={Punto6} />
							<Route path="/Punto7" exact component={Punto7} />
							<Route path="/Punto8" exact component={Punto8} />
							<Route path="/Punto9" exact component={Punto9} />
							<Route path="/Punto10" exact component={Punto10} />
							<Route
								path="/TareaRouterParams/:userid"
								exact
								component={TareaRouterParams}
							/>
							<Route path="/" exact component={Home} />
							<Route path="/Punto7Hooks" exact component={Punto7Hooks} />
							<Route path="/Punto7HooksMondo" exact component={Punto7HooksMondo} />
							<Route path="/Express" exact component={Express} />
							<Route path="/editar/:id" exact component={ExpressCardEdit} />
						</Switch>
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
