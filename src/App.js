import React, { Component, createRef } from 'react';
import { DataSet, Network } from 'vis';
import './App.css';

const nodes = new DataSet([
  { id: 1, label: 'Node 1', shape: 'circle', color: '#0078bf' },
  { id: 2, label: 'Node 2', shape: 'circle', color: '#00aa5b' },
  { id: 3, label: 'Node 3', shape: 'circle', color: '#b51b58' },
  { id: 4, label: 'Node 4', shape: 'circle', color: '#702269' },
  { id: 5, label: 'Node 5', shape: 'circle', color: '#5f3c25' },
  { id: 6, label: 'Node 6', shape: 'circle', color: '#ed312f' },
  { id: 7, label: 'Node 7', shape: 'circle', color: '#f58a33' },
  { id: 8, label: 'Node 8', shape: 'circle', color: '#00bccd' }
]);

// create an array with edges
const edges = new DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 },
  { from: 2, to: 5 },
  { from: 2, to: 5 },
  { from: 2, to: 1 },
  { from: 2, to: 1 },
  { from: 2, to: 6 },
  { from: 2, to: 7 },
  { from: 2, to: 8 },
  { from: 1, to: 7 },
  { from: 5, to: 8 },
]);

const data = {
  nodes: nodes,
  edges: edges
};

const options = {
  autoResize: true,
  height: '100%',
  width: '100%',
  nodes: {
    font: {
      color: 'white',
      size: 18
    }
  },
  edges: {
    arrows: {
      to: { enabled: false, scaleFactor: 1, type: 'arrow' },
      middle: { enabled: false, scaleFactor: 1, type: 'arrow' },
      from: { enabled: false, scaleFactor: 1, type: 'arrow' }
    },
    arrowStrikethrough: true,
    chosen: true,
  },
  physics: {
    enabled: true,
    repulsion: {
      centralGravity: 0.2,
      springLength: 200,
      springConstant: 0.05,
      nodeDistance: 100,
      damping: 0.09
    },
    maxVelocity: 50,
    minVelocity: 1,
    solver: 'repulsion',
    stabilization: {
      enabled: true,
      iterations: 1000,
      updateInterval: 100,
      onlyDynamicEdges: false,
      fit: true
    },
    timestep: 0.5,
    adaptiveTimestep: true
  }
};

class App extends Component {

  constructor() {
    super();
    this.appRef = createRef();
    this.network = {};
    this.state = { description: 'Some Long' };
  }

  componentDidMount() {
    this.network = new Network(this.appRef.current, data, options);
    this.network.on('click', (params) => {
      this.setState({ description: `${nodes.get(params.nodes[0]).label} is clicked` })
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

