import React from "react";

class Profile extends React.Component{

    loginWithGoogle = () => {
        // trigger the event to login service
    }

    loginWithFacebook = () => {
        // trigger the event to login service
    }

    render(){
        return (
            <>
            <h1> Login </h1>    
            <span>
                <button onClick={this.loginWithGoogle}> Google </button>
                <button onClick={this.loginWithFacebook}> Facebook </button>
            </span>                
            </>
        )
    }
}

export default Profile;