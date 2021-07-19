import React from 'react';
import ReactDOM from 'react-dom';
import ClassComp from './ClassComp';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ClassComp />, div);
  ReactDOM.unmountComponentAtNode(div);
});