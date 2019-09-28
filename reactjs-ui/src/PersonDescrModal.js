import React from 'react';
import './PersonDescrModal.css';

function PersonDescrModal(props) {
  return (
    <div className="sample-plugin-person-modal" style={{display: props.display}} onClick={props.onClick}>
      <div className="person-modal-frame">
        <div className="person-modal-header">
          <h4 className="modal-header-headline">{props.position}</h4>
          <span className="modal-header-close" onClick={props.onClick}>&times;</span>
        </div>
        <div className="modal-content">
          <p>{props.description}</p>
        </div>
        <div className="modal-social">
          <ul className="modal-social-list">
            <li><a href={props.social ? props.social.github : ""}>Github</a></li>
            <li><a href={props.social ? props.social.linkedin : ""}>LinkedIn</a></li>
            <li><a href={props.social ? props.social.xing : ""}>Xing</a></li>
            <li><a href={props.social ? props.social.facebook : ""}>Facebook</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PersonDescrModal;
