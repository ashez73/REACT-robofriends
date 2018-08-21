import React, { Component } from 'react';
import Cardlist from './Cardlist';
import { robots } from './Robots';
import 'tachyons';
import SearchBox from './SearchBox';
import Scroll from './Scroll';


class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        return response.json();
      })
      .then(users => {
        this.setState({ robots: users })
      }

      );
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
      return robot.username.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    if (this.state.robots.length === 0) {
      return <h1>loading</h1>
    }
    else {
      return (
        <div>
          <h1>Robo Friends</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <Scroll>
          <Cardlist robots={filteredRobots} />
          </Scroll>
        </div>
      );
    }
  }
}
export default App;