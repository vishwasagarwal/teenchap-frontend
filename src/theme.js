import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
      primary: {
          main:'#001935',
          light:'#2e3f5f',
          dark:'#000010',
          contrastText:'#ffffff'
      },
      secondary:{
        main:'#00B8FF',
        contrastText:'#ffffff'
    }
  }
})

export default theme;
