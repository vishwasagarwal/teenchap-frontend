import Router from 'next/router'
import {withRouter} from 'next/router';
import { makeStyles} from '@material-ui/core/styles';
import dynamic from 'next/dynamic';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
const SunEditor = dynamic(()=> import('suneditor-react'),{ssr:false});
import ImageUpload from '../photouploader';
import '../../../node_modules/suneditor/dist/css/suneditor.min.css';
import ServerAutoSuggest from '../tagslist';
import {createBlog} from '../../actions/blogcreate';
import {getCookie} from '../../actions/auth';
import { green,red,blue,purple,grey} from '@material-ui/core/colors';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';





const mystyle = makeStyles((theme)=>({
    PublishButton:{
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        
        color:theme.palette.common.white,
        '&:hover': {
            backgroundColor: green[900],
          }
    },
    surface:{
        background:'rgba(0,0,0,0)',
        marginLeft:'auto',
        marginRight:'auto',
        width:'45vw',
        [theme.breakpoints.down('sm')]:{
          width:'80vw'
        }
    },
    innersurface:{
     

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



function CreateBlog(props,{router}){
    const blogFormLs = () =>{
      if(typeof window === 'undefined'){
        return false
      }
      if(localStorage.getItem('blog')){
        return JSON.parse(localStorage.getItem('blog'))
      }else return false;
    }
    const blogFormLsTitle = () =>{
      if(typeof window === 'undefined'){
        return null
      }
      if(localStorage.getItem('blogtitle')){
        return JSON.parse(localStorage.getItem('blogtitle'))
      }else return false;
    }
    const [open,setOpen] = React.useState(false);
    const token = getCookie('token');
    const [body,setBody] = React.useState('');
    const [values,setValues]=React.useState({
        error:'',
        sizeError:'',
        success:'',
        title:'',
        category:'',
        photo:null,
        hidePublishButton:false
    })
    const {error,sizeError,success,title,hidePublishButton,category,photo}=values
    const classes = mystyle();

    /*useEffect(()=>{
      setformData(new FormData());
    },[router])*/

    const handletag = (arrayoftags) =>{
     setValues({...values,category:arrayoftags});
    }
      const handlepublish = (e) =>{
          e.preventDefault()
          setOpen(true);

          let formdata = new FormData();
          formdata.set('category',category); 
          formdata.set('photo',photo);
          formdata.set('title',title);
          formdata.set('body',body);   
          createBlog(formdata,token).then(data =>{
            if(data.error){
              setValues({...values,error:data.error,success:''})
            }else {
              setValues({...values,success:'Successfully submitted',title:'',error:''});
              setBody('');
              Router.reload();
            }
          })
      }

      const handlephoto = (photovalue) =>{
         setValues({...values,photo:photovalue});
         
      }
      const handleChange = e => {
          setValues({...values,title:e.target.value,error:''})
      }
      const handleBody = content=>{
          setBody(content)
      }
      const CreateblogForm = () =>{
          return(
              <form onSubmit={()=>handlepublish}>
                  <Grid container>
                  <Grid item xs={12}>
                  <Paper elevation={6}>
                  <TextField fullWidth  placeholder='Title' value={title} variant="filled" style={{background:'white',borderRadius:'5px'}} onChange={handleChange}/>
                  </Paper>
                  </Grid>
                  <Grid item xs={12}>
                  <Paper elevation={7}>
                  <SunEditor placeholder="Start Writing Here!" style={{borderRadius:"7px"}} setContents={body}
                  setOptions={{
                     height : 'auto',
                    buttonList: [
                      // default

                      [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                      [':t-More Text-default.more_text','bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
                      ['fontColor', 'hiliteColor', 'textStyle'],
                      ['removeFormat'],
                      ['outdent', 'indent'],
                      [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
                      ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'preview', 'print', 'save','undo', 'redo'],
                      ['image', 'video', 'link' , 'table'],
                      // (min-width: 992)
                      ['%992', [
                          [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                          [':t-More Text-default.more_text','bold', 'underline', 'italic', 'strike'],
                          [':t-More Text-default.more_text', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
                          ['removeFormat'],
                          ['outdent', 'indent'],
                          [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
                          ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'preview', 'print', 'save','undo', 'redo'],
                          ['-right', ':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video']
                      ]],
                      // (min-width: 767)
                      ['%767', [
                          [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                          [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle'],
                          ['removeFormat'],
                          ['outdent', 'indent'],
                          [':e-More Line-default.more_horizontal', 'align', 'horizontalRule', 'list', 'lineHeight'],
                          [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video'],
                          ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'preview', 'print', 'save','undo', 'redo']
                      ]],
                      // (min-width: 480)
                      ['%480', [
                          [':p-More Paragraph-default.more_paragraph', 'font', 'fontSize', 'formatBlock', 'paragraphStyle', 'blockquote'],
                          [':t-More Text-default.more_text', 'bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor', 'textStyle', 'removeFormat'],
                          [':e-More Line-default.more_horizontal', 'outdent', 'indent', 'align', 'horizontalRule', 'list', 'lineHeight'],
                          [':r-More Rich-default.more_plus', 'table', 'link', 'image', 'video'],
                          ['-right', ':i-More Misc-default.more_vertical', 'fullScreen', 'preview', 'print', 'save','undo', 'redo']
                      ]]
                  ],
                  callBackSave:function(contents){
                    alert(contents);
                  }
                  }
                  }
                  onChange={handleBody}/>
                  </Paper>
                  </Grid>
                  </Grid>
              </form>
          )
      }
    const showerror =()=>error?<Snackbar open={true} autoHideDuration={1000}><Alert severity='error' variant='filled'>{`${error}`}</Alert></Snackbar>:<div></div>
    const showsuccess =()=>success?<Snackbar open={true} autoHideDuration={1000}><Alert severity='success' variant='filled'>{success}</Alert></Snackbar>:<div></div>
      return(
        <React.Fragment>
          <Grid container justify='center' alignItems="center">
          <Grid item xs>
          <Paper elevation={10} className={classes.surface}>
            {CreateblogForm()}
          <Paper className={classes.innersurface}>
            <ServerAutoSuggest handleTags={handletag}/>
          </Paper>
            <ImageUpload uploadpic={handlephoto}/>
            <div className={classes.buttonGroup}>
            <Button className={classes.closeButton} onClick={props.handlebackDrop}>Close</Button>
            <Button className={classes.publishbutton} onClick={handlepublish}>Publish</Button>
            </div>
          </Paper>
          </Grid>
          </Grid>
          {showerror()}
          {showsuccess()}
        </React.Fragment>
      )
  }
  
  export default withRouter(CreateBlog)
  