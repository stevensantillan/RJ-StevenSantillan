import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Item from './Item';

const ItemList = ({titulo = "Catálogo", productos=[]}) => {
  return (
    <>
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="false">
        <Box 
          sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>

            <h1 style={{textAlign: "center"}}>{titulo}</h1>  

          <Box 
            sx={{ bgcolor: '#cfe8fc', 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gridTemplateRows: 'repeat(3, 1fr)',
                  gap:2
                }}
            >

            {productos.map((prod,index) => <Item producto={prod} key={index}/>)}
            
          </Box>

        </Box> 
      </Container> 
    </React.Fragment> 
    </>
  )
}

export default ItemList