import Layout from '../src/components/Layout';
import { makeStyles } from "@material-ui/styles";
import Grid from '@material-ui/core/Grid'
import Avatar from '@material-ui/core/Avatar'
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	coverPic:{
		width:'80vw',
		height:'40vh',
		objectFit:'cover',
		borderBottom: "3px solid #A6AFB8",
		borderRadius:'10px'
	},
	avatar:{
		width: 152, 
		height: 152,
		marginTop:theme.spacing(-11),
		marginLeft:"auto",
		marginRight:'auto',
		zIndex:'20',
		border:'solid #A6AFB8'
	},
	ProfileTop:{
		textAlign:'center',
		width:'100vw',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		height:'30vh'
		
	}
}));

const Profile = () => {
	const classes = useStyles();
    return(
        <Layout>
			<CssBaseline/>
            <Grid container direction='column' justify='center' alignItems='center'>
				<Grid item xs={12} className={classes.ProfileTop}>
				<img src='https://marketplace.canva.com/EADZ4CXdvms/2/0/800w/canva-beach-photo-quote-summer-facebook-cover-LJApFySngB8.jpg' alt='Cover pic' className={classes.coverPic}/>
					<Avatar className={classes.avatar} src="https://cc-media-foxit.fichub.com/image/fox-it-mondofox/e8c0f288-781d-4d0b-98ad-fd169782b53b/scene-sottacqua-per-i-sequel-di-avatar-maxw-654.jpg"/>
					<h1>Vishwas</h1>
					<h3 style={{color:'#fff'}}>About</h3>
		</Grid>
		
		</Grid>
        </Layout>
    )
}
export default Profile;
