import AppBar from '@material-ui/core/AppBar';
import {APP_NAME} from '../../config'
import Typography from '@material-ui/core/Typography';
import { Toolbar, makeStyles, Link } from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Avtar from './Account';
import Slide from '@material-ui/core/Slide';
function HideOnScroll(props) {
  const { children} = props;
  const trigger = useScrollTrigger({disableHysteresis: false});

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}
const useStyles = makeStyles(theme =>({
    
    offset: theme.mixins.toolbar,
    options:{
      marginLeft:'auto'
    }
}));
const Navbar = (props)=> {
  const classes = useStyles();
  
    return(
 <React.Fragment>
 <HideOnScroll>
  <AppBar position="fixed" style={{borderBottom: "1px solid #21374F"}}>
      <Toolbar>
        <Link href='/dashboard' underline='none' style={{color:'white'}}>
        <Typography variant="button">
            {APP_NAME}
          </Typography>
        </Link>
          <div className={classes.options}>
          <Avtar/>
          </div>
          
      </Toolbar>
  </AppBar>
  </HideOnScroll>
  <div className={classes.offset}/>
  </React.Fragment>
);
}

export default Navbar;