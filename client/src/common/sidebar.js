import React from "react";
import 'react-perfect-scrollbar/dist/css/styles.css';
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return <div className="border-end sidenav" id="sidebar-wrapper">
            <PerfectScrollbar className="sidebar-items">
                <ul className="list-unstyled ps-0">
                    <li className="mb-1">
                        <Link tag="a" className="" to="/overview">
                            Overview
                        </Link>
                    </li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/blank-page">
                            Blank Page
                        </Link>
                    </li>
                    <li className="border-top my-3"></li>
                    <li className="mb-1">
                        <Link tag="a" className="" to="/typography">
                            Typography
                        </Link>
                    </li>
                </ul>
            </PerfectScrollbar>
        </div>
    }
}

export default Sidebar;