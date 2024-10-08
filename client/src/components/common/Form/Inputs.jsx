import { FormControl, FormHelperText, Grid, Input, InputAdornment, styled, TextField } from "@mui/material";
import {Visibility, VisibilityOff} from '@mui/icons-material';
import { useForm } from "./FormContext";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";


const InputCustom = styled(Input)(({ theme, haserror }) => ({
  border: '1px solid',
  borderColor: haserror ? 'red' : 'rgba(0, 0, 0, 0.23)',
  borderRadius: '50px',
  padding: '10px 20px',
  '&:focus-within': {
    borderColor: haserror ? 'red' : theme.palette.primary.main,
  },
  '& .MuiInputBase-input': {
    textAlign: 'center', // Center align the placeholder and input text
  },
  '& .MuiInputAdornment-root': { //Icon
    cursor: 'pointer'
  }
}));

function Inputs() {
    
    // const theme = useTheme();
    const {formData, handleChange, errors, isRegister} = useForm()

    const [showPassword, setShowPassword] = useState(false)

    function togglePasswordVisibility() {
      setShowPassword(prevShowPassword => !prevShowPassword);
    }


    return ( 
        <>
            {isRegister && (
              <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" error={!!errors.email}>
                    <InputCustom
                      required
                      disableUnderline
                      fullWidth
                      id="firstName"
                      placeholder="Enter your first name"
                      name="firstName"
                      autoComplete="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                      haserror={!!errors.firstName ? 'true' : undefined}
                    />
                    {errors.firstName && <FormHelperText>{errors.firstName}</FormHelperText>}
                  </FormControl>
                </Grid>

                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth margin="normal" error={!!errors.lastName}>
                    <InputCustom
                      required
                      disableUnderline
                      fullWidth
                      id="lastName"
                      placeholder="Enter your last name"
                      name="lastName"
                      autoComplete="lname"
                      value={formData.lastName}
                      onChange={handleChange}
                      haserror={!!errors.lastName ? 'true' : undefined}
                    />
                    {errors.lastName && <FormHelperText>{errors.lastName}</FormHelperText>}
                  </FormControl>
                </Grid>
                
              </Grid>
            )}
            
            <FormControl fullWidth margin="normal" error={!!errors.email}>
              <InputCustom
                required
                disableUnderline
                fullWidth
                id="email"
                placeholder="Enter your email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                haserror={!!errors.firstName ? 'true' : undefined}
              />
              {errors.email && <FormHelperText>{errors.email}</FormHelperText>}
            </FormControl>

            <FormControl fullWidth margin="normal" error={!!errors.password}>
              <InputCustom
                type={!showPassword ? 'password' : 'text'}
                required
                disableUnderline
                fullWidth
                id="password"
                placeholder="Enter your password"
                name="password"
                autoComplete="password"
                endAdornment={
                  <InputAdornment position="end" onClick={togglePasswordVisibility}>
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </InputAdornment>}
                value={formData.password}
                onChange={handleChange}
                haserror={!!errors.password ? 'true' : undefined}
              />
              {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
            </FormControl>

            {isRegister && (
              <FormControl fullWidth margin="normal" error={!!errors.confirmPassword}>
              <InputCustom
                required
                type='password'
                disableUnderline
                fullWidth
                id="confirmPassword"
                placeholder="Confirm your password"
                name="confirmPassword"
                autoComplete="current-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                haserror={!!errors.confirmPassword ? 'true' : undefined}
              />
              {errors.confirmPassword && <FormHelperText>{errors.confirmPassword}</FormHelperText>}
            </FormControl>
            )} 
        </>
     );
}

export default Inputs;