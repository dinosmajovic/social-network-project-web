import React, { Component } from 'react';
import classes from './Layout.css';

import RenderIf from '../../Helpers/RenderIf.jsx'

import Topbar from '../Navigation/Topbar/Topbar.jsx';
import Sidebar from '../Navigation/Sidebar/Sidebar.jsx';

class Layout extends Component {
    state = {
        showSidebar: false,
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
        let margin = "0px";
        if (this.props.show) {
            margin = "51px";
        }
        return (
            <div>
                <RenderIf condition={this.props.show}>
                    <Topbar sidebarToggleClicked={this.sidebarToggleHandler} />,
                    <Sidebar 
                        open={this.state.showSidebar} 
                        closed={this.sidebarClosedHandler} />
                </RenderIf>
                <main className={classes.Content} style={{marginTop: margin}}>
                    {this.props.children}
                </main>
            </div>
        );
    }
}

export default Layout;
