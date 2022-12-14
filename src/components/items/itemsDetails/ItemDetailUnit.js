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
import { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import "../../header/navbar.scss"

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );


const ItemDetailUnit = ({producto}) => {

  const {cart, addToCart, isInCart} = useCartContext()
  console.log(cart)

  const [cantidad, setCantidad ] = useState(1)

  const handleAddToCart = () => {
    const itemToCart = {
      id: producto.id,
      nombre: producto.nameProd,
      precio: producto.price,
      cantidad: cantidad
    }

    addToCart(itemToCart)
  }

return (
    <>

    <Grid item xs={8}>
        <ItemImg img={producto.img} producto={producto.nameProd}/>            
    </Grid>

    <Grid item xs={8}>
    <Card sx={{ width: "auto", 
                height: 800, 
                m:2 }}>
      <CardContent>
        
        <Typography color="text.secondary" sx={{ml: 2, fontSize: 15}}>
                Nuevo
        </Typography>

        <Typography 
          gutterBottom 
          variant="h2" 
          component="div"
          textAlign="center"
          sx={{mt: 3}}>

              {producto.nameProd}

        </Typography>

          <Typography 
            component="div" 
            color="text.secondary"
            textAlign="center"
            sx={{mt:3, fontSize: 16}}>

                {producto.detail}
          
          </Typography>

          <Typography 
            component="div" 
            color="text.primary" 
            sx={{mt:3, ml:2, fontSize: 50, textAlign: "center"}}>

                ${producto.price}

          </Typography>

        
        {
          producto.stock === 0 
          ? 
          <Typography 
          component="div"
          color= "#d32f2f" 
          sx={{mt:3, ml:2, fontSize: 16}}>

                {bull}No hay stock disponible.

        </Typography>
        :
        <Typography 
          component="div" 
          sx={{mt:3, ml:2, fontSize: 16}}>

                {bull}Stock disponible: {producto.stock}

        </Typography> 
        }
        

      </CardContent>

        <CardActions>


            {
              producto.stock !== 0
              ?
                isInCart(producto.id) 
                ?  
                <Box 
                  display="flex"
                  flexDirection= "column" 
                  justifyContent="center" 
                  sx={{ width: '100%'}}>
  
                    <Typography 
                      variant="h6" 
                      component="span" 
                      sx={{ mt:2, 
                            ml:2, 
                            fontSize: 16}}>
      
                        {bull}El producto ya se encuentra en el carrito.
                
                    </Typography>
                
                    <Link to={"/cart"} className="links">
                      <Button 
                        variant="contained" 
                        color="success" 
                        sx={{ ml: 5,
                              mt: 2, 
                              height: 40 }}>
                              
                                Terminar mi Compra
                
                      </Button>
                    </Link>
                    
  
                </Box>
                
                :
  
                <ItemCount 
                  max={producto.stock}
                  initial={cantidad}
                  setInitial={setCantidad}
                  handleAddToCart= {handleAddToCart}/>
              :
              ""
            }
            

        </CardActions>

        <Stack  
          spacing={1} 
          sx={{mt:3, alignItems: "center"}}>

            <Rating 
              name="half-rating-read" 
              defaultValue={3.5} 
              precision={0.5} 
              readOnly/>
        </Stack>

        <ItemCardPays/>       

    </Card>
    </Grid>
    </>
  )
}

export default ItemDetailUnit