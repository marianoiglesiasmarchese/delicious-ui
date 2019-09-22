import React from "react";

class CreateRecipe extends React.Component{

    input1 = React.createRef();
    input2 = React.createRef();
    input3 = React.createRef();
    input4 = React.createRef();

    save = (event) => {
        // 1. Stop the form from submitting
        event.preventDefault();
        // 2. get the dat from the inputs
        console.log(this.input1.current.value);
        console.log(this.input2.current.value);
        console.log(this.input3.current.value);
        console.log(this.input4.current.value);
        // 3. trigger the event to save recipe service
    }

    render(){
        return (
            <>
            <h1> New recipe </h1>
            <form onSubmit={this.save}>
                <label>Name*</label>
                <input ref={this.input1} type="text" required placeholder="Name" defaultValue="" />
                <label>Description*</label>
                <input ref={this.input2} type="text" required placeholder="Description" defaultValue="" />
                <label>Photo link*</label>
                <input ref={this.input3} type="file" required />
                <label>Social network source link</label>
                <input ref={this.input4} type="link" placeholder="https://www.socialnetwork.com" defaultValue="" />
                <div>
                    <span>
                        <button type="submit"> Save/Update </button>
                        <button type="reset"> Clean form </button> 
                    </span>
                </div>        
            </form>
            </>
        )
    }
}

export default CreateRecipe;