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
import ConnectCard from './ConnectCard';
import MediaGithub from './img/Octocat.png';
import MediaMedium from './img/MediumLogo.png';
import MediaLinkedIn from './img/LinkedInLogo.png';



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
    backgroundImage: `url('/img/web-diagram.jpg')`,
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
  cardGrid: {
    marginTop: theme.spacing.unit*2,
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
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

const cards = [
  {
    title: "Github",
    media: MediaGithub,
    alias: "Lazercat",
    description: "Github holds my repositories",
    type: 'link',
    url: "https://github.com/Lazercat"
  },
  {
    title: "LinkedIn",
    media: MediaLinkedIn,
    alias: "Jesse Lewis",
    description: "Visit me on LinkedIn!",
    type: 'link',
    url: "https://www.linkedin.com/in/jesseaustinlewis"
  },
  {
    title: "Medium.com",
    media: MediaMedium,
    alias: "Jesse Lewis",
    description: "Read my developer blog on Medium.com",
    type: 'link',
    url: "https://medium.com/@TheJesseLewis"    
  },
  {
    title: "General Assembly",
    media: '/img/general-assembly.png',
    alias: "Jesse Lewis",
    description: "Visit my student profile at General Assembly Bootcamp",
    type: 'link',
    url: "https://profiles.generalassemb.ly/profiles/jesse-austin-lewis"    
  },
  {
    title: "Email Me",
    media: '/img/gmail.png',
    alias: "Jesse Lewis",
    description: "Send an email: jesseaustinlewis@gmail.com",
    type: 'email',
    url: "mailto:jesseaustinlewis@gmail.com?subject=hello from thejesselewis.com"    
  },
]


function Connect(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
        <main>
          {/* Main featured post */}
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={8} xs={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Let's Connect
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}

          {/* Sub featured posts */}
          <Grid container spacing={40} className={classes.cardGrid}>
            {cards.map(card => (
              <Grid item key={card.title} xs={12} sm={6} md={4}>
                  <ConnectCard cardInfo={card}/>
              </Grid>
            ))}
          </Grid>
      
        </main>
      </div>

    </React.Fragment>
  );
}

Connect.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Connect);