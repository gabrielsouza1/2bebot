import React from 'react'
import { AppBar, Toolbar ,Grid,  makeStyles} from '@material-ui/core';

const useStyles = makeStyles({
     root:{
          backgroundColor: '#FFF',
          height: 64,
     }
})

export default function Header(){
     const classes = useStyles();

  return(
      <AppBar position="static" className={classes.root}>
           <Toolbar>
                  <Grid container>

                       </Grid>
           </Toolbar>
      </AppBar>
  )
}