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
import { useCartContext } from '../context/CartContext'
import { Navigate } from 'react-router-dom';

const primary = grey[100]; 

const Checkout = () => {

    const { cart, totalCart  } = useCartContext()

    const [values, setValues] = useState({
        nombre: "",
        apellido: "",
        email: "",
        direccion: "",
        codPostal: "",
        metodoPago: "",
        numTarjeta: ""
    })

    const handleImputChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const orden = {
            comprador: values,
            items: cart,
            total: totalCart()
        }

        console.log(orden)
    }

    if (cart.length === 0){
        return <Navigate to={"/"}/>
    }

  return (
    <>
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
                    name='numTarjeta'
                    label="NÚmero de Tarjeta"/>
                </div>
                : ""
            }    
            
            <Button 
                variant="contained"
                type='submit' 
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