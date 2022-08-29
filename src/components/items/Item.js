import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Item = ({producto}) => {
    return (
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              height="160"
              image={producto.img}
              alt="img prod"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.nameProd}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Precio: ${producto.price}
              </Typography>
              <Typography gutterBottom variant="h6" component="div">
                Stock disponible: {producto.stock}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.detail}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Ver más
            </Button>
          </CardActions>
        </Card>
      );
}

export default Item