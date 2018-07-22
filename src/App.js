import React, { Component, createRef } from 'react';
import { DataSet, Network } from 'vis';
import './App.css';

const nodes = new DataSet([
  { id: 1, label: 'Node 1', shape: 'circle' },
  { id: 2, label: 'Node 2', shape: 'circle' },
  { id: 3, label: 'Node 3', shape: 'circle' },
  { id: 4, label: 'Node 4', shape: 'circle' },
  { id: 5, label: 'Node 5', shape: 'circle' }
]);

// create an array with edges
const edges = new DataSet([
  { from: 1, to: 3 },
  { from: 1, to: 2 },
  { from: 2, to: 4 },
  { from: 2, to: 5 }
]);

const data = {
  nodes: nodes,
  edges: edges
};

const options = {
  edges:{
    arrows: {
      to:     {enabled: false, scaleFactor:1, type:'arrow'},
      middle: {enabled: false, scaleFactor:1, type:'arrow'},
      from:   {enabled: false, scaleFactor:1, type:'arrow'}
    },
    arrowStrikethrough: true,
    chosen: true,
    color: {
      color:'red',
      highlight:'#848484',
      hover: '#848484',
      opacity:1.0 
    },
    dashes: false,
    font: {
      color: '#343434',
      size: 14, // px
      face: 'arial',
      background: 'none',
      strokeWidth: 2, // px
      strokeColor: '#ffffff',
      align: 'horizontal',
      multi: false,
      vadjust: 0,
      bold: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold'
      },
      ital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'italic',
      },
      boldital: {
        color: '#343434',
        size: 14, // px
        face: 'arial',
        vadjust: 0,
        mod: 'bold italic'
      },
      mono: {
        color: '#343434',
        size: 15, // px
        face: 'courier new',
        vadjust: 2,
        mod: ''
      }
    },
    hoverWidth: 1.5,
    label: undefined,
    labelHighlightBold: true,
    length: undefined,
    scaling:{
      min: 1,
      max: 15,
      label: {
        enabled: true,
        min: 14,
        max: 30,
        maxVisible: 30,
        drawThreshold: 5
      },
      customScalingFunction: function (min,max,total,value) {
        if (max === min) {
          return 0.5;
        }
        else {
          var scale = 1 / (max - min);
          return Math.max(0,(value - min)*scale);
        }
      }
    },
    selectionWidth: 1,
    selfReferenceSize:20,
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.5
    },
    title:undefined,
    value: undefined,
    width: 1,
    widthConstraint: false
  },
  manipulation: {
    enabled: true
  }
};

class App extends Component {

  constructor() {
    super();
    this.appRef = createRef();
    this.network = {};
  }

  componentDidMount() {
    this.network = new Network(this.appRef.current, data, options);
    this.network.on('click', (params) => {
      console.log(params.nodes);
    });
  }

  render() {
    return (
      <div className="main-app" ref={this.appRef} />
    );
  }
}

export default App;

