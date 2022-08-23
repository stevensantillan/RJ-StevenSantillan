import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const ItemListContainer = ({titulo = "Este será nuestro futuro catálogo"}) => {
  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
            <h1 style={{textAlign: "center"}}>{titulo}</h1>    
        </Box> 
        <Box/>
      </Container>
    </React.Fragment>
    
    </>
  )
}

export default ItemListContainer