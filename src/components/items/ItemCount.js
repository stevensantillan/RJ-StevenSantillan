import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

const ItemCount = ({max, initial, setInitial, handleAddToCart}) => {

    const handleOnAdd = () => {
        if(initial < max){
            setInitial( initial + 1 )
        }
      
    }
  
    const handleOnDecrement = () => {
        if(initial > 1){
            setInitial( initial - 1 )
        }
    }

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
                        Añadir al carrito
        </Button>
        

    </Box>

  )
}

export default ItemCount