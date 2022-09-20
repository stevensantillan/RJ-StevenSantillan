import React from 'react'
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Table from '@mui/material/Table';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
  }));


const EmptyCart = () => {
  return (
    <>

    <TableContainer component={Paper} sx={{ mt:2 }}>    
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
                <TableRow>
                    <StyledTableCell sx={{fontSize: 23}}> El carrito está vacio. </StyledTableCell>
                    <StyledTableCell align="right">
                        <Box>
                            <Link to="/">
                                <Typography 
                                    variant="h3" 
                                    component="span" 
                                    sx={{ fontSize: 20, color: "error"}}>
    
                                            Volver a Comprar
              
                                </Typography>
                            </Link>
                        </Box>
                            
                    </StyledTableCell>
                </TableRow>
            </TableHead>
        </Table>
    </TableContainer>
                        
    </>
  )
}

export default EmptyCart