import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from "./LoginButton.js";
import dotenv from "dotenv";
import Twitter from "twitter-lite"

class App extends Component {
  constructor(props) {
    super(props);
    dotenv.config();
    const env = process.env
    const client = new Twitter({
      consumer_key: env.REACT_APP_CONSUMER_KEY,
      consumer_secret: env.REACT_APP_CONSUMER_SECRET,
      access_token_key: env.REACT_APP_ACCESS_TOKEN_KEY,
      access_token_secret: env.REACT_APP_ACCESS_TOKEN_SECRET,
    });
    // クッキーでユーザーID、トークンが残っていればログイン、そうでなければ何もしない
    // ログインに成功した場合は、stateのユーザーを変更する
    this.state = {
      client: client
    };
  }

  render() {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
          <a className="twitter-share-button" href="https://twitter.com/intent/tweet?text=Hello%20world" data-size="large">Tweet></a>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <LoginButton client={this.state.client}/>
        </p>
      </div>
    );
  }
}

export default App;
