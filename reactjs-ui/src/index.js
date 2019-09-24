import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import data from './sample_person_data.json';

const persons = data.persons;
let person = "";


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
        <div className="modal-social">
          <ul className="modal-social-list">
            <li><a href={props.link_github}>Github</a></li>
            <li><a href={props.link_linkedin}>LinkedIn</a></li>
            <li><a href={props.link_xing}>Xing</a></li>
            <li><a href={props.link_facebook}>Facebook</a></li>
          </ul>
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
      {props.firstLastName == null ? "Name not recognized!" : props.firstLastName}
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
      modalDisplay: "none"
    }

    for (let p of persons) {
      if (p.firstLastName.toLowerCase() == this.props.person_name.toLowerCase()) {
        person = p;
        break;
      }
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
            picture={null}
          />
          <div className="sample-plugin-person-detail">
            <PersonName
              firstLastName={person.firstLastName}
            />
            <PersonPos
              position={person.position}
            />
          </div>
        </div>
        <PersonDescModal
          display={this.state.modalDisplay}
          onClick={() => this.handleClick()}
          position={person.position}
          description={person.description}
          link_github={person.social.github}
          link_linkedin={person.social.linkedin}
          link_xing={person.social.xing}
          link_facebook={person.social.facebook}
        />
      </div>
    );
  }
}

let rootElement = document.getElementById('root');
ReactDOM.render(<Person person_name={rootElement.getAttribute('person_name')}/>, rootElement);
