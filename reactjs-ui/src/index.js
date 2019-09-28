import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.js';
import './index.css';

let rootElement = document.getElementById('wpsp-person-root');
ReactDOM.render(<Person person_name={rootElement.getAttribute('person_name')}/>, rootElement);
