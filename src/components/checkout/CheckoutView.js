import React from 'react';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { FormControl, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { grey } from '@mui/material/colors';

const primary = grey[100]; 

const CheckoutView = ( {values, formik, handleImputChange, handleSubmit} ) => {
  return (
    <Container maxWidth="false">
    <Box
        onSubmit={handleSubmit}
        component="form"
        sx={{ '& .MuiTextField-root': { m: 2, width: '25ch' }, mt: 2, bgcolor: primary, opacity: .9}}
        noValidate
        autoComplete="off">
        
        <div>
            <TextField
            required
            onChange={handleImputChange}
            value={values.nombre}
            name="nombre"
            label="Nombre"
            />

            <TextField
            required
            onChange={handleImputChange}
            value={values.apellido}
            name="apellido"
            label="Apellido"
            />
        </div>

        <div>
            <TextField
            required
            onChange={handleImputChange}
            value={values.email}
            type="email"
            name="email"
            label="E-mail"
            />
        </div>

        <div>
            <TextField
            required
            onChange={handleImputChange}
            value={values.direccion}
            name="direccion"
            label="Dirección"/>


            <TextField
            required
            onChange={handleImputChange}
            value={values.cp}
            name="codPostal"
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
                        required
                        onChange={handleImputChange}
                        value={values.metodoPago}
                        labelId="select-label"
                        name="metodoPago"
                        label="Método de Pago"
                        sx={{ml:2}}>

                            <MenuItem value={"efectivo"}>Efectivo</MenuItem>
                            <MenuItem value={"transferencia"}>Transferencia</MenuItem>
                            <MenuItem value={"credito"}>Tarjeta de Crédito</MenuItem>

                </Select>
            </FormControl>
        </div>
       
        {
            values.metodoPago === "credito"   
            ? 
            <div>
                <TextField
                required
                onChange={handleImputChange}
                value={values.numTarjeta}
                type= 'number'
                name='numTarjeta'
                label="Número de Tarjeta"/>
            </div>
            : null     
        }   
 
        
        <Button 
            variant="contained"
            type='submit' 
            color="success" 
            sx={{m: 2, height: "50px"}}>
    
            Finalizar Compra
  
        </Button>

        <Typography color="error" sx={{p: 4, fontSize: 16}}>
            {formik.errors.nombre && <div>{formik.errors.nombre}</div>}
            {formik.errors.apellido && <div>{formik.errors.apellido}</div>}
            {formik.errors.email && <div>{formik.errors.email}</div>}
            {formik.errors.direccion && <div>{formik.errors.direccion}</div>}
            {formik.errors.codPostal && <div>{formik.errors.codPostal}</div>}
            {formik.errors.metodoPago && <div>{formik.errors.metodoPago}</div>}
            {formik.errors.numTarjeta && <div>{formik.errors.numTarjeta}</div>}
        </Typography>

    </Box>

</Container>
  )
}

export default CheckoutView