import React from 'react'
import { useCartContext } from '../context/CartContext'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CartDelete = () => {

const { totalCart, deleteCart } = useCartContext()    

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));

  return (
    <>
    <TableContainer component={Paper}>    
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell sx={{fontSize: 23}}>El total es: ${totalCart()} </StyledTableCell>
                    <StyledTableCell align="right">
                        <Button 
                        onClick={deleteCart}
                        variant="contained" 
                        color="error" 
                        sx={{   ml: 5, 
                                height: 40 }}>
                                    Delete Cart
                        </Button>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                        <Button 
                            variant="contained" 
                            color="success" 
                            sx={{   ml: 5, 
                                    height: 40 }}>
                                        Go to Checkout
                        </Button>
                    </StyledTableCell>
                </TableRow>
            </TableHead>
        </Table>
    </TableContainer>
    </>
  )
}

export default CartDelete