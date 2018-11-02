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
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Image from './img/web-diagram.jpg';
import ArtShareImg from './img/artshare.png';
import CodeScratchImg from './img/code-scratch.png';
import TicTacToeImg from './img/tictactoesm.png';
import MyTravelsImg from './img/mytravelslg.png';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    // [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
    //   width: 1100,
    //   marginLeft: 'auto',
    //   marginRight: 'auto',
    // },
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
    backgroundImage: `url(${Image})`,
    backgroundPosition: 'top',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
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
    height: 240
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const projectApps = [
  {
    title: 'ArtShare: Share your art online!',
    stack: ['React.js', 'Node.js', 'Express.js', 'Mongoose/MongoDB', 'Passport.js', 'FirebaseDB'],
    date: 'Nov 12',
    thumbnail: 'img/artshare.png',
    summary: 'ArtShare is my capstone project for the General Assembly Web Development Bootcamp. I have built it using both a React.js front-end web app and its own Node.js/Express API using MongoDB',
    description: '',
    page: "/Artshare",
    url: "https://artshare-react.herokuapp.com/"
    },
  {
    title: 'CodeScratch: Your private code snippet locker',
    stack: ['React.js', 'Passport.js', 'Github API'],
    thumbnail: CodeScratchImg,
    date: 'Nov 11',
    summary: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    description: '',
    page: "/CodeScratch",
    url: ""
  },
  {
    title: 'MyTravels: Track your rad travels.',
    stack: ['Node.js', 'Google Maps API', 'MongoDB', 'Mongoose', 'Express.js', 'Passport.js'],
    date: 'Nov 12',
    thumbnail: MyTravelsImg,
    summary: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    description: '',
    page: "/MyTravels",
    url: ""
  },
  {
    title: 'TicTacToe: A javascript browser game',
    stack: ['Vanilla Javascript', 'Bootstrap'],
    thumbnail: TicTacToeImg,
    summary: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
    description: '',
    page: "/TicTacToe",
    url: ""
  }
];


function Projects(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Web Projects
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {projectApps.map(post => (
                <Grid item key={post.title} xs={6} md={6}>
                  <Card>
                    <Grid container>
                      <CardActionArea>

                      <Link to={post.page}>
                        <CardContent>
                        <CardMedia
                          className={classes.cardMedia}
                          image={post.thumbnail}
                          title={post.title}
                        />
                          <Typography gutterBottom variant="h5" component="h2">
                            {post.title}
                          </Typography>
                          <Typography component="p">
                            {post.description}
                          </Typography>
                        </CardContent>

                      </Link>
                      </CardActionArea>
                  </Grid>
                  <Grid container>
                    <CardActions>
                      <Link to={post.page}>
                        <Button size="small" color="primary">
                          Learn More
                        </Button>
                      </Link>             
                        <Button size="small" color="secondary">
                          <a href={post.url}>Launch App</a>
                        </Button>
                    </CardActions>
                    </Grid>
                  </Card>
                {/* <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    
                    <CardMedia
                      image={post.thumbnail}
                      title={post.title}
                    />
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.stack}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      <Typography variant="subtitle1" color="primary">
                        <Link to={post.page} >
                            <Button size="small" variant="contained"  color="secondary" >Read more</Button>
                        </Link>
                        <Link to="/">
                            <Button size="small" variant="contained"  color="primary">Launch App</Button>
                        </Link>
                      </Typography>
                    </CardContent>
                  </div>
                </Card> */}
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
        </main>
      </div>

    </React.Fragment>
  );
}

Projects.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Projects);