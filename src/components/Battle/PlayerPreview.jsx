import React from "react"

const PlayerPreview = (props) => {
    return(
        <div>
            <div className="column">
                    <h3 className="username ">{props.username}</h3>
                    <img className="avatar" src={props.avatar} alt="Avatar" /> 
                </div> 
                {props.children}
        </div>
    )

}

export default PlayerPreview