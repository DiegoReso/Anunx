import { Box, Container, Grid, Typography} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import Link from "next/link"

const useStyles = makeStyles((theme)=>({
  footer:{
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]:{
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    }
  }
}))

const Footer =()=>{

  const classes = useStyles()
  return(
    <Container className={classes.footer} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
          <Box  textAlign='center'>
            <Link href="#" passHref>
              <Typography color='textSecondary' variant='subtitle1'>Ajuda e Contato</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Link href="#" passHref>
              <Typography color='textSecondary' variant='subtitle1'>Dicas de Seguraça</Typography>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
           <Link href="#" passHref>
            <Typography color='textSecondary' variant='subtitle1'>Anunciar e Vender</Typography>
          </Link>
          </Box>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Box textAlign='center'>
            <Link href="#" passHref>
              <Typography color='textSecondary' variant='subtitle1'>Plano rofissional</Typography>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}


export default Footer