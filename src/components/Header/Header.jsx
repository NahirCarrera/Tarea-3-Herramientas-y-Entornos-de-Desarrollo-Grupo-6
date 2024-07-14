import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const [openDrawer, setOpenDrawer] = useState(false);
    const navigate = useNavigate();

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setOpenDrawer(open);
    };

    const handleNavigation = (path) => {
        navigate(path);
        setOpenDrawer(false);
    };

    return (
        <React.Fragment>
            <AppBar position="static" sx={{ backgroundColor: 'black' }}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer(true)}
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" sx={{ flexGrow: 1, color: 'white' }}>
                        Home Passion
                    </Typography>
                    <Button color="inherit" onClick={() => handleNavigation('/')}>Home</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/about')}>About</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/catalog')}>Catalog</Button>
                    <Button color="inherit" onClick={() => handleNavigation('/contact')}>Contact</Button>
                </Toolbar>
            </AppBar>
            <Drawer
                anchor="left"
                open={openDrawer}
                onClose={toggleDrawer(false)}
            >
                <List sx={{ width: 250 }}>
                    <ListItem button onClick={() => handleNavigation('/')}>
                        <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('/about')}>
                        <ListItemText primary="About" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('/catalog')}>
                        <ListItemText primary="Catalog" />
                    </ListItem>
                    <ListItem button onClick={() => handleNavigation('/contact')}>
                        <ListItemText primary="Contact" />
                    </ListItem>
                </List>
            </Drawer>
        </React.Fragment>
    );
}
