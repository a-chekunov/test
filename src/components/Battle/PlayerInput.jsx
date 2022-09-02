import React, { useState}  from "react";

export const PlayerInput = (props) =>{

    const [userName, setUsername] = useState()

    const handleChange = (event) => {
        setUsername(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
            props.onSubmit(props.id, userName)
    }

    return(
        <form className="column" onSubmit={handleSubmit}>
            <label className="header" htmlFor="username">{props.label}</label>
        <input 
            type="text"
            placeholder="Github user name"
            id="username"
            autoComplete="off"
            value={userName}
            onChange={handleChange}
                />
                <button 
                className="button" 
                type="submit" 
                disabled={!userName} >
                    Submit
                </button>
        </form>
   
    )
}