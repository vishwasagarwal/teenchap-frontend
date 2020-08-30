import {useEffect} from 'react'
import {isAuth} from '../actions/auth'
import Router from 'next/router'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import Navbar from './navbar';
const Layout = ({children}) => {
    useEffect(()=>{
        !isAuth()&& Router.push('/');
      },[]);
    return( 
    <ThemeProvider theme={theme}>
        <style jsx global>{`
        body {
            background-color: #001935;
        }
        `}</style>
    <Navbar/>
    {children}
    </ThemeProvider>
    
    )
}
export default Layout;