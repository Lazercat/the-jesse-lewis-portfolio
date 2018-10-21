import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';

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

class Snippets extends Component {
    render() {
        const { classes, children, theme } = this.props;

        return (
            <div>
                <h2> Snippets! </h2>
                <p> This my react portfolio.</p>
            </div>
        );
    }
}

export default withStyles(styles)(Snippets);
