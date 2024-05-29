import { Component } from 'react';
import axios from 'axios';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria_id:"",
      categorias: [],
      productos: []
    };
  }

  buscarCategorias() {
    const url = 'https://productos.ctpoba.edu.ar/api/categorias';
    // const url = 'http://10.0.4.103:3000/api/categorias';
    axios.get(url)
      .then((resp) => {
        console.log(resp.data);
        this.setState({ categorias: resp.data.categorias });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  buscarProductos(categoria_id) {
    const url = 'https://productos.ctpoba.edu.ar/api/productos';
    // const url = 'http://10.0.4.103:3000/api/productos';
    const config={
      params:{categoria_id}
    }
    axios.get(url, config)
      .then((resp) => {
        console.log(resp.data);
        this.setState({ productos: resp.data.productos });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div>
        <input
          type="button"
          value="Buscar categorias"
          onClick={() => this.buscarCategorias()}
        />
        <select
          value={this.state.categoria_id}
          onChange={(e) => this.setState({categoria_id:e.target.value})}
        >
          {this.state.categorias.map((cat, i) =>
          <option key={cat.id} value={cat.id} > {cat.nombre}</option>
    )}
    </select>
    <input
      type="button"
      value="Buscar productos"
      onClick={() => this.buscarProductos(this.state.categoria_id)}
    />
    <div className='tarjetas'>
    {this.state.productos.map((prod,id)=>
      <h2 key={id}> {prod.nombre} </h2>
    )}
    </div>
    </div>
    )
  }
}