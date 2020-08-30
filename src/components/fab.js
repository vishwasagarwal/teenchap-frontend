import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import CreateIcon from '@material-ui/icons/Create';
import InsertLinkIcon from '@material-ui/icons/InsertLink';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import { green,red,pink,purple,orange,lightBlue} from '@material-ui/core/colors';
import BackdropGenerator from './backdropgenerator';
import theme from '../theme';
const useStyles = makeStyles((theme) => ({
  root: {
    height: 380,
    transform: 'translateZ(0px)',
    flexGrow: 1,
    position: 'fixed',
    bottom: theme.spacing(-2),
    right: theme.spacing(2),
  },
  photo:{
    color: theme.palette.common.white,
    backgroundColor: pink[700],
    '&:hover': {
      backgroundColor: pink[900],
    }
  },
 Video:{
    color: theme.palette.common.white,
    backgroundColor: purple[700],
    '&:hover': {
      backgroundColor: purple[900],
    }
},Blog:{
    color: theme.palette.common.white,
    backgroundColor: orange[700],
    '&:hover': {
      backgroundColor: orange[900],
    }
},embedded:{
    color: theme.palette.common.white,
    backgroundColor: lightBlue[700],
    '&:hover': {
      backgroundColor: lightBlue[900],
    }
},Music:{
    color: theme.palette.common.white,
    backgroundColor: green[700],
    '&:hover': {
      backgroundColor: green[900],
    }
},
}));


export default function FabButton() {
  const classes = useStyles();
  const [backOpen,setBackOpen]=React.useState({
    open:false,
    Backopen:false,
    name:''
  })
  function handleBackOpen(name){
    setBackOpen(
      { ...backOpen,
        Backopen:true,
        name:name,
      }
    )
  }
  function handleBackClose(){
    setBackOpen(
      {
        ...backOpen,
        Backopen:false,
        name:'',
      }
    )
  }
  const handleOpen = () => {
    setBackOpen(
      {
        ...backOpen,
        open:true,
      }
    )
  };
  const handleClose = () => {
    setBackOpen(
      {
        ...backOpen,
        open:false,
      }
    )
  };
  return (
    <React.Fragment>
    <div className={classes.root}>
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        FabProps={{style:{color: theme.palette.common.white,
            backgroundColor: red[700],
            '&:hover': {
              backgroundColor: red[900],
            }}}}
        icon={<SpeedDialIcon/>}
        onClose={handleClose}
        onOpen={handleOpen}
        direction='up'
        open={backOpen.open}
      >
        <SpeedDialAction
            icon={<AudiotrackIcon/>}
            tooltipTitle='Music'
            onClick={()=>handleBackOpen('Music')}
            className={classes.Music}
        />
        <SpeedDialAction
            icon={<InsertLinkIcon/>}
            tooltipTitle='Embedded'
            onClick={()=>handleBackOpen('Embedded')}
            className={classes.embedded}
        />
        <SpeedDialAction
            icon={<CreateIcon/>}
            tooltipTitle='Blog'
            onClick={()=>handleBackOpen('Blog')}
            className={classes.Blog}
        /> 
        <SpeedDialAction
            icon={<CameraAltIcon/>}
            tooltipTitle='Photo'
            onClick={()=>handleBackOpen('Photo')}
            className={classes.photo}
        />
        <SpeedDialAction
            icon={<PlayCircleOutlineIcon/>}
            tooltipTitle='Video'
            onClick={()=>handleBackOpen('Video')}
            className={classes.Video}
        />  
      </SpeedDial>
    </div>
    <div>
      <BackdropGenerator open={backOpen.Backopen} setclose={handleBackClose} name={backOpen.name}/>
    </div>
    </React.Fragment>
  );
}
