import React from 'react';
import {Link} from 'react-router-dom'

const HeaderComp = () => {
    return (
        <header className="headerCls">
            <h2>TASK APP</h2>
            <ul className="col-sm-6">
                <li className="col-sm-4"><Link to="/projects" >Projects</Link></li>
                <li className="col-sm-4"><Link to="/tasks" >Tasks</Link></li>
                <li className="col-sm-4"><Link to="/">Sign In</Link></li>
            </ul>
        </header>
    )
}

export default HeaderComp