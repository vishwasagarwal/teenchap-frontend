import {useEffect} from 'react'
import {isAuth} from '../src/actions/auth'
import Brandbar from '../src/components/brandbar';
import { ThemeProvider } from '@material-ui/styles';
import theme from '../src/theme'
import Router from 'next/router'

const Index = () => {
    useEffect(()=>{
    isAuth()&& Router.push('/Dashboard');
    },[]);
    return(         
    <ThemeProvider theme={theme}>
        <style jsx global>{`
        body {
            background-color: #001935;
        }
        `}</style> 
        <Brandbar/>
        Hello
    </ThemeProvider>
    
    )
}
export default Index;
