import React, { Component } from 'react';
import axios from 'axios';

import "./App.css";
import SearchBar from "./components/SearchBar/SearchBar"; 
import UserCard from './components/UserCard/UserCard';
import FollowersList from "./components/FollowersList/FollowerList";

class App extends Component {
  state = {
    user: "",
    followers: []
  }

  componentDidUpdate(prevProps, prevState) {
    
    if (this.state.user !== prevState.user) {
      this.handleFollowersUpdate();
    }
  }

  handleUserChange = (name) => {
    axios.get(`https://api.github.com/users/${name}`)
    .then( resp => {
      // console.log(`APP handleusercahnge: `, resp.data);
      this.setState({
        ...this.state,
        user: resp.data
      });
    })
    .catch( err => {
      // console.log(`APP handleuserchange:`, err.response.status, err.response.statusText);
    })
  };

  handleFollowersUpdate = () => {
    axios.get(`https://api.github.com/users/${this.state.user.login}/followers`)
    .then( resp => {
      // console.log(resp);
      this.setState({
        ...this.state,
        followers: resp.data
      });
    })
    .catch( err => {
      console.log(err);
    })
  }

  

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <SearchBar handleUserChange={this.handleUserChange}/>
        </header>
        { this.state.user ? 
          <div className="App-body">
            <UserCard user={this.state.user}/>
            <FollowersList followers={this.state.followers} />
          </div> :
          <div className="App-body">
            <h2>SEARCH FOR USER</h2>
          </div> }
      </div>
    )
  }
};

export default App;