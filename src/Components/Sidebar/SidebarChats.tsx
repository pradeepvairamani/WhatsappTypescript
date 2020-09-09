import React, { ReactElement } from 'react';
import "./SideBarChats.css";
import { Avatar } from '@material-ui/core';

interface Props {
    
}

function SidebarChats({}: Props): ReactElement {
    return (
        <div className="SidebarChat">
            <Avatar />
            <div className="SidebarChat__Info">
                <h2>
                    Room name
                </h2>
                <p>
                    Latest message
                </p>
            </div>
        </div>
    )
}

export default SidebarChats
