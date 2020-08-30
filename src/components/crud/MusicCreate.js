import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import { Button } from '@material-ui/core';


const mystyle = makeStyles((theme) => ({
    surface: {
        background: '#bababa',
        border: 'dashed',
        minHeight: '50vh',
        margin: theme.spacing(3),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    bottomSurface:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }
}))
export default function MusicCreate() {
    const classes = mystyle();
    const [value,setValue]=React.useState({
        Url:'',
        realUrl:'',
        name:null,
    })
    const {Url,realUrl,name}=value;
    const handleClick = name =>{
        setValue({...value,name,realUrl:''});
    }
    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
    const handleChange = (event) =>{
        setValue({...value,Url:event.target.value})
    }
    const handleSubmit = () =>{
            if(name=='Youtube'){
                const videoId = getId(Url);
                setValue({...value,realUrl:'//www.youtube.com/embed/'+videoId})
            }else if(name=='Spotify'){
                const ModifyUrl=Url.split('/');
                setValue({...value,realUrl:'https://open.spotify.com/embed?uri=spotify%3A'+ModifyUrl[ModifyUrl.length-2]+'%3A'+ModifyUrl[ModifyUrl.length-1]})
            }
    }
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6}>
                    <Paper className={classes.surface} onClick={()=>handleClick('Spotify')}>
                        Spotify
                    </Paper>
                </Grid>
                <Grid item xs={6}>
                    <Paper className={classes.surface} onClick={()=>handleClick('Youtube')}>
                        Youtube
                    </Paper>
                </Grid>
                <Grid item xs={12} className={classes.bottomSurface}>
                <TextField label={name} value={Url} disabled={name==null} onChange={handleChange} fullWidth variant="outlined"/>
                <Button onClick={()=>handleSubmit()} style={{width:'200px',background:'#0b9e2a'}}>Submit</Button>
                </Grid>
                <Grid item xs={12} className={classes.bottomSurface}>
                <iframe src={realUrl} allowtransparency="true" width="650" height="380" frameborder="0" />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}
