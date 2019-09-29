import React from 'react';
import './PersonDescrModal.css';

function PersonDescrModal(props) {
  return (
    <div className="wpsp-person-modal" style={{display: props.display}} onClick={props.onClick}>
      <div className="wpsp-person-modal-frame">
        <div className="wpsp-person-modal-header">
          <h4 className="wpsp-modal-header-headline">{props.firstLastName}</h4>
          <span className="wpsp-modal-header-close" onClick={props.onClick}>&times;</span>
        </div>
        <div className="wpsp-modal-content">
          <p>{props.description}</p>
        </div>
        <div className="wpsp-modal-social">
          <ul className="wpsp-modal-social-list">
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
