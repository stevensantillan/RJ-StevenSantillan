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
          sx={{ bgcolor: 'none' }}>

            <h1 style={{textAlign: "center", color: '#ffffff'}}>{titulo}</h1>  

          <Box 
            sx={{ bgcolor: '#000000cd', 
                  display: 'grid',
                  justifyItems: 'stretch', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gridTemplateRows: 'repeat(2, 1fr)',
                  gap:1
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