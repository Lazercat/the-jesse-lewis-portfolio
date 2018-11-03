import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import MediaGithub from './img/Octocat.png';

const styles = {
  card: {
    maxWidth: 400,
  },
  media: {
    height: 60,
  },
  btnLink: {
    color: 'white',
    textDecoration: 'none'
  }
};

function ConnectCard(props) {
  const { classes, cardInfo } = props;
  return (
    <Card className={classes.card}>
     
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={cardInfo.media}
        />

      <a href={cardInfo.url}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardInfo.title}
          </Typography>
          <Typography component="p">
            {cardInfo.description}
          </Typography>
            {cardInfo.type==="link"?cardInfo.url:null}
        </CardContent>
      </a>
      
      </CardActionArea>
      <CardActions>
      <a className={classes.btnLink} href={cardInfo.url}>
        <Button size="small" color="secondary" variant="contained">
         {cardInfo.type==="link"?"Visit":"Email"}
        </Button>
        </a>
      </CardActions>
    </Card>
  );
}

ConnectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectCard);