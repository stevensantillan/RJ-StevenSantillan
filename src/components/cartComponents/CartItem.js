import React from 'react'
import { useCartContext } from '../context/CartContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';


const CartItem = () => {

const { cart, removeItem } = useCartContext() 

const row = cart
  ;

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre del Producto</TableCell>
            <TableCell align="right">Precio</TableCell>
            <TableCell align="right">Cantidad</TableCell>
            <TableCell align="right">Eliminar Item</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {row.map((producto, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              {producto.nombre}
              </TableCell>
              <TableCell align="right">${producto.precio}</TableCell>
              <TableCell align="right">{producto.cantidad}</TableCell>
              <TableCell align="right">
                <IconButton 
                    onClick={() => removeItem(producto.id)}
                    variant="contained" 
                    color="error" 
                    sx={{   ml: 5, 
                            height: 25 }}>
                        <DeleteIcon sx={{fontSize: 30}}/>
                </IconButton>
              </TableCell>
            </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  )
}

export default CartItem