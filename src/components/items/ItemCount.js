import React, { useEffect } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useState } from 'react';

const ItemCount = ({producto}) => {

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

  )
}

export default ItemCount