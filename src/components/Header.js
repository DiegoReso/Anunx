import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar, Container, Divider, IconButton, Menu, MenuItem } from '@material-ui/core';
import Link from 'next/link';
import { AccountCircle } from '@material-ui/icons';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) =>({
  root:{
    flexGrow:1,
  },
  menuButton:{
    marginright: theme.spacing(2),
  },
  title:{
    flexGrow: 1,
  },
}))


export default function ButtonAppBar() {

  const classes = useStyles()

  const [anchorUserMenu,setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    
      <AppBar position="static" elevation={3}>
        <Container>
          <Toolbar>
            <Typography className={classes.root} variant="h6" component="div"  >
              Anunx
            </Typography>
            <Link href="/user/publish" passHref>
              <Button color="secondary" variant="outlined">ANUNCIAR E VENDER</Button>
            </Link>
            <IconButton 
              onClick={(e) => setAnchorUserMenu(e.currentTarget)}
              color='secondary'>

              {

                true === false
                  ? <Avatar src=""/>
                  : <AccountCircle/>

              }
              <Typography sx={{ml:'10px'}} variant="subtitle2" color="secondary">
                Diego Reis
              </Typography>

            </IconButton>
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              sx={{mt: '12px'}}
              color='primary'
            >
              <Link href='user/dashboard' passHref>
                <MenuItem>
                  <Typography color="primary">
                    Meus anúncios
                  </Typography>
                </MenuItem>
              </Link>
              <Link href='user/publish' passHref>
                <MenuItem>
                <Typography color="primary">
                    Publicar anúncio
                  </Typography>
                </MenuItem>
              </Link>
              <Divider/>
              <MenuItem>Sair</MenuItem>
            </Menu>

          </Toolbar>
        </Container>
      </AppBar>
   
  );
}
