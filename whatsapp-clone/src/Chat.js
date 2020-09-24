import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { SearchOutlined, AttachFile, MoreVert, InsertEmoticon, Mic } from '@material-ui/icons';
import './Chat.css'
import { useParams } from 'react-router-dom';
import { db } from './firebase';

function Chat() {
    const [input, setInput] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState('');
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId).onSnapshot(snapshot => (
                setRoomName(snapshot.data().name)
            ))

            db.collection("rooms").doc(roomId)
            .collection("messages").orderBy('timestamp', "asc")
            .onSnapshot(snapshot => (
                setMessages(snapshot.docs.map(doc => doc.data()))
            ))
        }
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);
        setInput('');
    }

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/${roomId}.svg`} />
                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>Lass seen at...</p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">

                {messages.map(message => (
                    <p className={`chat__message ${true && "chat__reciever"}`}>
                        <span className="chat__message__name">
                            {message.name}
                        </span>
                        {message.message}
                        <span className="chat__message__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

            </div>

            <div className="chat__footer">

                <InsertEmoticon />

                <form >
                    <input type="text" placeholder="Type a message" value={input} onChange={e => setInput(e.target.value)} />

                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>

                <Mic />

            </div>

        </div>
    )
}

export default Chat
