import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';

export default function MultiActionAreaCard({ title, description, image, price, onClick }) {
    return (
        <Card onClick={onClick} sx={{ maxWidth: 345, backgroundColor: 'black', color: 'white' }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2"  color='white'>
                    {description}
                </Typography>
                <Typography variant="body2"  color='white'>
                    ${price}
                </Typography>
                <Button onClick={onClick} size="small" color="primary">
                    Comprar
                </Button>
            </CardContent>
        </Card>
    );
}
