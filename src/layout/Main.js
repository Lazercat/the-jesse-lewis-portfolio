import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';
import JesseAppBar from './JesseAppBar';
import NavDrawer from './NavDrawer';

const styles = (theme) => ({
    root: {
        width: '100%',
        height: '100%',
        zIndex: 1,
        overflow: 'hidden',
    },
    appFrame: {
        position: 'absolute',
        display: 'flex',
        top: '64px',
        left: 0,
        right: 0,
        bottom: 0
    }
});

class Main extends Component {
    state = {
        navOpen: false,
        theme: 'light'
    };

    handleDrawerToggle = (isOpen) => {
        this.setState(prevState => ({
            navOpen: isOpen != null ? isOpen : !prevState.navOpen
        }));
    };

    handleThemeToggle = () => {
        this.setState(prevState => ({
            theme: prevState.theme === 'light' ? 'dark' : 'light'
        }));
    };

    render() {
        const { classes, children, theme } = this.props;
        theme.palette.type = this.state.theme;

        return (
            <MuiThemeProvider theme={createMuiTheme(theme)}>
                <CssBaseline />
                <div className={classes.root}>
                    <JesseAppBar onMenuClick={this.handleDrawerToggle} onThemeClick={this.handleThemeToggle} />
                    <NavDrawer open={this.state.navOpen} toggleDrawer={this.handleDrawerToggle} />
                    <div className={classes.appFrame}>
                        {children}
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(Main);
