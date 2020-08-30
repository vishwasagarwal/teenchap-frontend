import AppBar from '@material-ui/core/AppBar';

import {APP_NAME} from '../../config';
import Typography from '@material-ui/core/Typography';
import { Toolbar, makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SignInForm from './singin';
import SignupForm from './signup';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

function ElevationScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }

const useStyles = makeStyles(theme =>({
    
    offset: theme.mixins.toolbar,
    Buttongroup:{
      marginLeft:'auto',
    },
    Button:{
      '&:hover':{
        backgroundColor:'#00B8FF',
        color:'#001935'
      }
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    Dialogbox:{
      height:'100vh'
    },
    Dialogtitlebox:{
      height:'1%'
    },
}));
const Brandbar = (props)=> {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [isSignup, setIsSignup] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const handleSignupSwitch = () =>{
    setIsSignup(false);
    
  }
  const handleSigninSwitch = () =>{
    setIsSignup(true);
  }
  const handleClickOpen = () => {
    setOpen(true);
    setIsSignup(false);
  };
  const handleSignup=()=>{
    setOpen(true);
    setIsSignup(true)
  }
  const handleClose = () => {
    setOpen(false);
    
  };
   
    return(
 <React.Fragment>
 <ElevationScroll>
  <AppBar position="fixed" style={{borderBottom: "1px solid #21374F"}}>
      <Toolbar>
          <Typography variant="button">
             {APP_NAME}
          </Typography>
          <div className={classes.Buttongroup}>
          <Button color="inherit" className={classes.Button} onClick={handleClickOpen}>Login</Button>
          <Button color="inherit" className={classes.Button} onClick={handleSignup}>Get Started</Button>
          </div>
      </Toolbar>
  </AppBar>
  </ElevationScroll>
  <div className={classes.offset}/>
  <Dialog fullScreen={fullScreen} onClose={handleClose} aria-labelledby="authentication dialog-box" open={open} classes={{paper:classes.Dialogbox}}>
        <DialogTitle id="authentication dialog-box" onClose={handleClose} className={classes.Dialogtitlebox}>
          <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </DialogTitle>
        <DialogContent>
        {isSignup?<SignupForm onSignupSwitch={handleSignupSwitch}/> : <SignInForm onSigninSwitch={handleSigninSwitch}/>}
        </DialogContent>
      </Dialog>
  </React.Fragment>
);
}

export default Brandbar;