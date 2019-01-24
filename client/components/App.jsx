import React, { Component } from 'react';
import Search from './Search';
import Character from './Character';
import Footer from './Footer';

require('babel-polyfill');

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentCharacters: [],
      peopleApiRoute: 'https://swapi.co/api/people/',
      currentAPIRoute: 'https://swapi.co/api/people/',
      nextPeopleApiRoute: null,
      prevPeopleApiRoute: null,
      loadingPeople: false,
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

  fetchNext(route) {
    fetch(route)
      .then(res => res.json())
      .then(response => {
        const { currentAPIRoute } = this.state;
        if (route === currentAPIRoute) {
          this.setState({
            currentCharacters: response.results,
            nextPeopleApiRoute: response.next,
            prevPeopleApiRoute: response.previous,
          });
        }
      })
      .catch(err => console.error('Unable to fetch ', err));
  }

  showCharacters() {
    const { currentCharacters } = this.state;
    const characters = currentCharacters.map(character => (
      <Character
        key={character.url}
        character={character}
      />
    ));
    return characters;
  }

  render() {
    const { nextPeopleApiRoute, prevPeopleApiRoute } = this.state;
    return (
      <div id="wallpaper">
        <div id="App">
          <h1 id="title">Star Wars Characters </h1>
          <Search fetchNext={this.fetchNext} />
          <div id="container">
            {this.showCharacters()}
          </div>
          <Footer
            next={nextPeopleApiRoute}
            previous={prevPeopleApiRoute}
            fetchNext={this.fetchNext}
          />
        </div>
      </div>
    );
  }
}

export default App;
