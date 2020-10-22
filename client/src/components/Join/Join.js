import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import './Join.css'

const Join = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div className="joinOuterContainer">
            <div className="joinInnerContainer">
                <h2 className="heading">Connexion</h2>
                <div><input placeholder="Nom" className="joinInput" type="text" onChange={(event)=> setName(event.target.value)}/></div>
                <div><input placeholder="Code secret" className="joinInput mt-20" type="text" onChange={(event)=> setRoom(event.target.value)}/></div>

                <Link onClick={event =>(!name || !room)? event.preventDefault() : null} to={`/chat?name=${name}&&room=${room}`}>
                    <button className="button mt-20" type="submit">Se connecter</button>
                </Link>
            </div>
        </div>
    )
}

export default Join;
 