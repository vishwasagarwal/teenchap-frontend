import Backdrop from '@material-ui/core/Backdrop';
import CreateBlog from '../components/crud/BlogCreate';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        background: 'rgba(245, 124, 0, 0.5)',
        flexWrap:'wrap'

    }
}))

function BackdropGenerator(props){
    const classes = useStyles();
    const BackGenerator = () =>{ 
        switch(true){
          case props.name === 'Blog':{
            return(
              <div>
              <Backdrop className={classes.backdrop} style={{background:'rgba(245, 124, 0, 0.5)' ,overflow: 'auto'}} open={props.open}>
                <CreateBlog handlebackDrop={props.setclose}/> 
              </Backdrop>
              </div>
            )
          }
          case props.name=== 'Music':{
            return(
              <div>
              <Backdrop className={classes.backdrop} style={{background:'rgba(56, 142, 60, .5)' ,overflowY: 'auto'}} open={props.open}>
              <CreateBlog/>
                <IconButton onClick={props.setclose} style={{marginBottom:'auto',marginRight:'auto',margonTop:'10%'}}>
                  <CloseIcon style={{color:'white'}} fontSize="large"/>
                </IconButton>
              </Backdrop>
              </div>
            )
          }
          case props.name=== 'Video':{
            return(
              <div>
              <Backdrop className={classes.backdrop} style={{background:'rgba(123, 31, 162, .5)',overflowY: 'auto'}} open={props.open}>
              <CreateBlog/>
                <IconButton onClick={props.setclose} style={{marginBottom:'auto',marginRight:'auto',margonTop:'10%'}}>
                  <CloseIcon style={{color:'white'}} fontSize="large"/>
                </IconButton>
              </Backdrop>
              </div>
            )
          }
          case props.name=== 'Photo':{
            return(
              <div>
              <Backdrop className={classes.backdrop} style={{background:'rgba(194, 24, 91, .5)',overflowY: 'auto'}} open={props.open}>
              <CreateBlog/>
                <IconButton onClick={props.setclose} style={{marginBottom:'auto',marginRight:'auto',margonTop:'10%'}}>
                  <CloseIcon style={{color:'white'}} fontSize="large"/>
                </IconButton>
              </Backdrop>
              </div>
            )
          }
          case props.name=== 'Embedded':{
            return(
              <div>
              <Backdrop className={classes.backdrop} style={{background:'rgba(2, 136, 209, .5)',overflowY: 'auto'}} open={props.open}>
              <CreateBlog/>
                <IconButton onClick={props.setclose} style={{marginBottom:'auto',marginRight:'auto',margonTop:'10%'}}>
                  <CloseIcon style={{color:'white'}} fontSize="large"/>
                </IconButton>
              </Backdrop>
              </div>
            )
          }
          default:{
              return(<div>
              </div>)
          }
    
        }
      }
      
    return(
        <div>
            {BackGenerator()}        
        </div>
    )
  }

  export default BackdropGenerator;