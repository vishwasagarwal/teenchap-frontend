import React from 'react';
import {signin,autheticate} from '../actions/auth'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Alert } from '@material-ui/lab';
import Router from 'next/router';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        background: '#00B8FF',
        color:'#001935'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const SignupForm = (props) => {
    const [Value, setValue] = React.useState({
        email: '',
        password: '',
        error: '',
        loading: false,
        message: '',
        showform: true,
    });
   /* const [Errors,setErrors] = React.useState({
        name:"",
        email:"",
        password:''
    })*/
    const {
        email,
        password,
        error,
        loading,
        message,
        showform
    } = Value;
    const classes = useStyles();
    const handleSubmit = (e) => {
      e.preventDefault();
      console.table({email,password,error,loading,message,showform})
      setValue({
          ...Value,
          loading: true,
          error: false
      })
      const user = {
          email,
          password
      }
      signin(user).then(data => {
          if(data.error) {
              setValue({
                  ...Value,
                  error: data.error,
                  loading: false
              });
          } else {
            console.log(data);
            autheticate(data,()=>{
              Router.push('/dashboard');
              console.log('hello'+data.user.name)
            })  
              
          }
      })

  }
    const handleChange = names => e => {
        setValue({
            ...Value,
            [names]: e.target.value
        })
        console.log(Value)
       // validateForm();
    }
   /* function validateForm(){
        let formIsValid = true;
        
        if (!Value.name.match(/^[a-zA-Z ]*$/)) {
            formIsValid=false;
            setErrors({...Errors,name:"Please enter alphabet characters only"});
          }
          
          var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
          if (!pattern.test(Value.email)) {
            formIsValid=false;
            setErrors({...Errors,email:"Please enter valid email-ID."});
            
          }
          if (Value.name.match(/^[a-zA-Z ]*$/)) {
            formIsValid=false;
            setErrors({...Errors,name:""});
          }
          if (pattern.test(Value.email)) {
            formIsValid=false;
            setErrors({...Errors,email:""});
            
          }
          if (Value.password.length<5) {
            formIsValid=false;
            setErrors({...Errors,password:"Must be 6 letter long"});
          }
          if (Value.password.length>5) {
            formIsValid=false;
            setErrors({...Errors,password:""});
          }
        console.log(Errors)
        return formIsValid
    }*/
    const showloading = () =>(loading ? <div>loading....</div> :<div></div>);
const showerror =() =>(error ?  <Alert severity="error">{error}</Alert>:<div></div>)
    const showmessage =()=>(message ?  <Alert severity="info">{message}</Alert>:<div></div>)
    return (
        <Container component="main" maxWidth="xs">
            <div className={
                classes.paper
            }>
                <Avatar className={
                    classes.avatar
                }>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <form className={
                        classes.form
                    }
                    onSubmit={handleSubmit}>
                    <Grid container
                        spacing={2}>
                        <Grid item
                            xs={12}>
                            <TextField onChange={
                                    handleChange('email')
                                }
                               /*helperText={Errors.email}
                                error={Errors.email==='' ? true:false}*/
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                value={email}
                                autoComplete="email"/>
                        </Grid>
                        <Grid item
                            xs={12}>
                            <TextField onChange={
                                    handleChange('password')
                                }
                                variant="outlined"
                                /*helperText={Errors.password}
                                error={Errors.password==='' ? true:false}*/
                                required
                                fullWidth
                                value={password}
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"/>
                        </Grid>
                    </Grid>
                    <Button type="submit" fullWidth variant="contained" color="primary"
                        className={
                            classes.submit
                    }>
                        Sign In
                    </Button>
                </form>
                <Grid container justify="center">
                    <Grid item>
                        <Button onClick={
                            props.onSigninSwitch
                        }>
                        Don't have an account? Sign Up
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                       {showerror()}
                       {showloading()}
                       {showmessage()} 
                    </Grid>
                </Grid>
            </div>
        </Container>
    )
}
export default SignupForm;














/*


import * as React from 'react';
import {render} from 'react-dom';
import {Formik, Form, Field} from 'formik';
import {
  Button,
  LinearProgress,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  Typography,
} from '@material-ui/core';
import MuiTextField from '@material-ui/core/TextField';
import {
  fieldToTextField,
  TextField,
  TextFieldProps,
  Select,
  Switch,
} from 'formik-material-ui';
import {
  TimePicker,
  DatePicker,
  DateTimePicker,
} from 'formik-material-ui-pickers';
import {MuiPickersUtilsProvider} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import {
  Autocomplete,
  ToggleButtonGroup,
  AutocompleteRenderInputParams,
} from 'formik-material-ui-lab';
import Box from '@material-ui/core/Box';



interface Values {
  name: string;
  email: string;
  password:string;
}



function UpperCasingTextField(props: TextFieldProps) {
  const {
    form: {setFieldValue},
    field: {name},
  } = props;
  const onChange = React.useCallback(
    event => {
      const {value} = event.target;
      setFieldValue(name, value ? value.toUpperCase() : '');
    },
    [setFieldValue, name]
  );
  return <MuiTextField {...fieldToTextField(props)} onChange={onChange} />;
}

const App = () => (
  <Formik
    initialValues={{
      name:'',
      email: '',
      password: '',
    }}
    validate={values => {
      const errors: Partial<Values> = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address';
      }
      if(!values.name){
        errors.name = 'Required'
      }else if(
        !/^[a-zA-Z ]+$/i.test(values.name)
      ){
        errors.name = 'Invalid name';
      }
      if(values.password.length<5){
        errors.password='Must be 6 letter'
      }
      return errors;
    }}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
    render={({submitForm, isSubmitting, touched, errors}) => (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Form>
          <Box margin={1}>
            <Field
              component={UpperCasingTextField}
              name="name"
              type="name"
              label="Name"
            />
          </Box><Box margin={1}>
            <Field
              component={UpperCasingTextField}
              name="email"
              type="email"
              label="Email"
            />
          </Box>
          <Box margin={1}>
            <Field
              component={TextField}
              type="password"
              label="Password"
              name="password"
            />
          </Box>
          <Box margin={1}>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              onClick={submitForm}
            >
              Submit
            </Button>
          </Box>
        </Form>
      </MuiPickersUtilsProvider>
    )}
  />
);

render(<App />, document.getElementById('root'));
*/