import React, { Component } from 'react';
import classes from './Layout.css';

import Topbar from '../Navigation/Topbar/Topbar.jsx';
import Sidebar from '../Navigation/Sidebar/Sidebar.jsx';

class Layout extends Component {
    state = {
        showSidebar: false,
        isAuthenticated: false
    }

    sidebarClosedHandler = () => {
        this.setState({
            showSidebar: false
        })
    }

    sidebarToggleHandler = () => {
        this.setState(prevState => {
            return {showSidebar: !prevState.showSidebar}    
        })
    }

    render() {
        let topbar;
        let margin = "0px";
        if (this.state.isAuthenticated) {
            margin = "72px";
            topbar = [
                <Topbar sidebarToggleClicked={this.sidebarToggleHandler} />,
                <Sidebar 
                    open={this.state.showSidebar} 
                    closed={this.sidebarClosedHandler} />
            ]
        }
        return (
            <div>
                {topbar}
                <main style={{marginTop: margin}}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
