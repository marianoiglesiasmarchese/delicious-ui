import React from "react";

class Profile extends React.Component{

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
        // 3. trigger the event to save profile service
    }

    render(){
        return (
            <>
            <h1> Profile </h1>
            <form onSubmit={this.save}>
                <label>Nickname</label>
                <input ref={this.input1} type="text" required placeholder="Nickname" defaultValue="" />
                <label>Name*</label>
                <input ref={this.input2} type="text" required placeholder="Name" defaultValue="" />
                <label>Lastname*</label>
                <input ref={this.input3} type="text" required placeholder="Lastname" defaultValue=""/>
                <label>Email</label>
                <input ref={this.input4} type="email" placeholder="youtemail@host.com" defaultValue="" />
                {/** Regarding the change of password maybe we could use allway google or facebook authorization */}
                <div>
                    <button type="submit"> Save/Update </button>
                </div>        
            </form>
            </>
        )
    }
}

export default Profile;