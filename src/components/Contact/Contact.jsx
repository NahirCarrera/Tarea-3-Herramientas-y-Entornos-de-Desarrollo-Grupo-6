import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Container, Typography, Paper, TextField, Button, Box } from '@mui/material';

export default function Contact() {
    return (
        <React.Fragment>
            <Header />
            <Container component="main" sx={{ mt: 8, mb: 2, flexGrow: 1 }}>
                <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
                    <Typography variant="h4" gutterBottom align="center" color="primary">
                        Contacto
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Si tienes preguntas, comentarios o deseas más información sobre nuestros productos, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
                    </Typography>
                    
                    <Box component="form" sx={{ mt: 3 }} noValidate autoComplete="off">
                        <TextField
                            required
                            fullWidth
                            label="Nombre"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Correo Electrónico"
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <TextField
                            required
                            fullWidth
                            label="Mensaje"
                            variant="outlined"
                            multiline
                            rows={4}
                            sx={{ mb: 2 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                        >
                            Enviar
                        </Button>
                    </Box>
                    
                    <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                        Otras Formas de Contactarnos
                    </Typography>
                    <Typography variant="body1" paragraph>
                        - Teléfono: (123) 456-7890
                    </Typography>
                    <Typography variant="body1" paragraph>
                        - Email: contacto@homepassion.com
                    </Typography>
                    <Typography variant="body1" paragraph>
                        - Dirección: Calle de la Repostería, 123, Ciudad
                    </Typography>
                </Paper>
            </Container>
            <Footer />
        </React.Fragment>
    );
}
