import React, { ReactElement } from 'react';
import "./Chat.css";
import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, SearchOutlined, MoreVert } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';

interface Props {

}

function Chat({ }: Props): ReactElement {
    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar />

                <div className="chat__headerInfo">
                    <h3>
                        Room name
                </h3>
                    <p>Last seen at ...</p>
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
                    <span className="chat__name">
                        Pradeep
                    </span>
                    This is message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">
                        Pradeep
                    </span>
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message chat__receiver">
                    <span className="chat__name">
                        Aditi
                    </span>
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>

                <p className="chat__message">
                    <span className="chat__name">
                        Pradeep
                    </span>
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p>
            </div>

            <div className="chat__footer">
                <InsertEmoticonIcon />
                <form>
                    <input placeholder="Type a message" type="text" />
                    <button type="submit">Send a message</button>
                </form>
                <MicIcon />

            </div>
        </div>
    )
}

export default Chat
