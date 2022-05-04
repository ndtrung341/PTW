import React from 'react';
import { Box, Link } from '@mui/material';
import { getPathPublic } from 'utils';

const HeaderLogo = () => {
   return (
      <>
         <Link
            component={'a'}
            href='/'
            sx={{
               display: 'flex',
               alignItems: 'center',
               flexGrow: { md: 0, xs: 1 },
               order: { md: 0, xs: 1 },
               mr: 2,
               height: '100%',
            }}
         >
            <Box height='100%'>
               <img
                  src='/images/logo.png'
                  alt=''
                  width={200}
                  style={{ objectFit: 'contain', height: '100%' }}
               />
            </Box>
         </Link>
      </>
   );
};

export default HeaderLogo;
