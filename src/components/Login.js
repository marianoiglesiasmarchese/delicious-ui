import React from "react";

import { Button } from "react-mdl";

class Profile extends React.Component{

    loginWithGoogle = () => {
        console.log("google login")
        // trigger the event to login service
    }

    loginWithFacebook = () => {
        console.log("facebook login")
        // trigger the event to login service
    }

    render(){
        return (
            <div align="center" style={{ padding: "25px"}}>
            <h1> Login </h1>    
            <span>
                <Button raised ripple onClick={this.loginWithGoogle}>Google</Button>
                <Button raised ripple onClick={this.loginWithFacebook}>Facebook</Button>
            </span>                
            </div>
        )
    }
}

export default Profile;