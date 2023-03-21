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
            {/* <div className="sidebar-heading border-bottom ">
                <Link to="/">
                    <h1 className="text-ce">Planner</h1>
                    <img alt="Alt content" src={require('./../assets/images/logo.png')} />
                </Link>
            </div> */}
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
                    
                    {/* collapsable list item example */}
                    <li className="mb-1">
                        <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
                        My Itinerary
                        </button>
                        <div className="collapse" id="dashboard-collapse">
                        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                            <li><a href="#" className="rounded">Insert day</a></li>
                        </ul>
                        </div>
                    </li> 
                    <li className="border-top my-3"></li>
                   
                </ul>
            </PerfectScrollbar>
        </div>
    }
}

export default Sidebar;