import React from "react";

import { Textfield, Button } from "react-mdl";

class Profile extends React.Component{

    state = {
        nickname: "",
        name: "",
        lastname: "",
        email: ""
    }

    onChange = e => {
        //console.log(e.target);
        //console.log(this.state);
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    save = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. Build the object to be sended
        // 3. Trigger the event to save profile service
    }

    render(){
        return (
            <div align="center" style={{ padding: "25px"}}>
                <h1> Profile </h1>
                <form onSubmit={this.save}>

                    <Textfield                        
                        name="nickname"
                        value={this.state.nickname}
                        onChange={(e) => {this.onChange(e)}}
                        label="Nickname..."
                        floatingLabel
                        style={{width: '400px'}}                    
                    />
                    <br/>

                    <Textfield
                        required
                        name="name"
                        value={this.state.name}
                        onChange={(e) => {this.onChange(e)}}
                        label="Name..."
                        floatingLabel
                        style={{width: '400px'}}                    
                    />
                    <br/>
                    
                    <Textfield
                        required
                        name="lastname"
                        value={this.state.lastname}
                        onChange={(e) => {this.onChange(e)}}
                        label="Lastname..."
                        floatingLabel
                        style={{width: '400px'}}                    
                    />
                    <br/>
                    
                    <Textfield
                        required
                        name="email"
                        value={this.state.email}
                        onChange={(e) => {this.onChange(e)}}
                        label="Email..."
                        floatingLabel
                        style={{width: '400px'}}
                        type="email"
                    />
                    <br/>

                    {/** Regarding the change of password maybe we could use allway google or facebook authorization */}
                    <div>
                        <Button raised ripple type="submit">Save/Update</Button>
                    </div>        
                </form>
            </div>
        )
    }
}

export default Profile;