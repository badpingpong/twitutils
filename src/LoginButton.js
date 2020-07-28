import React from "react";
import Twitter from "twitter-lite";

class LoginButton extends React.Component {
    constructor(props){
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }


    onButtonClick() {
        console.log(this.props);
        const client = new Twitter({
            consumer_key: this.props.consumer_key,
            consumer_secret: this.props.consumer_secret
        })

        client.getRequestToken("http://192.168.150.37:3000/").then(res =>{
            console.log({
                reqTkn: res.oauth_token,
                reqTknSecret: res.oauth_token_secret
            })
        }).catch(console.error);
    }

    render(){
        return (
            <button onClick={this.onButtonClick}>
                Login
            </button>
          )
    }
}

export default LoginButton;