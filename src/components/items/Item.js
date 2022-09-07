import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
        <Card style={{background: "#e1b7edf2"}}>
          <CardActionArea style={{background: "#e1b7edf2"}}>
            <CardMedia
              component="img"
              height="400"
              image={producto.img}
              alt="img prod"
            />
            <CardContent style={{background: "#c869f4f2"}}>
              <Typography gutterBottom variant="h5" component="div" fontSize="28px">
                {producto.nameProd}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Link to={`/item/${producto.id}`}> 
              <Button size="small" color="primary">
                Ver más
              </Button>
            </Link>
          </CardActions>
        </Card>
      );
}

export default Item