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

class Projects extends Component {
    render() {
        const { classes, children, theme } = this.props;

        return (
            <div>
                <h2>Projects</h2>
                <p> This my react projects listing.</p>
            </div>
        );
    }
}

export default withStyles(styles)(Projects);
