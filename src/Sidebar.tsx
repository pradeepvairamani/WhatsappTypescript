import React, { ReactElement } from 'react';
import "./Sidebar.css";

interface Props {
    
}

function Sidebar({}: Props): ReactElement {
    return (
        <div className='sidebar' >
            <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar
