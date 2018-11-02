import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import red from '@material-ui/core/colors/red';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
    root: {
      display: 'flex',
    },
    menuButton: {
      marginLeft: 12,
      marginRight: 36,
    },
    hide: {
      display: 'none',
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: '0 8px',
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: 0,
    },
    modalImage: {
        minWidth: '500px',
        height: '100%',
        marginTop: theme.spacing.unit*2,
        marginBottom: theme.spacing.unit*3,
    },
    media: {
        minHeight: '800px',
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        alignItems: 'center',
        justifyContent: 'space-between',
    }
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
}
  
class JesseModal extends React.Component {

    handleClose = () => {
        this.props.handleClose({ open: false });
    };

    render() {
        const { classes, theme, open, handleCloseModal, image} = this.props;

        return (
            <div>
                <Dialog
                    fullScreen
                    image={image}
                    open={this.props.open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleCloseModal}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogContent>
                        <Grid 
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} md={12}>
                                <AppBar position="fixed" color="primary" className={classes.appBar}>
                                    <Toolbar className={classes.toolbar}>
                                        <DialogActions>
                                            <div>
                                                <Button onClick={this.handleClose} variant="contained" color="secondary">
                                                    Close
                                                </Button>
                                            </div>
                                        </DialogActions>
                                    </Toolbar>
                                </AppBar>
                            </Grid>
                            <Grid item xs={12} md={2}>
                                
                            </Grid>
                            <Grid item xs={12} md={8}>
                                {image?<img src={image} className={classes.modalImage} height="800"/>: null}
                            </Grid>
                            <Grid item xs={12} md={2}>
                                
                            </Grid>
                        </Grid>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
}

JesseModal.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(JesseModal);
  