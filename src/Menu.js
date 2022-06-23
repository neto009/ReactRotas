import React, { Component } from 'react';
import './css/style.css';
import {Link} from 'react-router-dom';

export default class Menu extends Component {
  render() {
    return (
      <nav >
          <Link to="/">Home</Link>
          <Link to="/sobrenos">Sobre nós</Link>
          <Link to="/contato">Contato</Link>
      </nav>
    )
  }
}
