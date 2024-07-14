import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Typography, Button, Grid, Box } from '@mui/material';
// Datos de los productos
const products = [
    {
        id: 1,
        title: "Cheesecake",
        description: "Cremoso, con un dulce sabor a queso y galleta de elaboración propia",
        image: "./cheesecake.jpg",
        image2: "../../cheesecake.jpg",
        price: "3.25",
        ingredients: "Queso, galleta, azúcar, crema",
        nutritionalInfo: "250 kcal por porción"
    },
    {
        id: 2,
        title: "Tarta de Manzana",
        description: "Tarta de fruta elaborada con una masa recubierta de manzana",
        image: "../../tarta.jpg",
        image2: "../../tarta.jpg",
        price: "3.50",
        ingredients: "Manzana, harina, azúcar, canela",
        nutritionalInfo: "300 kcal por porción"
    },
    {
        id: 3,
        title: "Pastel de Chocolate",
        description: "Bizcocho húmedo de chocolate, relleno de una sedosa crema de chocolate de leche",
        image: "../../pastel.jpg",
        image2: "../../pastel.jpg",
        price: "2.50",
        ingredients: "Chocolate, harina, azúcar, mantequilla",
        nutritionalInfo: "350 kcal por porción"
    }
];

export default function ProductDetailPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    // Encuentra el producto por su ID
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return (
            <React.Fragment>
                <Header />
                <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
                    <Typography variant="h4" gutterBottom>
                        Producto no encontrado
                    </Typography>
                    <Button variant="contained" color="primary" onClick={() => navigate('/')}>
                        Volver a los productos
                    </Button>
                </Container>
                <Footer />
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Header />
            <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                    {product.title}
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '8px' }} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img src={product.image2} alt={`${product.title} 2`} style={{ width: '100%', borderRadius: '8px' }} />
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body1" gutterBottom>
                            {product.description}
                        </Typography>
                        <Typography variant="h6" gutterBottom>
                            Precio: ${product.price}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Ingredientes: {product.ingredients}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            Información Nutricional: {product.nutritionalInfo}
                        </Typography>
                    </Grid>
                </Grid>
                <Box sx={{ mt: 4, textAlign: 'center' }}>
                    <Button variant="contained" color="primary" onClick={() => navigate('/catalog')}>
                        Volver a los productos
                    </Button>
                </Box>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
