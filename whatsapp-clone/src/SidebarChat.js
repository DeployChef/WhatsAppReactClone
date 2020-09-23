import { Avatar } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { db } from './firebase';
import './SidebarChat.css'

function SidebarChat({ addNewChat, id, name }) {

    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [])

    const createChat = () => {
        const roomName = prompt("Please enter name for chat")

        if (roomName) {
            db.collection('rooms').add({
                name: roomName
            });
        }
    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/bottts/${id}.svg`} />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>last message...</p>
            </div>
        </div>
    ) :
        (
            <div className="sidebarChat" onClick={createChat}>
                <h2>Add new Chat</h2>
            </div>
        )
}

export default SidebarChat