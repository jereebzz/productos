import { Component } from 'react';
import axios from 'axios';
import inicio_sesion from "./Componentes/inicio_sesion"
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <inicio_sesion/>
    )
  }
}