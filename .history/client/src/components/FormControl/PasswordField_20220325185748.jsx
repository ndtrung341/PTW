import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { IconButton, InputAdornment, OutlinedInput, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const PasswordField = ({ field, fieldState, placeholder, label }) => {
   // fieldRest contain onChange, onBlur, ref
   const { value, name, ...fieldRest } = { ...field };
   const { invalid, error } = fieldState;
   const [showPassword, setShowPassword] = useState(false);

   const handleClickShowPassword = () => {
      setShowPassword(!showPassword);
   };

   return (
      <OutlinedInput
         margin='normal'
         fullWidth
         size='small'
         type={showPassword ? 'text' : 'password'}
         value={value}
         name={name}
         {...fieldRest}
         endAdornment={
            <InputAdornment position='end'>
               <IconButton aria-label='toggle password visibility' onClick={handleClickShowPassword} edge='end'>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
               </IconButton>
            </InputAdornment>
         }
         label={label}
         placeholder={placeholder}
         error={invalid}
         helperText={error?.message}
      />
   );
};

PasswordField.defaultProps = {
   placeholder: '',
   label: '',
};

PasswordField.propTypes = {
   field: PropTypes.object.isRequired,
   fieldState: PropTypes.object.isRequired,
   placeholder: PropTypes.string,
   label: PropTypes.string,
};

export default PasswordField;