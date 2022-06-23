import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import Home from './Home';
import Contato from './Contato';
import SobreNos from './SobreNos';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobrenos" element={<Contato/>}/>
            <Route path="/contato" element={<SobreNos/>}/>
        </Routes>
        <Footer/>
      </Router>
    )
  }
}
