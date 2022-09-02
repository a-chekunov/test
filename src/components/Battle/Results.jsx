import React, { useState, useEffect} from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../../api";
import { Link } from "react-router-dom";
import Player from './Player'


const Results = () => {

    const location = useLocation()
    const [loading, setLoading] = useState(true)
    const [winner, setWinner] = useState(null)
    const [loser, setLoser] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=> console.log(winner))
    useEffect(() => {
        const searchParams = new URLSearchParams(location.search)
        battle([searchParams.get('playerOneName'), searchParams.get('playerTwoName')])
        .then(data => {
            if(!data){
                setError('Looks like you have problem!');
                setLoading(false)
            }

            setError(null);
            setLoading(false);
            setWinner(data[0])
            setLoser(data[1])
        })
    },[location.search])

    if(loading){
        return <p>Loading....</p>
    }

    if(error){
        return(
            <div>
                <p>error</p>
                <Link to="/battle">Reset</Link>
            </div>
        )
    }
    
    return(
        <div className="row">
            {winner && <Player
            label="Winner"
            score={winner.score}
            profile={winner.profile}
            />}
            {loser && <Player
            label="Loser"
            score={loser.score}
            profile={loser.profile}
            />}
        </div>
    )
}

export default Results;