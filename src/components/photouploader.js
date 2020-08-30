import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Paper from '@material-ui/core/Paper';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
const mystyle = makeStyles((theme)=>({
    Based:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'auto',
        background:'#dbdbdb',
        borderStyle:"1px solid",
    }
}))

export default function ImageUpload(props) {
    const classes = mystyle();
    const [imagefile, setImagefile] = React.useState();
    const handleDelete = () =>{
        setImagefile(undefined)
        props.uploadpic(undefined);
    }
    const handleImage = (e) => {
        let reader = new FileReader();
        props.uploadpic(e.target.files[0])
        reader.onloadend = () => {
            setImagefile(reader.result);
        } 
        reader.readAsDataURL(event.target.files[0])
    }
    const content = () =>{
                
                if(imagefile===undefined){
                    return(
                        <Grid container direction='row' justify='space-between' style={{width:'30%'}}>
                            <Grid item>
                            <p>Add Cover pic</p>
                            </Grid>
                            <Grid item>
                            <label htmlFor='single'>
                                <AddAPhotoIcon style={{ fontSize: '350%',cursor:'pointer'}}/> 
                                <input type='file' id='single' accept='image/*' onChange={handleImage} hidden/> 
                            </label>
                            </Grid>
                        </Grid>
                    )
                }
                else{
                    return (<div>
                        <IconButton onClick={handleDelete} style={{zIndex:'3',marginBottom:'-15%',marginLeft:"-10%"}}>
                            <HighlightOffIcon/>
                        </IconButton>
                        <img src={imagefile} style={{width:'200px',marginRight:'auto',marginLeft:"auto",display:'block'}} />
                    </div>)
                }
    }
    return(
    <React.Fragment>
        <Paper className={classes.Based}>
         {content()}
        </Paper>
    </React.Fragment>
    )
}
