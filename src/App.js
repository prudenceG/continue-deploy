import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  componentDidMount() {
    console.log('launch app');
    this.postMessage()
  }

  getMessage = () => {
    //
  }

  postMessage = async () => {
    fetch('http://localhost:3001/api/messages?channel_id=1', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
      // body:
      //   'content=Woow… Just discovered this website. A dream come true…&personalWebsiteURL=https://freeeemoviiiieeees.now.sh&channelId=1',
    }).then(res => res.json())
      .then((json) => {
        fetch('http://localhost:3001/test', {
          method: 'POST',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
          },
          body: `data=${json}`
        })
      })
      .catch(err => console.log('ERR', err))
  }

  render() {
    return (
      <div className="App">
        <a href="http://localhost:3002">GO to app Wild Chat</a>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p style={{ color: 'red' }}>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
