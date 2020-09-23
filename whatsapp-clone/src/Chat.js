import { Avatar, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { SearchOutlined, AttachFile, MoreVert } from '@material-ui/icons';
import './Chat.css'

function Chat() {
    const [seed, setSeed] = useState('')

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));

    }, [])

    return (
        <div className="chat">

            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/bottts/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
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
                <p className="chat__message">
                <span className="chat__message__name">
                        Name
                    </span>
                    Chat message

                    <span className="chat__message__timestamp">
                        3.12 pm
                    </span>
                </p>
            </div>

            <div className="chat__footer">

            </div>

        </div>
    )
}

export default Chat
