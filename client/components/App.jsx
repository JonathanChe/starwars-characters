import React, { Component } from 'react';
require('babel-polyfill');
import Search from './Search';

class App extends Component {

  async componentDidMount() {
    const data = await fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(response => response.results);
  }

  render() {
    return (
      <div id="wallpaper">
        <div id="App">
          <h1 id="title">Star Wars Characters</h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
