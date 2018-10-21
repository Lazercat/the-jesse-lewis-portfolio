import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

import './home.css';

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

class Home extends Component {
    render() {
        const { classes, children, theme } = this.props;
        return (
            <main class="Site-content">
                <div class="jumbotron homebg-animated">
                    <div class="stars"></div>
                    <div class="twinkling"></div>
                    <div class='clouds'></div>
                    <div class="container text-center home-text">
                        <div class="row ">
                            <h1>The Jesse </h1>
                            <h1>Lewis</h1>
                            <p class="glow">Full Stack Javascript Engineer</p>
                            <p class="glow">Digitizer of Dreams</p>
                        </div>
                        <div class="row">
                            <nav class="home-nav">
                                <a href="/about">About</a>|
                                <a href="/projects">Projects</a>|
                                <a href="/contact">Contact</a>
                            </nav>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Home);