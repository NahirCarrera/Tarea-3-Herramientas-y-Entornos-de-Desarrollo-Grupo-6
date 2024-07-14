import React from 'react';
import { Container, Grid, Typography, Button, Box, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import BannerImage from '../../banner.jpg'; // Asegúrate de tener una imagen en esta ruta

export default function HomePage() {
    const navigate = useNavigate();

    const handleCatalogClick = () => {
        navigate('/catalog');
    };

    const handleAboutClick = () => {
        navigate('/about');
    };

    const handleContactClick = () => {
        navigate('/contact');
    };

    return (
        <React.Fragment>
            <Header />
            
            {/* Banner */}
            <Box
                sx={{
                    backgroundImage: `url(${BannerImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    mb: 4,
                }}
            >
                <Typography variant="h3" sx={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)' }}>
                    Bienvenido a Home Passion
                </Typography>
            </Box>

            <Container component="main" sx={{ mb: 2 }}>
                <Typography variant="h5" gutterBottom>
                    En Home Passion, ofrecemos una selección de deliciosos postres elaborados con los mejores ingredientes.
                    Descubre nuestro catálogo y encuentra el postre perfecto para ti.
                </Typography>
                
                <Grid container spacing={4} sx={{ mt: 4 }}>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="h5" gutterBottom>
                                Sobre Nosotros
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Somos apasionados por la repostería y nos dedicamos a crear dulces irresistibles para todos los gustos.
                            </Typography>
                            <Button variant="contained" onClick={handleAboutClick} sx={{ mt: 2 }}>Leer más</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="h5" gutterBottom>
                                Catálogo
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Explora nuestra variedad de productos y elige tus favoritos. ¡Estamos seguros de que te encantarán!
                            </Typography>
                            <Button variant="contained" onClick={handleCatalogClick} sx={{ mt: 2 }}>Ver Catálogo</Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                            <Typography variant="h5" gutterBottom>
                                Contacto
                            </Typography>
                            <Typography variant="body1" paragraph>
                                Si tienes preguntas o comentarios, no dudes en contactarnos. Estamos aquí para ayudarte.
                            </Typography>
                            <Button variant="contained" onClick={handleContactClick} sx={{ mt: 2 }}>Contactar</Button>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
