import React from 'react';
import PersonDescrModal from './PersonDescrModal.js';
import './Person.css';
import data from './sample_person_data.json';

const persons = data.persons;
let person = "";

function PersonPic(props) {
  let altText = "Picture of " + props.image;
  return (
    <div className="sample-plugin-person-pic">
      <img src={props.image} alt={altText} height="400" width="400"/>
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
      if (p.firstLastName.toLowerCase() === this.props.person_name.toLowerCase()) {
        person = p;
        break;
      }
    }
  }

  handleClick() {
    if (this.state.modalDisplay === "none") {
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
            image={person.image}
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
        <PersonDescrModal
          display={this.state.modalDisplay}
          onClick={() => this.handleClick()}
          position={person.position}
          description={person.description}
          social={person.social}
        />
      </div>
    );
  }
}

export default Person;
