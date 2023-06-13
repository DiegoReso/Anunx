import {
  Card as CardMUI,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme)=>({

  cardMedia:{
    paddingTop: '100%'
  },

}))

const Card =({image, title, subtitle, actions})=>{


  const classes = useStyles()

  return(
    <CardMUI>
      <CardMedia
        className={classes.cardMedia} 
        image={image}
        title={title}
        subtitle={subtitle}
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Produto X
        </Typography>
        <Typography>
          R$ 60,00
        </Typography>
      </CardContent>
        {
          actions
          
          ?( 
          <CardActions>
            {actions}
          </CardActions>
          )

          :null
        }
  
    </CardMUI>

  )
}

export default Card