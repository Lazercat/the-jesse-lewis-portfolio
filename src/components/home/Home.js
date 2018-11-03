import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { SocialIcon } from 'react-social-icons';
import Typography from '@material-ui/core/Typography';
import WorkIcon from '@material-ui/icons/Work';
import WebIcon from '@material-ui/icons/Web';
import LinkIcon from '@material-ui/icons/Link';
import LaunchIcon from '@material-ui/icons/Launch';
import ArchiveIcon from '@material-ui/icons/Archive';
import MailIcon from '@material-ui/icons/Mail';
import Download from '@axetroy/react-download';

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
    },
    row: {
        marginTop: 100
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
{/*                     
                    <Grid container direction="column" spacing={24}>
                       
                        <Grid item xs={12}>
                            <Typography color="secondary" variant="h1">
                                Jesse
                            </Typography> 
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="secondary" variant="h1">
                                Lewis
                            </Typography> 
                        </Grid>  
                  
                       </Grid> */}
                            <div className="row">
                                <h1>Jesse</h1><h1> Lewis</h1>
                                <h2>Full Stack Javascript Engineer & Digitizer of Dreams</h2>
                            </div>
                            <Grid container justify="center" spacing={16}>
            

                                <Grid item xs={12} sm={6} md={3}>
                                <a href="http://github.com/Lazercat" target="_blank">
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                    <LaunchIcon color="secondary" />
                                    <Typography color="secondary"> &nbsp;&nbsp;Github</Typography>
                                </Button>
                                </a>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                <a href="http://linkedin.com/in/jesseaustinlewis" target="_blank">
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                    <LaunchIcon color="secondary" />
                                    &nbsp;&nbsp;LinkedIn
                                </Button>
                                </a>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                <a href="http://www.medium.com/@TheJesseLewis" target="_blank">
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                    <LaunchIcon color="secondary" />
                                    &nbsp;&nbsp;Blog
                                </Button>
                                </a>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                <a href="mailto:jesseaustinlewis@gmail.com?subject= Hello from thejesselewis.com" target="_blank">
                                <Button variant="outlined" color="secondary" className={classes.button}>
                                    <MailIcon color="secondary" />
                                    &nbsp;&nbsp;Email
                                </Button>
                                </a>
                                </Grid>

                                <Grid item xs={12} sm={6} md={3}>
                                
                                <Download file="/Jesse-Lewis-Resume.pdf" content="# hello world">
                                    <Button variant="outlined" color="secondary" className={classes.button}>
                                        <ArchiveIcon className={classes.leftIcon} />
                                        Resume: PDF
                                    </Button>
                                </Download>
                                </Grid>

                            </Grid>
                       
                    </div>
                </div>
            </main>
        );
    }
}

export default withStyles(styles)(Home);