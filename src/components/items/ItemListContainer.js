import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import ItemCount from './ItemCount';

const ItemListContainer = ({titulo = "Este será nuestro futuro catálogo"}) => {
  
  const fakeProd = {
    id: 1,
    price: 300,
    nameProd: "Example",
    detail: "lorem",
    stock: 6
  }

  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Box 
          sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

            <h1 style={{textAlign: "center"}}>{titulo}</h1>  

          <Box 
            sx={{ bgcolor: '#cfe8fc', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gridTemplateRows: 'repeat(3, 1fr)'}}>
            
            <ItemCount stock={6}/>
          
          </Box> 
        </Box> 
      </Container> 
    </React.Fragment>
    
    
    </>
  )
}

export default ItemListContainer