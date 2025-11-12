import { AppBar, Toolbar, IconButton, Typography, Button, Box, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react';

const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const menuItems = [
        { text: 'Mens', path: '/girls' },
        { text: 'Womens', path: '/boys' },
        { text: 'Kids', path: '/kids' },
    ];

    return (
        <Box sx={{ display: 'flex', minHeight: '100vh', position: 'relative', }}>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
                sx={{
                    width: 250,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: 250,
                        boxSizing: 'border-box',
                        // backgroundColor: '#2C4E80',   // 🔴 whole drawer background
                        color: '#000000',
                        fontFamily:'popins-semibold !important',
                        fontSize:'14px',
                        fontWeight:'bold'           // optional: makes text visible
                    },
                }}
            >
                <Box
                    sx={{ width: 250 }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        {menuItems.map((item) => (
                            <ListItem button key={item.text}>
                                <ListItemText primary={item.text} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box
                sx={{
                    width: '100%',
                    transition: 'margin-left 0.3s ease, width 0.3s ease',
                    marginLeft: drawerOpen ? '150px' : 0,
                    ...(drawerOpen && { width: 'calc(100% - 250px)' }),
                }}
            >
                <AppBar position="fixed" sx={{ backgroundColor: '#2C4E80', zIndex: 1200 }}>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            backgroundColor="black"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold', color: '#ffff', fontFamily: "poppins-semibold !important" }}>
                            RMR THRIFT COMMUNITY
                        </Typography>
                        <Button sx={{ color: "#ffff", fontFamily: "poppins-semibold !important", fontWeight: 'bold' }}>Login</Button>
                    </Toolbar>
                </AppBar>
                <Box sx={{ paddingTop: '64px', minHeight: 'calc(100vh - 64px)' }}>
                    {children}
                </Box>
            </Box>
        </Box>
    );
};

export default Layout;