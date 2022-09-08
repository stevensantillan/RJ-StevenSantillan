import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ItemCardPays from './ItemCardPays';
import Grid from '@mui/material/Grid';
import ItemImg from './ItemImg';
import ItemCount from '../ItemCount';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const ItemDetailUnit = ({producto}) => {
   
return (
    <>

    <Grid item xs={8}>
        <ItemImg img={producto.img}/>            
    </Grid>

    <Grid item xs={8}>
    <Card sx={{ width: "auto", 
                            height: 800, 
                            m:2 }}>
        <CardContent>
            <Typography color="text.secondary" sx={{ml: 2, fontSize: 10}}>
                Nuevo | 10 vendidos
            </Typography>
            <Typography 
                            gutterBottom 
                            variant="h4" 
                            component="div"
                            textAlign="center"
                            sx={{mt: 3}}>
                                {producto.nameProd}
            </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            textAlign="center"
                            sx={{mt:3, fontSize: 16}}>
                                {producto.detail}
                        <Typography variant="h2" component="div" color="text.primary" sx={{mt:4, ml:2, fontSize: 50}}>
                                ${producto.price}
                        </Typography>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{mt:4, ml:2, fontSize: 16}}>
                                {bull}Stock disponible: {producto.stock}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <ItemCount producto={producto}/>
                    </CardActions>
                    <Stack  spacing={1} sx={{mt:3, alignItems: "center"}}>
                            <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly/>
                    </Stack>
                    <ItemCardPays/>                        
    </Card>
    </Grid>
    </>
  )
}

export default ItemDetailUnit