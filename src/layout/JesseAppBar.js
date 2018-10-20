import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';
// import MenuIcon from '@material-ui/Menu';



import red from '@material-ui/core/colors/red';
import blue from '@material-ui/core/colors/blue';
import UserMenu from './UserMenu';
import logo from '../logo.svg';

const styles = theme => ({
    flex: {
        flex: 1,
        textAlign: 'left'
    },
    logo: {
        maxHeight: '56px'
    }
});

const HomeIcon = (props) => {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
}

const JesseAppBar = (props) => {
    const {
        classes,
        onMenuClick,
        onThemeClick
    } = props;

    return (
        <AppBar elevation={4}>
            <Toolbar>
                <IconButton color="contrast" aria-label="Navigation Menu" onClick={onMenuClick}>
                    <HomeIcon
                        className={classes.icon}
                        color="primary"
                        fontSize="large"
                        component={svgProps => (
                        <svg {...svgProps}>
                            <defs>
                            <linearGradient id="gradient1">
                                <stop offset="30%" stopColor={blue[400]} />
                                <stop offset="70%" stopColor={red[400]} />
                            </linearGradient>
                            </defs>
                            {React.cloneElement(svgProps.children[0], { fill: 'url(#gradient1)' })}
                        </svg>
                        )}
                    />
                </IconButton>
                <div className={classes.flex}>
                    <a href="www.thejesselewis.com" title="The Jesse Lewis">
                        <img src={logo} className={classes.logo} alt="Jesse Lewis" />
                    </a>
                </div>
                <IconButton color="contrast" aria-label="Toggle Theme" onClick={onThemeClick}>
                    <span>Icon here</span>
                </IconButton>
                <UserMenu />
            </Toolbar>
        </AppBar>
    );
};

JesseAppBar.propTypes = {
    onMenuClick: PropTypes.func.isRequired,
    onThemeClick: PropTypes.func.isRequired
};

export default withStyles(styles)(JesseAppBar);
