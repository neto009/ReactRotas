import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <p>
          Sou a homepage. <Link to="/sobrenos">CLIQUE AQUI!</Link>
      </p>
    )
  }
}
