import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import MultiActionAreaCard from '../Card/Card';
import { Container, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Catalog() {
    const navigate = useNavigate();
    const products = [
        {
            id: 1,
            title: "Cheesecake",
            description: "Cremoso, con un dulce sabor a queso y galleta de elaboración propia",
            image: "src/cheesecake.jpg",
            price: "3.25"
        },
        {
            id: 2,
            title: "Tarta de Manzana",
            description: "Tarta de fruta elaborada con una masa recubierta de manzana",
            image: "src/tarta.jpg",
            price: "3.50"
        },
        {
            id: 3,
            title: "Pastel de Chocolate",
            description: "Bizcocho húmedo de chocolate, relleno de una sedosa crema de chocolate de leche",
            image: "src/pastel.jpg",
            price: "2.50"
        }
    ];

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    return (
        <React.Fragment>
            <Header />
            <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {products.map(product => (
                        <Grid item xs={12} sm={6} md={4} key={product.id}>
                            <MultiActionAreaCard
                                title={product.title}
                                description={product.description}
                                image={product.image}
                                price={product.price}
                                onClick={() => handleProductClick(product.id)}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
