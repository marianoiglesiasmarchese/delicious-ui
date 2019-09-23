import React from "react";

import { Textfield, Button } from "react-mdl";

class CreateRecipe extends React.Component{

    state = {
        name: "",
        description: "",
        photo: null,
        socialNetwork: ""
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
        // 3. Trigger the event to save recipe service
    }

    render(){
        return (
            <div align="center" style={{ padding: "25px"}}>
                <h1> New recipe </h1>

                <form onSubmit={this.save}>
                    
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
                        name="description"
                        value={this.state.description}
                        onChange={(e) => {this.onChange(e)}}
                        label="Description..."
                        floatingLabel
                        rows={5}
                        style={{width: '400px'}}
                    />
                    <br/>

                    <Textfield
                        required
                        name="photo"
                        onChange={(e) => {this.onChange(e)}}
                        label="Recipe photo..."
                        floatingLabel
                        style={{width: '400px'}}
                        type="file"
                    />
                    <br/>

                    <Textfield
                        name="socialNetwork"
                        value={this.state.socialNetwork}
                        onChange={(e) => {this.onChange(e)}}
                        label="Social network source link..."
                        floatingLabel
                        style={{width: '400px'}}
                        type="link"
                    />
                    <br/>
                    
                    <div>
                        <Button raised ripple type="submit">Save/Update</Button>
                    </div>        
                </form>
            </div>
        )
    }
}

export default CreateRecipe;