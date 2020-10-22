import React from 'react'
import './Input.css'

const Input = ({message, setMessage, sendMessage}) => {
    return (
        <form className="form">
            <input
                className="input"
                type="text"
                value={message}
                placeholder="Saisir un message ..." 
                onChange={(event) => setMessage(event.target.value)}
                onKeyPress = {event => event.key === 'Enter' ? sendMessage(event): null}
                />
            <button className="sendButton" onClick={event => sendMessage(event)}><i className="fas fa-arrow-right"></i></button>
        </form>
    )
}

export default Input
