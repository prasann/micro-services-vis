import React, { Component } from "react";
import './Description.css';

class Description extends Component {

  noNodeSelected() {
    return <div >Click on a node to see something here.</div >;
  }

  descriptionPanel() {
    return (
      <div className='description-panel' >
        <h2 >{this.props.service.meta.name}</h2 >
      </div >
    )
  }

  render() {
    return this.props.service ? this.descriptionPanel() : this.noNodeSelected();
  }
}

export default Description;