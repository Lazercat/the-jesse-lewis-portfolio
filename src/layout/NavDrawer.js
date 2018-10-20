import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = (theme) => ({
    drawerPaper: {
        width: theme.navDrawer.width
    }
});

const NavigationDrawer = (props) => {
    const {
        classes,
        open,
        toggleDrawer,
        children
    } = props;

    const closeDrawer = () => toggleDrawer(false);

    return (
        <Drawer
            classes={{ paper: classes.drawerPaper }}
            open={open}
            onClose={closeDrawer}
            anchor="left"
        >
            <div
                tabIndex={0}
                role="button"
                onClick={closeDrawer}
                onKeyDown={closeDrawer}
            >
                {children}
            </div>
        </Drawer>
    );
};

NavigationDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(NavigationDrawer);
