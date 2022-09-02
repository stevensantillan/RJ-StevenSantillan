import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemImg = ({img}) => {
  return (
    <Card sx={{ maxWidth: "auto", height: "800", ml:2 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="730"
          image={img}
          alt="example"
        />
        <CardContent sx={{flexDirection: "row"}}>
          <Typography gutterBottom 
                      variant="h5" 
                      component="div"
                      textAlign="center">
                          Example
                          <IconButton color="primary" 
                                      aria-label="add to shopping cart"
                                      sx={{ml: 15}}>
                                        <FavoriteBorderIcon />
                          </IconButton>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ItemImg