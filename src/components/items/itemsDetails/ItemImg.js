import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function ItemImg() {
  return (
    <Card sx={{ maxWidth: "auto", height: "800" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="730"
          image="/static/images/cards/contemplative-reptile.jpg"
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
