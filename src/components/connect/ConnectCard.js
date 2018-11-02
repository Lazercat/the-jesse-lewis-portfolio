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
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
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
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {cardInfo.title}
          </Typography>
          <Typography component="p">
            {cardInfo.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a href={cardInfo.url}>{cardInfo.url}</a>
        </Button>
      </CardActions>
    </Card>
  );
}

ConnectCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ConnectCard);