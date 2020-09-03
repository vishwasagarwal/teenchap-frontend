import React from 'react';
import Link from '../../Link';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from '../navbar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotSharpIcon from '@material-ui/icons/WhatshotSharp';
import WebSharpIcon from '@material-ui/icons/WebSharp';
import OndemandVideoSharpIcon from '@material-ui/icons/OndemandVideoSharp';
import FavoriteSharpIcon from '@material-ui/icons/FavoriteSharp';
import Zoom from '@material-ui/core/Zoom';
import Tooltip from '@material-ui/core/Tooltip';


const useStyles = makeStyles((theme) => ({
  Tabs:{
      color:'#A6AFB8',
      borderRadius:'15px',
      '&:hover': {
        backgroundColor: theme.palette.primary.light,
    }
  },
  TabBar:{
    [theme.breakpoints.down('sm')]:{
        width:'90%'
    }
  },
}));

export default function ScrollableTabsButtonForce(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Navbar>
        <Tabs
          variant='scrollable'
          textColor='secondary'
          value={props.TabValue}
          scrollButtons="off"
          aria-label="scrollable auto tabs example"
          className={classes.TabBar}
        >
        <Tooltip title="HOME" TransitionComponent={Zoom} arrow>
            <Tab icon={<HomeIcon fontSize='large' className={classes.IconColor}/>} className={classes.Tabs} component={Link} href='/Dashboard'/>
        </Tooltip>
        <Tooltip title="TRENDING" TransitionComponent={Zoom} arrow>
            <Tab icon={<WhatshotSharpIcon fontSize='large'/>} className={classes.Tabs} component={Link} href='/Trending'/>
        </Tooltip>
        <Tooltip title="NEWS" TransitionComponent={Zoom} arrow>
            <Tab icon={<WebSharpIcon fontSize='large'/>} className={classes.Tabs} component={Link} href='/News'/>
        </Tooltip>
        <Tooltip title="WATCH" TransitionComponent={Zoom} arrow>
            <Tab icon={<OndemandVideoSharpIcon fontSize='large'/>} className={classes.Tabs} component={Link} href='/Watch'/>
        </Tooltip>
        <Tooltip title="MATCH" TransitionComponent={Zoom} arrow>
            <Tab icon={<FavoriteSharpIcon fontSize='large'/>} className={classes.Tabs} component={Link} href='/Match'/>
        </Tooltip>
        </Tabs>
      </Navbar>
    </div>
  )
}

