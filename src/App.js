import React, { Component, createRef } from 'react';
import { Network } from 'vis';
import dataFromFile from './data.json';
import transform from './transform';
import networkOptions from './networkOptions';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.appRef = createRef();
    this.network = {};
    this.state = { description: '' };
  }

  componentDidMount() {
    this.contractsData = transform(dataFromFile);
    this.network = new Network(this.appRef.current, this.contractsData, networkOptions);
    this.network.on('click', (params) => {
      this.setState({ description: `${this.contractsData.nodes.get(params.nodes[0]).label} is clicked` })
    });
  }

  render() {
    return (
      <div className="container" >
        <div className="main-app" ref={this.appRef} />
        <div className="desc" >{this.state.description}</div >
      </div >
    );
  }
}

export default App;

