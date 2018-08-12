import React, { Component } from 'react';
import './Description.css';

class Description extends Component {
  noNodeSelected() {
    return <div>Click on a node to see something here.</div>;
  }

  descriptionPanel({ meta }) {
    return (
      <div className="description-panel">
        <h2>{meta.name}</h2>
        <div>
          <b> Team: </b> {meta.team}
        </div>
        <div>
          <b> TechStack: </b> {meta.techStack}
        </div>
        <div>
          <b> Git Repo: </b> {meta.gitRepo}
        </div>
        <div>
          <b> External Systems: </b> {meta.externalSystems}
        </div>
      </div>
    );
  }

  render() {
    return this.props.service
      ? this.descriptionPanel(this.props.service)
      : this.noNodeSelected();
  }
}

export default Description;
