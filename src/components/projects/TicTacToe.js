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
import Image from './img/web-diagram.jpg';
import ArtShareImg from './img/artshare.png';
import CodeScratchImg from './img/code-scratch.png';
import TicTacToeImg from './img/tictactoesm.png';
import MyTravelsImg from './img/mytravelslg.png';
import CardActionArea from '@material-ui/core/CardActionArea';
import TextField from '@material-ui/core/TextField';
import indigo from '@material-ui/core/colors/indigo';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";


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
    backgroundPosition: 'center',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.black,
    marginBottom: theme.spacing.unit * 4,
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up('md')]: {
      paddingRight: 0,
    },
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 2,
  },
  card: {
    display: 'flex',
    height: 150,
    color: indigo,
    border: `1px solid ${theme.palette.primary[800]}`
  },
  cardDetails: {
    flex: 1,
  },
  media: {
    marginLeft: 'auto',
    marginRight: 'auto',
    height: 150,
    width: 150
  },
  markdown: {
    padding: `${theme.spacing.unit * 1}px 0`,
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200],
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3,
  },
  board: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    color: theme.palette.common.white,
    boxShadow: '10px 10px 5px #0083bb',
  },

});


class TicTacToe extends React.Component {
  constructor(props){
    super(props);

    this.state={
      turn:'x',
      winner: null,
      round: 1,
      xWins: 0,
      oWins: 0,
      move: 0,
      topL: null,
      topM: null,
      topR: null,
      midL: null,
      midM: null,
      midR: null,
      botL: null,
      botM: null,
      botR: null
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.setWinner = this.setWinner.bind(this);
    this.watchWin = this.watchWin.bind(this);
    this.handleNextRound = this.handleNextRound.bind(this);
  }

  handleNextRound(){
    const { round } = this.state;
    let next = parseInt(this.state.round+1);
    this.setState({
      round: next,
      winner: null,
      move: 0,
      open: false,
      topL: null,
      topM: null,
      topR: null,
      midL: null,
      midM: null,
      midR: null,
      botL: null,
      botM: null,
      botR: null
    })
  }

  handleReset(){
    this.setState({
        turn:'x',
        winner: null,
        open: false,
        round: 1,
        xWins: 0,
        oWins: 0,
        move: 0,
        topL: null,
        topM: null,
        topR: null,
        midL: null,
        midM: null,
        midR: null,
        botL: null,
        botM: null,
        botR: null
    })
  }

  setWinner(player){
    let newNumber;
    
    if (player==="x"){
      newNumber = parseInt(this.state.xWins+1);
      this.setState({ 
        winner: "x",
        open: true,
        xWins: newNumber,
      });
    } 
    if (player==="o"){
      newNumber = parseInt(this.state.oWins+1);
      this.setState({ 
        winner: "o",
        open: true,
        oWins: newNumber,
      });
    }
    if (player==="draw"){
      this.setState({
        winner: "draw",
        open: true,
      })
    }

  }

  watchWin(){
    const { topL, topM, topR, midL, midM, midR, botL, botM, botR, move} = this.state;

    //draw 
    if (move===9){this.setWinner('draw')}
    //rows
    if (topL==='x' && topM==='x' && topR==='x'){this.setWinner('x');}
    if (topL==='o' && topM==='o' && topR==='o'){this.setWinner('o');}
    if (midL==='x' && midM==='x' && midR==='x'){this.setWinner('x');}
    if (midL==='o' && midM==='o' && midR==='o'){this.setWinner('o');}
    if (botL==='x' && botM==='x' && botR==='x'){this.setWinner('x');}
    if (botL==='o' && botM==='o' && botR==='o'){this.setWinner('o');}
    //columns
    if (topL==='x' && midL==='x' && botL==='x'){this.setWinner('x');}
    if (topL==='o' && midL==='o' && botL==='o'){this.setWinner('o');}
    if (topM==='x' && midM==='x' && botM==='x'){this.setWinner('x');}
    if (topM==='o' && midM==='o' && botM==='o'){this.setWinner('o');}
    if (topR==='x' && midR==='x' && botR==='x'){this.setWinner('x');}
    if (topR==='o' && midR==='o' && botR==='o'){this.setWinner('o');}
    //diagnols
    if (topL==='x' && midM==='x' && botR==='x'){this.setWinner('x');}
    if (topL==='o' && midM==='o' && botR==='o'){this.setWinner('o');}
    if (topR==='x' && midM==='x' && botL==='x'){this.setWinner('x');}
    if (topR==='o' && midM==='o' && botL==='o'){this.setWinner('o');}
  }

   handleClick = async(coord) => {
    try{
      const { turn, winner, move } = this.state;
      let player = await turn==='x'?'o':'x';
      let packet;
      let newMove=parseInt(move+1);
  
      if(winner===null){
        switch(coord){
          case 'topL': 
            packet = { topL: turn, turn: player, move: newMove }
            break;
          case 'topM':
            packet = { topM: turn, turn: player, move: newMove }
            break;
          case 'topR':  
            packet = { topR: turn, turn: player, move: newMove }
            break;
          case 'midL': 
            packet = { midL: turn, turn: player, move: newMove } 
            break;
          case 'midM':
            packet = { midM: turn, turn: player, move: newMove }
            break;
          case 'midR':  
            packet = { midR: turn, turn: player, move: newMove }
            break;
          case 'botL':  
            packet = { botL: turn, turn: player, move: newMove }
            break;
          case 'botM':  
            packet = { botM: turn, turn: player, move: newMove }
            break;
          case 'botR':  
            packet = { botR: turn, turn: player, move: newMove }
            break;
          default:  packet = null;
        }
         await this.setState(packet);
      }
      await this.watchWin();
    }
    catch(err){
      console.error(err);
    }
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  componentDidMount = () => {
    this.setState({ open: false });
  };


  render(){
    const { classes, theme } = this.props;
    const {  topL, topM, topR, midL, midM, midR, botL, botM, botR, xWins, oWins, winner, turn, round, open} = this.state;

      return (
        <React.Fragment>
            <CssBaseline />
                    <Dialog
                      open={this.state.open}
                      onClose={this.handleNextRound}
                      aria-labelledby="alert-dialog-title"
                      aria-describedby="alert-dialog-description"
                    >
                      <DialogTitle id="alert-dialog-title">{`${winner==="x"?"Player 1 (X) Wins!":winner==="o"?"Player 2 (O) Wins!":"Oh Darn, Draw.."}`}</DialogTitle>
                      <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                         {winner==="draw"?"Maybe you will outsmart each other next time. :)":"Give them a big round of applause!"}
                        </DialogContentText>
                      </DialogContent>
                      <DialogActions>
                        <Button onClick={this.handleNextRound} color="primary" autoFocus>
                          Next Round
                        </Button>
                      </DialogActions>
                    </Dialog>
          
    
            <div className={classes.layout}>
                <main>
                    <div className={classes.root}>
                        <Grid container spacing={8}>
                          <Grid item xs={12}>
                              <Typography variant="h2"> 
                                Tic Tac Toe
                              </Typography>
                              <Typography variant="subtitle1">
                                <strong>Written in React.js with Material UI by Jesse Lewis</strong>
                              </Typography>
                          </Grid>
                          </Grid>
                          <Grid container spacing={0}>

                          <Grid item xs={3}>
                          <TextField
                            label="Player 1 (x) Wins"
                            value={this.state.xWins}
                            color="primary"
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                              readOnly: true,
                            }}
                            variant="outlined"
                          />
                          </Grid>

                          <Grid item xs={3}>
                            <TextField
                              label="Player 2 (o) Wins"
                              color="primary"
                              value={this.state.oWins}
                              className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>

                          <Grid item xs={3}>
                            <TextField
                              label="Next Turn"
                              color="primary"
                              value={turn==="x"?"Player 1 (x)":"Player 2 (o)"}
                              className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>
                          
                          <Grid item xs={3}>
                            <TextField
                              label="Round"
                              color="primary"
                              value={round}
                              className={classes.textField}
                              margin="normal"
                              InputProps={{
                                readOnly: true,
                              }}
                              variant="outlined"
                            />
                          </Grid>


                        </Grid>

                        <Grid container spacing={0}>
                            <Grid container item xs={12} spacing={0}>
                              <Grid item xs={4}>
                                <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('topL')} disabled={topL!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={topL==='x'?'/img/x.png':topL==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={topL}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('topM')} disabled={topM!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={topM==='x'?'/img/x.png':topM==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={topM}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('topR')} disabled={topR!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={topR==='x'?'/img/x.png':topR==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={topR}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                            </Grid>
                            <Grid container item xs={12} spacing={0}>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('midL')} disabled={midL!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={midL==='x'?'/img/x.png':midL==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={midL}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('midM')} disabled={midM!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={midM==='x'?'/img/x.png':midM==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={midM}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('midR')} disabled={midR!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={midR==='x'?'/img/x.png':midR==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>                              
                            </Grid>
                            <Grid container item xs={12} spacing={0}>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('botL')} disabled={botL!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={botL==='x'?'/img/x.png':botL==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={botL}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                              <Grid item xs={4}>
                              <Card className={classes.card}>
                                  <CardActionArea onClick={()=>this.handleClick('botM')} disabled={botM!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={botM==='x'?'/img/x.png':botM==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={botM}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                              <Grid item xs={4}>
                              <Card className={classes.root}>
                                  <CardActionArea onClick={()=>this.handleClick('botR')} disabled={botR!=null||winner!=null}>
                                    <CardMedia
                                      className={classes.media}
                                      image={botR==='x'?'/img/x.png':botR==='o'?'/img/o.png':winner!=null?'/img/over.png':'/img/play.png'}
                                      title={botR}
                                    />
                                  </CardActionArea>
                                </Card>
                              </Grid>
                            </Grid>
                        </Grid>
                    </div>
                    <Grid container spacing={0}>
                      <Grid item xs={2}>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={this.handleReset}>
                          New Game
                        </Button>
                      </Grid>
                      <Grid item xs={10}>
                      </Grid>

                    </Grid>
    
                </main>
            </div>
        </React.Fragment>
      );
  }
}

TicTacToe.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TicTacToe);