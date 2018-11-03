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
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import CodeIcon from '@material-ui/icons/Code';
import MailIcon from '@material-ui/icons/Mail';
import LaunchIcon from '@material-ui/icons/Launch';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Button from '@material-ui/core/Button';
import ArchiveIcon from '@material-ui/icons/Archive';
import Divider from '@material-ui/core/Divider';
import Image from './img/keyboard.jpeg';
import { BrowserRouter as Link } from "react-router-dom";
import Download from '@axetroy/react-download';

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
    backgroundImage: `url(${Image})`,
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
  chip: {
    margin: theme.spacing.unit
  },
  card: {
    display: 'flex',
  },
  cardGrid: {
    marginTop: theme.spacing.unit*2,
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


const featuredPosts = [
  {
    title: 'What I\'m Up To',
    description: `I am currently studying DevOps solutions with Kubernetes and Docker to deploy highly scalable microservices architectures that I have been building with Node.js, Express, and MySQL stacks. I've lately been building microservices solutions capable of extracting, parsing and bulk inserting mass amounts of data, to the tune of 250k+ JSON/hour. I appreciate a Linux environment and am expanding on concepts of local and cloud Ubuntu deployments. I believe these technologies can strengthen business operations in creative ways and have enjoyed participating and leading team projects that use these tools to deliver beautiful products that provide real world solutions.`
  },
  {
    title: 'Training',
    description: `Full stack web development at General Assembly, Austin, Tx. Certified in Project Management by the Portland State Univeristy: Center for Executive and Professional Education, Trained in G.E. CAP (Change Acceleration Process), SharePoint, Public Speaking, Web Design, Web Application Development.`,
  },
  {
    title: 'Skills',
    description: `I am a fast learner and am well versed in many web platforms, languages and concepts(branded methodologies). I consider myself a practitioner of all, and master of some, of the following programs, platforms and languages:`,
    skills: [
        'Node.js', 'Express.js', 'React.js', 'Microservices','Redux', 'Javascript(ES5 - ES8)',
         'Mocha', 'Chai', 'Jest', 'HTML', 'CSS', 'SASS','Material UI', 'Semantic UI', 
         'JQuery', 'Bootstrap', 'Amazon Web Services', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQL Server',
         'Unix', 'Ubuntu', 'Wordpress', 'PHP', 'IBM Cognos', 'Adobe CS', 'Excel', 'Sharepoint Development'
    ]
  }
];



function Portfolio(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.layout}>
          <Paper className={classes.mainFeaturedPost}>
            <Grid container>
              <Grid item md={8} xs={12}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Jesse's Portfolio
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    I am a self starter and love constantly researching and leveraging modern technology to support process improvement through high tech business solutions and web projects. 
                    I am a believer in the open source web and participate on Medium.com and Github to share in the progression of tech.
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </Paper>
          {/* End main featured post */}
          <Toolbar className={classes.toolbarMain}>
          <Grid container spacing={8}>
            <Grid item>
            <Download file="Jesse-Lewis-Resume.pdf" content="# hello world">
                <Button variant="contained" color="secondary" className={classes.button}>
                    <ArchiveIcon className={classes.leftIcon} />
                    Resume: PDF
                </Button>
            </Download>
            </Grid>
            <Grid item>
            <a href="mailto:jesseaustinlewis@gmail.com?subject=hello from thejesselewis.com">
            <Button variant="contained" color="secondary" className={classes.button}>
                <MailIcon className={classes.leftIcon} />
                Email Jesse
            </Button>
            </a>
            </Grid>
            </Grid>
        </Toolbar>


          {/* Sub featured posts */}
          <Grid container spacing={24} className={classes.cardGrid}>
            {featuredPosts.map(post => (
              <Grid item key={post.title} xs={12} md={12}>
                <Card className={classes.card}>
                  <div className={classes.cardDetails}>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        {post.title}
                      </Typography>
                      <Typography variant="subtitle1" color="textSecondary">
                        {post.date}
                      </Typography>
                      <Typography variant="subtitle1" paragraph>
                        {post.description}
                      </Typography>
                      {
                        post.hasOwnProperty('skills')? post.skills.map((skill, key)=>(<Chip key={key} className={classes.chip} variant="outlined" color="primary" label={skill} />)):null
                      }
                    </CardContent>
                  </div>
                </Card>
              </Grid>
            ))}
          </Grid>
          {/* End sub featured posts */}
          <Grid container spacing={24} className={classes.mainGrid}>
 
            {/* Sidebar */}
            <Grid item xs={12} sm={4} md={3}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  Github: Lazercat
                </Typography>
                <Typography>
                  Check out my github repos to view code. 
                  <br />
                  <a href="https://www.github.com/Lazercat">
                  <Button variant="contained" color="secondary" className={classes.button}>
                    <LaunchIcon className={classes.leftIcon} />
                    Github
                  </Button>
                  </a>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  LinkedIn: jesseaustinlewis
                </Typography>
                <Typography>
                  Connect with me on LinkedIn. <br />
            
                  <a href="https://linkedin.com/in/jesseaustinlewis">                  
                  <Button variant="contained" color="secondary" className={classes.button}>
                    <LaunchIcon className={classes.leftIcon} />

                    LinkedIn
                  </Button></a>
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4} md={3}>
              <Paper elevation={0} className={classes.sidebarAboutBox}>
                <Typography variant="h6" gutterBottom>
                  Medium: @TheJesseLewis
                </Typography>
                <Typography>
                  Follow my tech articles on Medium.com.
                  <br />
                  <a href="https://www.medium.com/@TheJesseLewis">
                  <Button variant="contained" color="secondary" className={classes.button}>
                    <LaunchIcon className={classes.leftIcon} />
                    Medium
                  </Button>
                  </a>
                </Typography>
              </Paper>
            </Grid>
            {/* End sidebar */}
          </Grid>
      </div>
    </React.Fragment>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);