import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const ItemImg = ({img}) => {
  return (
    <Card sx={{ maxWidth: "auto", height: "800", ml:2 }}>
        <CardMedia
          component="img"
          height="730"
          image={img}
          alt="example"
        />
        <CardContent sx={{flexDirection: "row"}}>
          <Typography gutterBottom 
                      variant="h5" 
                      component="span"
                      textAlign="center">
                          Example
                          <IconButton color="primary" 
                                      aria-label="add to shopping cart"
                                      sx={{ml: 15}}>
                                        <FavoriteBorderIcon />
                          </IconButton>
          </Typography>
        </CardContent>
    </Card>
  );
}

export default ItemImg