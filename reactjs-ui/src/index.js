import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function PersonDescModal(props) {
  return (
    <div className="sample-plugin-person-modal" style={{display: props.display}} onClick={props.onClick}>
      <div className="person-modal-frame">
        <div className="person-modal-header">
          <h3 className="modal-header-headline">{props.position}</h3>
          <span className="modal-header-close" onClick={props.onClick}>&times;</span>
        </div>
        <div className="modal-content">
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}


function PersonPic(props) {
  return (
    <div className="sample-plugin-person-pic">
      {props.picture ? props.picture : "PIC"}
    </div>
  );
}

function PersonName(props) {
  return (
    <div className="sample-plugin-person-fname">
      {props.firstName} {props.lastName}
    </div>
  );
}

function PersonPos(props) {
  return (
    <div className="sample-plugin-person-pos">
      {props.position}
    </div>
  );
}


class Person extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: "none",
      firstName: "John",
      lastName: "Doe",
      position: "CEO",
      description: "CEO is a chief executive officer, the highest-rankig corporate officer (executive) or administrator in an organisation.",
      picture: null,

    }
  }

  handleClick() {
    if (this.state.modalDisplay == "none") {
      this.setState({modalDisplay: "block"});
    }
    else {
      this.setState({modalDisplay: "none"});
    }
  }

  render() {
    return (
      <div className="sample-plugin-person">
          <div className="sample-plugin-person-card" onClick={() => this.handleClick()}>
          <PersonPic
            picture={this.state.picture}
          />
          <div className="sample-plugin-person-detail">
            <PersonName
              firstName={this.state.firstName}
              lastName={this.state.lastName}
            />
            <PersonPos
              position={this.state.position}
            />
          </div>
        </div>
        <PersonDescModal
          display={this.state.modalDisplay}
          onClick={() => this.handleClick()}
          position={this.state.position}
          description={this.state.description}
        />
      </div>
    );
  }
}

ReactDOM.render(<Person />, document.getElementById('root'));
