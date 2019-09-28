import React from 'react';
import ReactDOM from 'react-dom';
import Person from './Person.js';
import './index.css';
import data from './sample_person_data.json';

let rootElement = document.getElementById('root');
ReactDOM.render(<Person person_name={rootElement.getAttribute('person_name')}/>, rootElement);
