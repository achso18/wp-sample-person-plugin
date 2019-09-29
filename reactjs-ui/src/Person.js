import React from 'react';
import PersonDescrModal from './PersonDescrModal.js';
import './Person.css';

const wpsp_http_object = window.wpsp_http_object;
const jQuery = window.jQuery;

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

  constructor(props) {
    super(props);
    
    this.state = {
      modalDisplay: "none",
      isLoading: "true"
    }

    this.person = "";
  }

  componentDidMount() {

    let body = { '_ajax_nonce': wpsp_http_object.nonce,
                 'action': 'send_person_data',
                 'person_name': this.props.person_name
               };

    var that = this;
    jQuery.post( wpsp_http_object.ajax_url, body,
      function(person_data) {
        that.person = person_data;
        that.setState({isLoading: false});
    });
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
