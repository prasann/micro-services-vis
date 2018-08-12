import React, { Component, createRef } from 'react';
import { Network } from 'vis';
import dataFromFile from './data.json';
import Description from './Description';
import transform from './transform';
import networkOptions from './networkOptions';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.appRef = createRef();
    this.network = {};
    this.state = { service: undefined };
    this.selectedService = this.selectedService.bind(this);
  }

  selectedService(id) {
    return dataFromFile.services.find(service => {
      return service.id === id;
    });
  }

  componentDidMount() {
    const viewData = transform(dataFromFile);
    this.network = new Network(this.appRef.current, viewData, networkOptions);
    this.network.on('click', params => {
      this.setState({ service: this.selectedService(params.nodes[0]) });
    });
  }

  render() {
    return (
      <div className="container">
        <div className="main-app" ref={this.appRef} />
        <div className="desc">
          <Description service={this.state.service} />
        </div>
      </div>
    );
  }
}

export default App;
