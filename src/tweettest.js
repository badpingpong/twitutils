const dotenv = require("dotenv")
dotenv.config();

const env = process.env;
const Twitter = require("twitter");
const client = new Twitter({
    consumer_key: env.REACT_APP_CONSUMER_KEY,
    consumer_secret: env.REACT_APP_CONSUMER_SECRET,
    access_token_key: env.REACT_APP_ACCESS_TOKEN_KEY,
    access_token_secret: env.REACT_APP_ACCESS_TOKEN_SECRET,
})

function tweetPost(content) {
    client.post('statuses/update', {status: content}, function(error, tweet, response) {
      if (!error) {
        console.log("tweet success: " + content);
      } else {
        console.log(error);
      }
    });
}

function fetchZip(number){
    const url = "https://zipcloud.ibsnet.co.jp/api/search";
    fetch(url + "?"+ number, {
        method: "GET",
    }).then(console.log)
}
fetchZip(3050006)