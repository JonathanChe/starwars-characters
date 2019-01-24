import React, { Component } from 'react';
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
        <h1 id="title">Star Wars Characters</h1>
      </div>
    );
  }
}

export default App;
