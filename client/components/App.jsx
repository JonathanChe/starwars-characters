import React, { Component } from 'react';

import Search from './Search';
import Character from './Character';
import Footer from './Footer';
import trooper from '../../assets/trooper.png';

require('babel-polyfill');

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCharacters: [],
      currentAPIRoute: 'https://swapi.co/api/people/',
      nextApiRoute: null,
      previousApiRoute: null,
      loading: false,
    };
    this.fetchNext = this.fetchNext.bind(this);
    this.showCharacters = this.showCharacters.bind(this);
  }

  async componentDidMount() {
    const data = await fetch('https://swapi.co/api/people/')
      .then(response => response.json())
      .then(response => response.results);
    this.setState({ currentCharacters: data });
  }

  async fetchNext(route) {
    await this.setState({
      loading: true,
      currentAPIRoute: route,
    });
    fetch(route)
      .then(res => res.json())
      .then(response => {
        const { currentAPIRoute } = this.state;
        if (route === currentAPIRoute) {
          this.setState({
            currentCharacters: response.results,
            nextApiRoute: response.next,
            previousApiRoute: response.previous,
          });
        }
      })
      .catch(err => console.error('Unable to fetch ', err));
  }

  showCharacters() {
    const { currentCharacters, loading } = this.state;
    if (loading) return (<img id="loading" src={trooper} alt="loading" />);
    const characters = currentCharacters.map(character => (
      <Character
        key={character.url}
        character={character}
      />
    ));
    return characters;
  }

  render() {
    const {
      nextApiRoute,
      previousApiRoute,
      loading,
    } = this.state;

    return (
      <div id="wallpaper">
        <div id="App">
          <h1 id="title">Star Wars Characters </h1>
          <Search fetchNext={this.fetchNext} />
          <div id="container">
            {this.showCharacters()}
          </div>
          <Footer
            next={nextApiRoute}
            previous={previousApiRoute}
            fetchNext={this.fetchNext}
            loading={loading}
          />
        </div>
      </div>
    );
  }
}

export default App;
