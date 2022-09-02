import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ItemCardPays from './ItemCardPays';
import Grid from '@mui/material/Grid';
import ItemImg from './ItemImg';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const ItemDetailUnit = ({producto}) => {
  
    const [initial, setInitial ] = useState(1)
    const [AddToCart, setAddCart] = useState(true)


    const handleOnAdd = () => {
        if(initial < producto.stock){
            setInitial( initial + 1 )
        }
      
    }
  
    const handleOnDecrement = () => {
        if(initial > 1){
            setInitial( initial - 1 )
        }
    }

    const handleAddToCart = () => {
        setAddCart(!AddToCart)
    }

    useEffect (
        () => {
            console.log('Se han añadido ' + initial + ' al carrito')
        }, [AddToCart]
    )
  
  
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
                            sx={{mt:3, fontSize: 23}}>
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
                        <Box 
                        display="flex" 
                        justifyContent="center" 
                        sx={{ width: '100%'}}>
                            <Button 
                                onClick={handleOnDecrement} 
                                variant="outlined" 
                                color="secondary" 
                                sx={{mr: 1, height: 40}}>
                                        -
                            </Button>  
                            <Button 
                                variant="outlined" 
                                color="secondary" 
                                sx={{   ml: 1,
                                        mr: 1, 
                                        height: 40 }}>
                                        {initial}
                            </Button>
                            <Button 
                                onClick={handleOnAdd} 
                                variant="outlined" 
                                color="secondary" 
                                sx={{   ml: 1, 
                                        height: 40 }}>
                                        +
                            </Button>
                            <Button 
                                onClick={handleAddToCart}
                                variant="contained" 
                                color="success" 
                                sx={{   ml: 5, 
                                        height: 40 }}>
                                            Add to Cart
                            </Button>
                        </Box>
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