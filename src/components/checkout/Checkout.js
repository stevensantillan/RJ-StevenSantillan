import React, {useState} from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl } from '@mui/material';

const primary = grey[100]; 

const Checkout = () => {

    const [pago, setPago] = useState('');

    const handleChange = (event) => {
        setPago(event.target.value);
        console.log(event.target.value);
    };

  return (
    <>
    <Container maxWidth="false">
        <Box
            component="form"
            sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, mt: 2, bgcolor: primary, opacity: .9}}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                required
                id="outlined-required0"
                label="Nombre"
                defaultValue=""
                />

                <TextField
                required
                id="outlined-required1"
                label="Apellido"
                defaultValue=""
                />

                <TextField
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                />
            </div>

            <div>
                <TextField
                required
                id="outlined-required2"
                label="E-mail"
                defaultValue=""
                />
            </div>

            <div>
                <TextField
                required
                id="outlined-required3"
                label="Dirección"
                defaultValue=""
                />

                <TextField
                id="standard-number"
                label="Código Postal"
                type="number"
                InputLabelProps={{
                    shrink: true,}}
                />
            </div>

            <div>
                
                <FormControl sx={{width: 300, mt: 2, mb: 2}}>
                    <InputLabel id="select-label" sx={{ml: 2}}> Método de Pago </InputLabel>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={pago}
                            label="Método de Pago"
                            onChange={handleChange} 
                            sx={{ml:2}}>

                                <MenuItem value={"efectivo"}>Efectivo</MenuItem>
                                <MenuItem value={"transferencia"}>Transferencia</MenuItem>
                                <MenuItem value={"credito"}>Tarjeta de Crédito</MenuItem>

                    </Select>
                </FormControl>

            </div>
           
            {
                pago === "credito"   
                ? 
                <div>
                    <TextField
                    required
                    id="numCredito"
                    label="NÚmero de Tarjeta"
                    defaultValue=""/>
                </div>
                : <h1>error</h1> 
            }    
            
            <Button variant="contained" 
                    color="success" 
                    sx={{m: 2, height: "50px"}}>
        
                Finalizar Compra
      
            </Button>

        </Box>
    </Container>
    </>
  )
}

export default Checkout