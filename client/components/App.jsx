import React, { Component } from 'react';
import Search from './Search';
import Character from './Character';
import View from './View';

require('babel-polyfill');

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
          <Character />
          <View />
        </div>
      </div>
    );
  }
}

export default App;
