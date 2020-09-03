import {useEffect} from 'react'
import {isAuth} from '../actions/auth'
import Router from 'next/router'
import { ThemeProvider } from '@material-ui/styles';
import theme from '../theme'
import ScrollableTabsButtonForce from './navBarComponents/navtabs'

const Layout = (props) => {
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
    <ScrollableTabsButtonForce TabValue={props.TabValue}/>
    {props.children}
    </ThemeProvider>
    
    )
}
export default Layout;