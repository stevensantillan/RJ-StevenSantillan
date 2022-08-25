import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

const ItemCount = ({stock}) => {

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

    <Card sx={{ width: "auto", m:2 }}>
    <CardMedia
        component="img"
        alt="example"
        height="140"
        image="#"
    />
    <CardContent>
    <Typography 
        gutterBottom variant="h5" 
        component="div">
            Producto de Ejemplo
    </Typography>
    <Typography 
        variant="body2" 
        color="text.secondary">
        Card example, pronto estará nuestro producto en esta sección de detalle.
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
                sx={{mr: 1, height: 30}}>-</Button>  
            <Box 
                border={1} 
                sx={{ width: '10%', height: 30, borderColor: 'secondary.main', pt:'1%', color: 'secondary.main'}} 
                style={{textAlign: "center"}}>
                    <span>{initial}</span> 
            </Box>
        <Button 
            onClick={handleOnAdd} 
            variant="outlined" 
            color="secondary" 
            sx={{ml: 1, height: 30 }}>+</Button>
        <Button 
            onClick={handleAddToCart}
            variant="contained" 
            color="success" 
            sx={{ml: 1, height: 30 }}>Add to Cart</Button>
    </Box>
    </CardActions>
    </Card>

  )
}

export default ItemCount