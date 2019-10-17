import React, { Component } from 'react';
import Aux from '../Aux/Aux'


class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    render() {
        return (<Aux>
        <div>Toolbar</div>
        <div>Sidedrawer</div>
        <div>Backdrop</div>
        <main>
            {this.props.children}
        </main>
        <div>Footer</div>
    </Aux>)
    }
}

export default Layout;
