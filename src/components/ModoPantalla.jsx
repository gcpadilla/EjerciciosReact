import React, { Component } from 'react'
import Selector from './Selector'

class ModoPantalla extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "light"
     };
  }
  changeMode=(mode)=> {
    this.setState({ mode });
  }

  render() {
    return (
      <div className={`App ${this.state.mode}`}>
        <Selector changeMode={this.changeMode} />
        <p>
          {this.state.status}
        </p>
        <p>
          {this.state.mode}
        </p>
      </div>
    );
  }
}

export default ModoPantalla;