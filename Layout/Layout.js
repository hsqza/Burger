import React, { Component } from 'react';
import Aux from '../Auxc/Aux';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }

    drawerToggleClicked = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        })
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.drawerToggleClicked} />
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideCloseHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
    
}

export default Layout;