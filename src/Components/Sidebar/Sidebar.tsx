import React, { ReactElement } from 'react';
import "./Sidebar.css";
import "./SidebarChats"
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import { SearchOutlined } from "@material-ui/icons";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from '@material-ui/core';
import SidebarChats from './SidebarChats';

interface Props {
    
}

function Sidebar({}: Props): ReactElement {
    return (
        <div className='sidebar' >
            <div className="sidebar__header">
                <Avatar src="https://lh3.googleusercontent.com/a-/AOh14GjBcwWzjA4zuHqp9ClPz6b1cTXu3UOVZwq8p9yIfbA=s88-c-k-c0x00ffffff-no-rj-mo"/>
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchcontainer">
                    <SearchOutlined />
                        <input placeholder="Search" type="text"/>
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChats />
                <SidebarChats />
                <SidebarChats />
            </div>

        </div>
    )
}

export default Sidebar
