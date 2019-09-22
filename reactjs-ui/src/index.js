import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


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
      firstName: "John",
      lastName: "Doe",
      position: "CEO",
      picture: null

    }
  }

  render() {
    return (
      <div className="sample-plugin-person">
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
    );
  }
}

ReactDOM.render(<Person />, document.getElementById('root'));
