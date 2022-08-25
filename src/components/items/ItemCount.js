import React from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const ItemCount = () => {

    let counter = 1

  return (
    
    <Card sx={{ width: "auto", m:2 }}>
    <CardMedia
    component="img"
    alt="example"
    height="140"
    image="#"
    />
    <CardContent>
    <Typography gutterBottom variant="h5" component="div">
        Producto de Ejemplo
    </Typography>
    <Typography variant="body2" color="text.secondary">
        Card example, pronto estará nuestro producto en esta sección de detalle.
    </Typography>
    </CardContent>
    <CardActions>
    <Box display="flex" justifyContent="center" sx={{ width: '100%'}}>
        <Button variant="outlined" color="secondary" sx={{mr: 1, height: 30}}>-</Button>  
        <Box border={1} sx={{ width: '10%', height: 30, borderColor: 'secondary.main', pt:'1%', color: 'secondary.main'}} style={{textAlign: "center"}}>
            <span>{counter}</span> 
        </Box>
        <Button variant="outlined" color="secondary" sx={{ml: 1, height: 30 }}>+</Button>
        <Button variant="contained" color="success" sx={{ml: 1, height: 30 }}>Add to cart</Button>
    </Box>
    </CardActions>
    </Card>

  )
}

export default ItemCount