import Grid from '@material-ui/core/Grid'
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from '@material-ui/core/IconButton';
import dynamic from 'next/dynamic';
import ServerAutoSuggest from '../tagslist';
const SunEditor = dynamic(()=> import('suneditor-react'),{ssr:false});
const mystyle = makeStyles((theme) => ({
    outersurface:{
        background:'rgba(0,0,0,0)',
        marginLeft:'auto',
        marginRight:'auto',
        width:'40vw',
        borderStyle:'none',
        [theme.breakpoints.down('sm')]:{
          width:'80vw'
        }
    },
    surface: {
        background: '#bababa',
        border: 'dashed',
        minHeight: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer'
    },
    bottomSurface:{
        background:'#fff',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding:theme.spacing(1)        
    },
    buttonGroup:{

        display: 'flex',
        justifyContent:'flex-end',
        marginTop:theme.spacing(1),
        width:'100%',
    },
    publishbutton:{
      background:'#43a047',
      color:'white',
      width:'100%',
      '&:hover':{
        background:"#2e7d32",
      },
    },
    closeButton:{
      background:'#e53935',
      color:'white',
      width:'100%',
      '&:hover':{
        background:"#c62828",
      },
      marginRight:theme.spacing(2)
    },
}))
export default function MusicCreate(props) {
    const classes = mystyle();
    const [captions,setCaptions]=React.useState()
    const [value,setValue]=React.useState({
        Url:'',
        realUrl:'',
        Clicked:false,
        title:'',
        category:[]
    })
    const {Url,realUrl,Clicked,title}=value;
    const handleDelete = () =>{
        setValue({Url:'',realUrl:'',Clicked:false});
    }
    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
    
        return (match && match[2].length === 11)
          ? match[2]
          : null;
    }
    const handleCaptions = e =>{
            setCaptions(e)
            console.log(JSON.stringify(captions))
    }
    const handletag = (arrayoftags) =>{
        setValue({...value,category:arrayoftags});
    }
    const handleChange = name =>event=>{
        if(name==='Url'){
        setValue({...value,Url:event.target.value})
        console.log(Url)
        }
        if(name==='title'){
            setValue({...value,title:event.target.value})
            console.log(title)
        }
    }
    const handleSubmit = () =>{
            if(!Url) return
            let check = Url.search('open.spotify')
            if(check === -1){
                const videoId = getId(Url);
                setValue({...value,realUrl:'//www.youtube.com/embed/'+videoId,Clicked:true})
            }else{
                const ModifyUrl=Url.split('/');
                setValue({...value,realUrl:'https://open.spotify.com/embed?uri=spotify%3A'+ModifyUrl[ModifyUrl.length-2]+'%3A'+ModifyUrl[ModifyUrl.length-1],Clicked:true})
            }
    }
    return (
        <React.Fragment>
            <Paper className={classes.outersurface}>
            <Grid container>
                <Grid item xs={12} className={classes.bottomSurface}>
                <TextField placeholder='Paste youtube or spotify link' value={Url} disabled={name==null} onChange={handleChange('Url')} fullWidth variant="outlined" style={{background:'#fff'}}/>
                <Button onClick={()=>handleSubmit()} style={{width:'200px',background:'#0b9e2a',marginLeft:'10px',color:'#fff'}}>Submit</Button>
                </Grid>
                {Clicked && <Grid container direction='column'>
                <div>
                <IconButton onClick={()=>handleDelete()} style={{float:'right',marginBottom:'-20px',marginRight:'-3%'}}>
                    <HighlightOffIcon style={{color:"#f44336"}}/>
                </IconButton>
                </div>
                <iframe src={realUrl} allowtransparency="true" width="auto" height='300px' frameborder="0" />
                </Grid>}
                <Grid item xs={12}>
                <TextField placeholder='Title' value={title}  onChange={handleChange('title')} fullWidth variant="filled" style={{background:'#fff'}}/>
                </Grid>
                <Grid item xs={12}>
                <SunEditor placeholder="Write something about it....." style={{borderRadius:"7px"}} setContents={captions} onChange={handleCaptions}
                  setOptions={{
                     mode:'balloon-always',
                     height : 'auto',
                    buttonList: [
                      // default
                      [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                      [':t-More Text-default.more_text','bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                      ['fontColor', 'hiliteColor', 'textStyle'],
                      ['removeFormat'],
                      ['outdent', 'indent'],
                      [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
                      ['-right', ':i-More Misc-default.more_vertical','undo', 'redo'],
                      ['image', 'video', 'link'],
                      // (min-width: 992)
                      ['%992', [
                          [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                          [':t-More Text-default.more_text','bold', 'underline', 'italic', 'strike'],
                          [':t-More Text-default.more_text', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
                          ['removeFormat'],
                          ['outdent', 'indent'],
                          [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
                          ['-right', ':i-More Misc-default.more_vertical','undo', 'redo'],
                          ['-right', ':r-More Rich-default.more_plus', 'link', 'image', 'video']
                      ]],
                      // (min-width: 767)
                      ['%767', [
                          [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                          [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
                          ['removeFormat'],
                          ['outdent', 'indent'],
                          [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
                          [':r-More Rich-default.more_plus', 'link', 'image', 'video'],
                          ['-right', ':i-More Misc-default.more_vertical','undo', 'redo']
                      ]],
                      // (min-width: 480)
                      ['%480', [
                          [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                          [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle', 'removeFormat'],
                          [':e-More Line-default.more_horizontal', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
                          [':r-More Rich-default.more_plus', 'link', 'image', 'video'],
                          ['-right', ':i-More Misc-default.more_vertical','undo', 'redo']
                      ]]
                  ],
                  }
                  }/>
                </Grid>
                <Grid item xs={12}>
                    <ServerAutoSuggest handleTags={handletag}/>
                </Grid>
                <div className={classes.buttonGroup}>
                <Button className={classes.closeButton} onClick={props.handlebackDrop}>Close</Button>
                <Button className={classes.publishbutton}>Publish</Button>
                </div>
            </Grid>
        </Paper>
        </React.Fragment>
    )
}
