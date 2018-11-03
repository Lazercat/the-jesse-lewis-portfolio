import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { withStyles } from '@material-ui/core/styles';

import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';

import teal from '@material-ui/core/colors/teal';
import indigo from '@material-ui/core/colors/indigo';
import grey from '@material-ui/core/colors/grey';

import HomeIcon from '@material-ui/icons/Home';
import VibrationIcon from '@material-ui/icons/Vibration';
import WorkIcon from '@material-ui/icons/Work';
import MailIcon from '@material-ui/icons/Mail';
import WebIcon from '@material-ui/icons/Web';
import CodeIcon from '@material-ui/icons/Code';
import LinkIcon from '@material-ui/icons/Link';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from '../home/Home';
import Blog from '../blog/Blog';
import Portfolio from '../portfolio/Portfolio';
import Projects from '../projects/Projects';
import ArtShare from '../projects/ArtShare';
import CodeScratch from '../projects/CodeScratch';
import MyTravels from '../projects/MyTravels';
import TicTacToe from '../projects/TicTacToe';
import Snippets from '../snippets/Snippets';
import Connect from '../connect/Connect';


const drawerWidth = 200;

const styles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    backgroundColor: grey[300],
    boxShadow: `20px solid ${grey[600]}`,
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: 0,
  },
  icon: {
    color: indigo[800]
  },
  iconHover: {
    '&:hover': {
      color: indigo[400],
    },
  },
});

class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      open: false,
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <MuiThemeProvider theme={createMuiTheme(theme)}>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          theme={theme}
          position="fixed"
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              aria-label="Open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, {
                [classes.hide]: this.state.open,
              })}
            >
              <MenuIcon  color="secondary" />
            </IconButton>
            <Typography variant="subtitle1" color="inherit" noWrap>
              The Jesse Lewis: Software Engineer and Digitizer of Dreams
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon variant="fab" color="secondary" />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {[ 
                { id: 'Home', route:"/",icon: <HomeIcon /> },
                // { id: 'Blog', icon: <VibrationIcon /> }, 
                { id: 'Portfolio', route: "/Portfolio", icon: <WorkIcon /> }, 
                { id: 'Projects',route: "/Projects", icon: <WebIcon /> }, 
                // { id: "Snippets", icon: <CodeIcon /> }, 
                { id: "Let's Connect!", route: "/Connect", icon: <LinkIcon /> }
              ].map((item, index) => (
                <Link key={index} to={item.route}>
                  <Tooltip  classes={{ tooltip: classes.lightTooltip }} title={item.id} placement="right">
                  <ListItem button key={item.id}>
                    <ListItemIcon className={classes.icon}>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.id} />
                  </ListItem>
                  </Tooltip>
                </Link>
              ))}
            <Divider />
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/Blog" component={Blog} />
                <Route path="/Portfolio" component={Portfolio} />
                <Route path="/Projects" component={Projects} />

                <Route path="/ArtShare" component={ArtShare} />
                <Route path="/MyTravels" component={MyTravels} />
                <Route path="/CodeScratch" component={CodeScratch} />
                <Route path="/TicTacToe" component={TicTacToe} />

                <Route path="/Snippets" component={Snippets} />   
                <Route path="/Connect" component={Connect} />   
            </div>
        </main>
      </div>
      </MuiThemeProvider>
    );
  }
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);
