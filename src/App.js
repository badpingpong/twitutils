import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginButton from "./LoginButton.js";
import { instanceOf } from 'prop-types';
import dotenv from "dotenv";

class App extends Component {
  constructor(props) {
    super(props);
    dotenv.config();
    const env = process.env
    console.log("env=", env);
    // クッキー確認
    console.log(props);

    // クッキーでユーザーID、トークンが残っていればログイン、そうでなければ何もしない
    // ログインに成功した場合は、stateのユーザーを変更する
    this.state = {
      token: "token",
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
          <LoginButton data={this.state} a={"data dayo"} b={this.props}/>
        </p>
      </div>
    );
  }
}

export default App;
