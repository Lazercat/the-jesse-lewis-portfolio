import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu, { MenuItem } from '@material-ui/core/Menu';

class UserMenu extends Component {
    state = {
        anchorEl: null,
        open: false
    };

    handleClick = (event) => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <IconButton
                    color="contrast"
                    aria-owns={this.state.open ? 'user-menu' : null}
                    aria-haspopup="true"
                    onClick={this.handleClick}
                >
                    more vert icon..
                </IconButton>
                <Menu
                    id="user-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onClose={this.handleRequestClose}
                >
                    <MenuItem onClick={this.handleRequestClose} component="a" href="/cm/user_settings">My Account</MenuItem>
                    <MenuItem onClick={this.handleRequestClose} component="a" href="/logout">Logout</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default UserMenu;
