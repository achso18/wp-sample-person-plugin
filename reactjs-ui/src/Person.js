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
      modalDisplay: "none",
      response: "",
    }

    for (let p of persons) {
      if (p.firstLastName.toLowerCase() === this.props.person_name.toLowerCase()) {
        this.person = p;
        break;
      }
    }
  }

  componentDidMount() {
    fetch(
      wpsp_http_object.ajax_url, {
      method: "post",
      _ajax_nonce: wpsp_http_object.nonce,
      action: "get_person_data",
      title: "John Doe"
    })
    .then(res => res.json())
    .then((result) => {
      this.setState({
        response: result.response
      });
      console.log(JSON.stringify(result));
    })
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
