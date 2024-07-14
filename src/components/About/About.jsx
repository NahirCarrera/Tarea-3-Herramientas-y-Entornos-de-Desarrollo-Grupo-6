import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Typography, Box, Paper } from '@mui/material';

export default function About() {
    return (
        <React.Fragment>
            <Header />
            <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h4" gutterBottom align="center" color="primary">
                        Sobre Nosotros
                    </Typography>
                    <Typography variant="body1" paragraph>
                        En <strong>Home Passion</strong>, nos dedicamos a crear productos de origen natural y generalmente dulce, elaborados con los mejores ingredientes. Nuestra pasión por la repostería nos impulsa a ofrecer sabores auténticos y frescos en cada bocado.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Nuestra Misión
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Proporcionar a nuestros clientes una experiencia única a través de productos deliciosos y saludables que no solo satisfacen el paladar, sino que también promueven un estilo de vida equilibrado.
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        Nuestros Valores
                    </Typography>
                    <Box sx={{ mb: 2, pl: 2 }}>
                        <Typography variant="body1" paragraph>
                            • <strong>Calidad</strong>: Seleccionamos cuidadosamente los ingredientes para asegurar la frescura y el sabor en todos nuestros productos.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • <strong>Sostenibilidad</strong>: Nos comprometemos a utilizar prácticas que respeten el medio ambiente y apoyen a los productores locales.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • <strong>Innovación</strong>: Buscamos constantemente nuevas recetas y combinaciones de sabores para sorprender a nuestros clientes.
                        </Typography>
                    </Box>
                    <Typography variant="h5" gutterBottom>
                        ¿Por qué Elegirnos?
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Al elegir <strong>Home Passion</strong>, no solo estás disfrutando de un producto delicioso, sino que también estás apoyando una filosofía que valora la salud y el bienestar. Nuestros postres están diseñados para deleitar tus sentidos, sin comprometer la calidad.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Gracias por ser parte de nuestra comunidad. ¡Esperamos que disfrutes de cada bocado tanto como nosotros disfrutamos creándolos!
                    </Typography>
                </Paper>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
