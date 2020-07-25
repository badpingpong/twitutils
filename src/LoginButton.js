import React from "react";
//import login from "./login";

class LoginButton extends React.Component {
    constructor(props){
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }


    onButtonClick() {
        console.log(this.props);
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