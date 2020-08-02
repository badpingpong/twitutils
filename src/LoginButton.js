import React from "react";

class LoginButton extends React.Component {
  constructor(props) {
    super(props);
    this.onButtonClick = this.onButtonClick.bind(this);
    this.tweetThread = this.tweetThread.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  async tweetThread(thread) {
    let lastTweetID = "";
    for (const status of thread) {
      const tweet = await this.props.client.post("statuses/update", {
        status: status,
        in_reply_to_status_id: lastTweetID,
        auto_populate_reply_metadata: true,
      });
      lastTweetID = tweet.id_str;
    }
  }

  async getUser(screen_name){
    const rateLimits = await this.props.client.get("statuses/show", {
      screen_name: screen_name,
    })
    return rateLimits;
  }

  onButtonClick() {
    this.tweetThread = this.tweetThread.bind(this);
    this.getUser = this.getUser.bind(this);
    //const thread = ["First tweet", "Second tweet", "Third tweet"];
    //this.tweetThread(thread).catch(console.error);
    const a = require("./tweettest.js");
    console.log(a);
    function fetchZip(number) {
      const url = "https://zipcloud.ibsnet.co.jp/api/search";
      fetch(url + "?zipcode=" + number, {
        method: "GET",
      }).then((response) => response.text())
      .then((text) => {
        console.log(text);
      })
    }
    fetchZip(3050006);

    fetch("https://holidays-jp.github.io/api/v1/date.json", {
      method: "GET",
    })
      .then((response) => response.text())
      .then((text) => {
        console.log(text);
      });
    
    this.getUser("retchoon");
  }

  render() {
    return <button onClick={this.onButtonClick}>Login</button>;
  }
}

export default LoginButton;
