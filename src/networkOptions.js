const options = {
  autoResize: true,
  height: '100%',
  width: '100%',
  nodes: {
    shape: 'dot',
    size:30,
    font: {
      color: 'black',
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


export default options;