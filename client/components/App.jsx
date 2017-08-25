import React from 'react';
import ReactDOM from 'react-dom';
import { Button} from 'react-bootstrap';
import Navigationbar from './Navigationbar.jsx';

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <Navigationbar></Navigationbar>
      </div>);
  }
}
