import React from "react"
import Profile from "./Profile"

const Player = (props) => {
    return (
        <div>
            <ul className="header">
            <h1>{props.label}</h1>
            <h3 style={{textAlign: 'center'}}>Score: {props.score}</h3>
            <Profile info={props.profile} />
            </ul>
        </div>
    )
}
export default Player