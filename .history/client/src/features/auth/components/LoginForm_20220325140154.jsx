import { Box, Button, TextField, Typography } from '@mui/material';
import CheckboxField from 'components/FormControl/CheckboxField';
import InputField from 'components/FormControl/InputField';
import React from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
   return (
      <Box component='form'>
         <InputField />
         <InputField />
         <Box>
            <CheckboxField />
            <Link>
               <Typography></Typography>
            </Link>
         </Box>
         <Button variant='contained' fullWidth>
            Đăng nhập
         </Button>
      </Box>
   );
};

export default LoginForm;