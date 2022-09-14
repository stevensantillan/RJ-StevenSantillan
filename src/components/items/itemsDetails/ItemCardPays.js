import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import StoreIcon from '@mui/icons-material/Store';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';

const ItemCardPays = () => {
  return (
    <Card sx={{ maxWidth: "auto", height: "auto", m:1 }}>
        <CardContent>
            <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                Formas de pago
            </Typography>
            <Typography sx={{ mt: 2, mb: 2, pl:2}}>
                <CreditCardIcon sx={{ ml: 2, mr:2}}/>
                <AccountBalanceIcon sx={{ ml: 2, mr:2}}/>
                <MonetizationOnIcon sx={{ ml: 2, mr:2}}/>
            </Typography>
            <Typography sx={{ fontSize: 13 }} color="text.secondary" gutterBottom>
                Envios 
            </Typography>
            <Typography sx={{ mt:2, mb:2, pl:2 }}>
                <StoreIcon sx={{ ml: 2, mr:2}}/>
                <LocalShippingIcon sx={{ ml: 2, mr:2}}/>
                <MapsHomeWorkIcon sx={{ ml: 2, mr:2}}/>
            </Typography>
        </CardContent>
    </Card> 
  )
}

export default ItemCardPays