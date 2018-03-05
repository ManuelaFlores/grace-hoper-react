import React, { Component } from 'react';

/*Componentes de la página */
import Header from './components/header/header';
import Aside from "./components/aside/aside";
import Main from "./components/main/main";


class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
        <Aside/>
      </div>
    );
  }
}

export default App;
