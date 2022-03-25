import React from 'react';

const HeaderMenu = () => {
   return (
      <>
         {/* MENU MOBILE */}
         <Box sx={{ flexGrow: 1, flexShrink: 0, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
               size="large"
               aria-label="account of current user"
               aria-controls="menu-appbar"
               aria-haspopup="true"
               onClick={handleOpenNavMenu}
               color="inherit"
            >
               <MenuIcon />
            </IconButton>
            <Menu
               id="menu-appbar"
               anchorEl={anchorElNav}
               anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
               }}
               keepMounted
               transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
               }}
               open={Boolean(anchorElNav)}
               onClose={handleCloseNavMenu}
               sx={{
                  display: { xs: 'block', md: 'none' },
               }}
            >
               {NAV_LINKS.map((item) => (
                  <MenuItem key={item.name} onClick={handleCloseNavMenu}>
                     <Typography textAlign="center">{item.name}</Typography>
                  </MenuItem>
               ))}
            </Menu>
         </Box>
         {/* END MENU MOBILE */}
      </>
   );
};

export default HeaderMenu;