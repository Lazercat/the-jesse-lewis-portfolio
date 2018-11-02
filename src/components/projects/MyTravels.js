import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
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
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
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
    backgroundPosition: 'bottom',
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
                        MyTravels Log
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
                              <Grid container spacing={20}> 
                                <Grid item xs={12} md={6}>

                                <Typography component="h2" variant="h5">
                                Share your art online!
                              </Typography>
                              <Typography paragraph>
                                ArtShare is the capstone project from my time as a Web Development Fellow at General Assembly in Austin, TX. It is to date my greatest coding delight and will remain an ongoing project. Its currently in beta as I plan to add and test many more features to it based on user feedback. I am using this project as a passion piece and also as a means to challenge myself to understand the full spectrum of true production web application needs using a MERN stack framework (MongoDB, Express, React.js and Node.js)
                              </Typography>

                                  <Paper elevation={0} >
                                    <Typography variant="h6" gutterBottom>
                                      MVP Features
                                    </Typography>

                                    <Typography variant="subtitle1" color="textSecondary">
                                      <ul>
                                          <li>Simple Facebook Login</li>
                                          <li>ArtWork site search</li>
                                          <li>Basic artist specific pages</li>
                                          <li>Users photos auto stored in cloud storage solution</li>
                                          <li>Users can title, describe and add search tags to their photos</li>
                                      </ul>
                                    </Typography>

                                  </Paper>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                <Paper elevation={1} className={classes.sidebarAboutBox}>
                                  <Typography variant="h6" gutterBottom>
                                    Gallery
                                  </Typography>
                                  <Typography>
                                  <div className={classes.root}>
                                  <GridList cellHeight={200} spacing={2} className={classes.gridList}>
                                      {tileData.map(tile => (
                                        <GridListTile key={tile.image} cols={tile.featured ? 2 : 1} rows={tile.featured ? 2 : 1}>
                                          <img src={tile.image} alt={tile.title} />
                                          <GridListTileBar
                                            title={tile.title}
                                            titlePosition="top"
                                            actionIcon={
                                              <IconButton variant="fab" color="secondary" className={classes.icon} onClick={()=>this.handleOpen(tile.image)}>
                                                <SearchIcon />
                                              </IconButton>
                                            }
                                            actionPosition="left"
                                            className={classes.titleBar}
                                          />
                                        </GridListTile>
                                      ))}
                                    </GridList>
                                  </div>
                                  </Typography>
                                </Paper>
                                </Grid>
                            </Grid>
                            </section> 
    
                            <section className={classes.section}> 
                              <Typography component="h2" variant="h5">
                                ArtShare Stack <br />
                              </Typography>
                            
                              <Grid container spacing={40}> 
                                <Grid item xs={12} md={6}>
                                <Paper elevation={0} >
                                  <Typography variant="h6" gutterBottom>
                                    ArtShare API
                                  </Typography>
                                  <Typography>
                                    <ul>
                                      <li><strong>Express Router:</strong>Server-side routes for handling http requests</li>
                                      <li><strong>Body-Parser:</strong>assists in tidy work behind handling req.body data and json calls</li>
                                      <li><strong>CORS:</strong> preventing cross origin attacks on the backend</li>
                                      <li><strong>EJS (Embedded JavaScript):</strong> A views templating tool for displaying the index page</li>
                                      <li><strong>Mongoose:</strong> ORM middleware for handling CRUD functions from express http requests</li>
                                      <li><strong>MongoDB:</strong> the business data database solution where all artwork data is stored and retrieved from.</li>
                                    </ul>
                                  </Typography>
                                  <Button size="small"  color="primary">Launch App</Button>
                                  <Button size="small"  color="primary">Github Repo</Button>
                                </Paper>
                                </Grid>
    
                                <Grid item xs={12} md={6}>
                                <Paper elevation={0}>
                                  <Typography variant="h6" gutterBottom>
                                    ArtShare React Client
                                  </Typography>
                                  <Typography>
                                    <ul>
                                      <li><strong>React-Router:</strong> The front-end client router for navigating the site</li>
                                      <li><strong>Axios/Axios-FileUpload:</strong> assists in API calls from client</li>
                                      <li><strong>Firebase:</strong> user authentication solution using a Facebook Login</li>
                                      <li><strong>Facebook Developer:</strong> Facebook Login: a Facebook web app used to support Firebase and user logins via Facebook</li>
                                      <li><strong>React-Dropzone (Dropzone.js): </strong>Middleware for handling file uploads</li>
                                      <li><strong>Cloudinary API:</strong> a file storage cloud solution for user artworks. I wanted to separate files from data.</li>
                                      <li><strong>Back-end Server: Node.js</strong></li>
                                    </ul>
                                  </Typography>
                                  <Button size="small"  color="primary">Launch App</Button>
                                  <Button size="small"  color="primary">Github Repo</Button>
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