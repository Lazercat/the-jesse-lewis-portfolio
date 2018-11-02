import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

import WorkIcon from '@material-ui/icons/Work';
import WebIcon from '@material-ui/icons/Web';
import LinkIcon from '@material-ui/icons/Link';

import './home.css';

const styles = (theme) => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
          width: 1100,
          marginLeft: 'auto',
          marginRight: 'auto',
        },
    },
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

class Home extends Component {
    render() {
        const { classes, children, theme } = this.props;
        return (
            <main className="Site-content">
                <div className="jumbotron homebg-animated">
                    <div className="stars"></div>
                    <div className="twinkling"></div>
                    <div className='clouds'></div>
                    <div className="container text-center home-text">
                        <div className="row">
                            <h1>Jesse</h1><h1> Lewis</h1>
                            <h2>Full Stack Javascript Engineer & Digitizer of Dreams</h2>
                            {/* <p>I am an innovator by heart who loves leveraging modern stack tools and reaching deep under the hood to achieve</p> */}
                        </div>
                        <div className="row">
                            <nav className="home-nav">
                            <Link to="/Portfolio">
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    <WorkIcon className={classes.leftIcon} />
                                    Portfolio
                                </Button>
                            </Link>

                            <Link to="Projects">
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    <WebIcon className={classes.leftIcon} />
                                    Projects
                                </Button>
                            </Link>

                            <Link to="/Connect">
                                <Button variant="contained" color="secondary" className={classes.button}>
                                    <WebIcon className={classes.leftIcon} />
                                    Connect
                                </Button>
                            </Link>

                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Home);