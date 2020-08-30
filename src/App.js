import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from '@material-ui/core';
import {Slider} from '@material-ui/core';

function App() {
  const mark = [{
    value: 0,
    label: 'Start'
    },
    {
      value: 50,
      label: 50
    },
    {
      value: 100,
      label : 100
    },
    {
      value: 150,
      label: 150
    },
    {
      value: 200,
      label: 'End'
    }
  ];

  const [val, setVal] = useState([30,70]);
  const updateVal = (e,val)=>{
    setVal(val);
    console.log(val);
  }

  return (
    <div className="App">
      <h1>React MUI</h1>
      <div>
        <button>Click me</button>
        <Button color="primary">Material UI button</Button>
        <Button variant="contained">Default</Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </div>
      <div style={{width:300, margin:30}}>
        Normal Slider -
       <Slider
       color = "primary"
       defaultValue = {90}
       step = {50}
       max = {200}
       marks = {mark}
       valueLabelDisplay = "auto"
       orientation = "horizontal"
       />
      </div>

      <div style={{width:300, margin:30}}>
        Range Slider -
       <Slider
         value = {val}
         max = {200}
         valueLabelDisplay = "auto"
         onChange = {updateVal}
       />
      </div>


{/*       <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
