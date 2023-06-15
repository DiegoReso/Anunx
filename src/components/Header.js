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
import { useSession,signOut } from 'next-auth/client';

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
  typographySpace:{
    marginLeft: '10px',
  },
  divider:{
    margin: '8px 0'
  }
}))


export default function ButtonAppBar() {

  const classes = useStyles()

  const [session] = useSession()

  const [anchorUserMenu,setAnchorUserMenu] = useState(false)
  const openUserMenu = Boolean(anchorUserMenu)

  return (
    
      <AppBar position="static" elevation={3}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography className={classes.root} variant="h6" component="div"  >
              Anunx
            </Typography>
            <Link href={ session ? '/user/publish' : 'auth/signin'} passHref>

              <Button color="secondary" variant="outlined">ANUNCIAR E VENDER</Button>
            </Link>
            {
              session
              ?(
                <IconButton
                
                  onClick={(e) => setAnchorUserMenu(e.currentTarget)}
                  color='secondary'>

              {

                session.user.image
                  ? <Avatar src={session.user.image}/>
                  : <AccountCircle/>

              }
              <Typography className={classes.typographySpace} variant="subtitle2" color="secondary">
                {session.user.name}
              </Typography>

            </IconButton>
            
              )

              : null
            }
            
            <Menu
              anchorEl={anchorUserMenu}
              open={openUserMenu}
              onClose={() => setAnchorUserMenu(null)}
              anchorOrigin={{
                vertical: 'top',
                horizontal:'right',
              }}
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
              <Divider className={classes.divider}/>
              <MenuItem onClick={() => signOut({callbackUrl: 'http://localhost:3000' })}>Sair</MenuItem>
            </Menu>
          </Toolbar>
        </Container>
      </AppBar>
   
  );
}
