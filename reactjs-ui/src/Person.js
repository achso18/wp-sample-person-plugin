import React from 'react';
import PersonDescrModal from './PersonDescrModal.js';
import './Person.css';
import persons from './sample_person_data.json';


function PersonPic(props) {
  let altText = "Picture of " + props.firstLastName;
  return (
    <div className="wpsp-person-pic">
      <img src={props.image} alt={altText} height="400" width="400"/>
    </div>
  );
}

function PersonName(props) {
  return (
    <div className="wpsp-person-fname">
      {props.firstLastName == null ? "Name not recognized!" : props.firstLastName}
    </div>
  );
}

function PersonPos(props) {
  return (
    <div className="wpsp-person-pos">
      {props.position}
    </div>
  );
}


class Person extends React.Component {

  person = "";

  constructor(props) {
    super(props);
    this.state = {
      modalDisplay: "none"
    }

    for (let p of persons) {
      if (p.firstLastName.toLowerCase() === this.props.person_name.toLowerCase()) {
        this.person = p;
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
      <div className="wpsp-person">
          <div className="wpsp-person-card" onClick={() => this.handleClick()}>
          <PersonPic
            image={this.props.image_url + this.person.image}
            firstLastName={this.person.firstLastName}
          />
          <div className="wpsp-person-detail">
            <PersonName
              firstLastName={this.person.firstLastName}
            />
            <PersonPos
              position={this.person.position}
            />
          </div>
        </div>
        <PersonDescrModal
          display={this.state.modalDisplay}
          onClick={() => this.handleClick()}
          firstLastName={this.person.firstLastName}
          description={this.person.description}
          social={this.person.social}
        />
      </div>
    );
  }
}

export default Person;
