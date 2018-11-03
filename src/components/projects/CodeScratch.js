import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';

import LaunchIcon from '@material-ui/icons/Launch';
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
    backgroundImage: `url('/img/coding.jpg')`,
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
    height: 240,
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
    padding: theme.spacing.unit*4
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
  highlightTxt: {
    backgroundColor: 'rgba(0,0,255,0.8)',
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
    image: '/img/code-scratch.png',
    title: 'CodeScratch React',
    author: 'Jesse Lewis',
  }
]

class CodeScratch extends React.Component {
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

  componentDidMount(){
    fetch('https://code-scratch.herokuapp.com/')
      .then(res=> {res=null})
      .catch(err=> {err=null});
  }

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
                      <span className={classes.highlightTxt}>CodeScratch</span>
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
                              <Grid container spacing={40}> 
                                <Grid item xs={12} md={8}>
                                  <Typography component="h2" variant="h5">
                                    Capture, Organize and Search your private vault of code.
                                  </Typography>
                                  <Typography paragraph>
                                    CodeScratch is the result of a group project at General Assembly web development immersive bootcamp in Austin, TX. Our assignment was to complete a functioning web application in React.js within 5 programming days.
                                  </Typography>
                                  <Typography variant="h6" gutterBottom>
                                    Team Members
                                  </Typography>
                                    <ul>
                                        <li><a href="https://github.com/Lazercat">Jesse Lewis</a></li>
                                        <li><a href="https://github.com/dev-ry">Devin Ryan</a></li>
                                        <li><a href="https://github.com/tangjames">James Tang</a></li>
                                        <li><a href="https://github.com/sleeptightiger">Gerry Morales Meza</a></li>
                                    </ul>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                <Paper elevation={1} className={classes.sidebarAboutBox}>
                                  <Typography variant="h6" gutterBottom>
                                    Gallery
                                  </Typography>
                                  <div className={classes.root}>
                                  <GridList cellHeight={140} spacing={0} className={classes.gridList}>
                                      {tileData.map(tile => (
                                        <GridListTile key={tile.image} cols={tile.featured ? 1 : 1} rows={tile.featured ? 1 : 1}>
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
                                </Paper>
                                </Grid>
                                <Grid container justify='center' spacing={8}>
                                      
                                    <Grid item xs={12} md={2}>
                                    <Tooltip placement="top" title="CodeScratch is an on-demand server. please give it a moment to spin up.">
                                      <a className={classes.btnLink} href="https://code-scratch.herokuapp.com" target="_blank">

                                      <Button size="small"  color="secondary" variant="contained">
                            
                                        <LaunchIcon /> 
                                        &nbsp;Launch App</Button>
                                      </a>
                                      </Tooltip>
                                    </Grid>
                                    <Grid item xs={12} md={2}>
                                    <Tooltip placement="top" title="Visit the github repo for CodeScratch in a new browser tab.">
                                    <a className={classes.btnLink} href="https://github.com/Lazercat/Code-Scratch" target="_blank">
                                      <Button size="small"  color="primary" variant="contained">
                                        <CodeIcon />
                                        &nbsp;Git Repo</Button>
                                      </a>
                                      </Tooltip>
                                    </Grid>

                                  </Grid>
                            </Grid>
                            </section> 
    
                            <section className={classes.section}> 
             
                            
                              <Grid container spacing={40}> 
                                <Grid item xs={12} md={12}>
                                <Paper elevation={0} >
                                  <Typography variant="h6" gutterBottom>
                                    My Contributions
                                  </Typography>
                                  <Typography>
                                    I introduced project management techniques that leaned toward agile practices. I also used my training in GE Change Acceleration Process to organize the team's thoughts and lead us toward key decisions such as the app concept, branding and mvp features. I provided us with the coding skeleton that acted as a router service pulling in components dynamically based on state. This was a rewarding experience that replaced our need to use middleware like React Router entirely while driving me to deep dive into the concept of managing complex states and props amongst parent, child and sibling components and also using state to help maintain authorization over those components. I have since embraced the use of React Router to accomplish some of these goals though feel fortunate to alos have an intimate understanding of what it provides having built my own solution in javascript for this project.
                                  </Typography>
                                </Paper>
                                </Grid>
    
                                <Grid item xs={12} md={6}>
                                <Paper elevation={0}>
                                  <Typography variant="h6" gutterBottom>
                                    MVP Features
                                  </Typography>
                                    <ul>
                                      <li><strong>React.js</strong> The front-end client router for navigating the site.</li>
                                      <li><strong>Github Login</strong> assists in authenticating with Github account.</li>
                                      <li><strong>Save Code</strong> code saves to a private, user specific account</li>
                                      <li><strong>Easy Search:</strong> Search your snippets with tags and keywords</li>     
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

CodeScratch.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CodeScratch);