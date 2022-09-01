import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import Grid from '@mui/material/Grid';
import ItemImg from './ItemImg';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import ItemCardPays from './ItemCardPays';


const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );

const ItemDetail = ({stock = "6"}) => {

    const [initial, setInitial ] = useState(1)
    const [AddToCart, setAddCart] = useState(true)


    const handleOnAdd = () => {
        if(initial < stock){
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
    <Box sx={{ flexGrow: 1 }}>
        <Grid container direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={1}
            columns={16}>
                 
            <Grid item xs={8}>
                <ItemImg/>
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
                                Producto de Ejemplo
                        </Typography>
                        <Typography 
                            variant="body2" 
                            color="text.secondary"
                            textAlign="center"
                            sx={{mt:3, fontSize: 23}}>
                                Card example, pronto estará nuestro producto en esta sección de detalle.
                        <Typography variant="h2" component="div" color="text.primary" sx={{mt:4, ml:2, fontSize: 50}}>
                                $456
                        </Typography>
                        </Typography>
                        <Typography variant="h6" component="div" sx={{mt:4, ml:2, fontSize: 16}}>
                                {bull}Stock disponible: {stock}
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
                            <Box 
                                border={1} 
                                sx={{   width: '10%', 
                                        height: 40, 
                                        borderColor: 'secondary.main', 
                                        color: 'secondary.main'}} 
                                style={{textAlign: "center"}}>
                                    <Typography sx={{alignItems: "center"}}>
                                        {initial}
                                    </Typography>
                                    
                            </Box>
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
                                sx={{   ml: 1, 
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
        </Grid>
    </Box>              
    </>
  )
}

export default ItemDetail