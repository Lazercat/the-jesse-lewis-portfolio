import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import LaunchIcon from '@material-ui/icons/Launch';
import Tooltip from '@material-ui/core/Tooltip';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Image from './img/artshare.png';
import { BrowserRouter as Link } from "react-router-dom";
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import CodeIcon from '@material-ui/icons/Code';
import JesseModal from '../layout/JesseModal';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';

import InfoIcon from '@material-ui/icons/Info';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: 'space-between',
  },
  mainFeaturedPost: {
    backgroundImage: `url('/img/mapback.jpg')`,
    backgroundPosition: 'center',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    backgroundColor: theme.palette.teal,
    padding: `${theme.spacing.unit * 2}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3,
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  section: {
    marginBottom: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    padding: theme.spacing.unit*2
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    transform: 'translateZ(0)',
  },
  titleBar: {

  },
  icon: {
    color: 'white',
  },
  bigImg: {
    width: '100%'
  }
});

const projectSummary = [
  {
    title: 'ArtShare: Share your art online!',
    stack: ['React.js', 'Node.js', 'Express.js', 'Mongoose/MongoDB', 'Passport.js', 'FirebaseDB'],
    summary: 'ArtShare is my capstone project for the General Assembly Web Development Bootcamp. I have built it using both a React.js front-end web app and its own Node.js/Express API using MongoDB',
    description: '',
    }
];

const tileData = [
  {
    image: '/img/mytravelslg.png',
    title: 'MyTravels Nodejs/Express',
    author: 'Jesse Lewis',
  }
]

class MyTravels extends React.Component {
  constructor(props){
    super(props);
    this.state={
      open: false,
      image: ''
    }
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose= this.handleClose.bind(this);
  }

  componentDidMount(){
    fetch('https://my-travels-log.herokuapp.com/')
      .then(res=> {res=null})
      .catch(err=> {err=null});
  }

  handleOpen(val) {
    console.log('I AM VAL', val);
    this.setState({ 
      open: true,
      image: val    
    });
  };

  handleClose(val){
    this.setState({ 
      open: false,
      image: ''
    });
  };

  render(){
    const { classes } = this.props;
    const { image, open } = this.state;
    
      return (
        <React.Fragment>
          <CssBaseline />
          <div className={classes.layout}>
            <main>

              <Paper className={classes.mainFeaturedPost}>
                <Grid container>
                  <Grid item md={6}>
                    <div className={classes.mainFeaturedPostContent}>
                      <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                        MyTravels Web App
                      </Typography>
                    </div>
                  </Grid>
                </Grid>
              </Paper>

              <JesseModal 
                  handleOpen={this.handleOpen}
                  handleClose={this.handleClose}
                  open={open}
                  image={image}
              />

              <Grid container spacing={40} className={classes.cardGrid}>
                  <Grid item xs={12} md={12}>
                    <Card className={classes.card}>
                      <div className={classes.cardDetails}>  
                        {
                          <CardContent key={projectSummary[0].title} >
                            <section className={classes.section}> 
                              <Grid container spacing={24}> 
                                <Grid item xs={12} md={6}>

                                <Typography component="h2" variant="h5">
                                Track your rad travels!
                              </Typography>
                               <Typography paragraph>
                                   MyTravels is a simple app that allows users to signup/login with their Facebook account and then build a list of cities they have been to in the world that also creates a google map with map markers of each for their amusement.  
                              </Typography>

                                  <Paper elevation={0} >
                                    <Typography variant="h6" gutterBottom>
                                      MVP Features
                                    </Typography>

                                      <ul>
                                          <li>Users can reach a homepage and signup / login using facebook (oAuth))</li>
                                          <li>Users can view their dashboard page</li>  
                                          <li>Dashboard page has a google api map and a display of all locations they have entered</li>
                                          <li>Users can add locations they've visited with a locations form</li>
                                          <li>Users can view basic stats of the number of cities and countries they've been to.</li>
                                          <li>Users can title, describe and add search tags to their photos</li>
                                          <li>Users locations display a pin on the google api map</li>
                                          <li>Users can view all locations they've added</li>
                                          <li>Users can update/delete locations they've added.</li>
                                          <li>User can logout</li>
                                          <li>Users can delete locations they've added (which also deletes the reference to that location in their user table on MongoDB).</li>
                                          <li>Returning users with an active session cookie can auto login.</li>
                                      </ul>
                                  </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <Paper elevation={1} className={classes.sidebarAboutBox}>
                                <img src='/img/mytravelslg.png' className={classes.bigImg} alt={"MyTravels Log"} />

                                </Paper>

         
                                </Grid>
                             
                            </Grid>

                            </section> 
                            <Grid container justify='center' spacing={8}>
                                      
                                      <Grid item xs={12} md={2}>
                                      <Tooltip placement="top" title="MyTravels is hosted in a beta on-demand server at Heroku. Please give it a moment to spin up.">
                                        <a className={classes.btnLink} href="https://my-travels-log.herokuapp.com/" target="_blank">
                                          <Button size="small"  color="secondary" variant="contained">
                                            <LaunchIcon /> 
                                            &nbsp;Launch App
                                          </Button>
                                        </a>
                                        </Tooltip>
                                      </Grid>
                                      <Grid item xs={12} md={2}>
                                      <Tooltip placement="top" title="Visit the Github repo for MyTravels App in a new browser tab.">
                                      <a className={classes.btnLink} href="https://github.com/Lazercat/my_travels_log" target="_blank">
                                        <Button size="small"  color="primary" variant="contained">
                                          <CodeIcon />
                                          &nbsp;Git Repo</Button>
                                        </a>
                                        </Tooltip>
                                      </Grid>
                                    </Grid>
    
                            <section className={classes.section}>             
                              <Grid container spacing={40}> 
                                <Grid item xs={12} md={12}>
                                <Paper elevation={0} >
                                  <Typography variant="h6" gutterBottom>
                                    MyTravels Stack
                                  </Typography>
                                    <ul>
                                      <li><strong>Express Router:</strong>Server-side routes for handling http requests</li>
                                      <li><strong>Body-Parser:</strong>assists in tidy work behind handling req.body data and json calls</li>
                                      <li><strong>CORS:</strong> preventing cross origin attacks on the backend</li>
                                      <li><strong>EJS (Embedded JavaScript):</strong> A views templating tool for displaying the index page</li>
                                      <li><strong>Mongoose:</strong> ORM middleware for handling CRUD functions from express http requests</li>
                                      <li><strong>MongoDB:</strong> the business data database solution where all artwork data is stored and retrieved from.</li>
                                    </ul>
          
                                </Paper>
                                </Grid>
    
                      
                            </Grid>
    
    
                            </section>
                    
                          </CardContent>
  
                        }
                      </div>
                    </Card>
                  
                  </Grid>
            
              </Grid>
              {/* End sub featured posts */}
            </main>
          </div>
    
        </React.Fragment>
      )
  }
 
}

MyTravels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyTravels);