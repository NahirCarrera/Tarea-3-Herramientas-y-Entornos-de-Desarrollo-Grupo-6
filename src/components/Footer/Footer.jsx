import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: 'black',
                color: 'white',
                textAlign: 'center'
            }}
        >
            <Container maxWidth="sm">
                <Typography variant="body1">
                    &copy; 2024 Your Company. All rights reserved.
                </Typography>
                <Box>
                    <IconButton href="https://www.facebook.com" target="_blank" sx={{ color: 'white' }}>
                        <FacebookIcon />
                    </IconButton>
                    <IconButton href="https://www.twitter.com" target="_blank" sx={{ color: 'white' }}>
                        <TwitterIcon />
                    </IconButton>
                    <IconButton href="https://www.instagram.com" target="_blank" sx={{ color: 'white' }}>
                        <InstagramIcon />
                    </IconButton>
                </Box>
            </Container>
        </Box>
    );
}
