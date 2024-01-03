import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";

const PasswordInput = ({ label, onChange, value }) => {
  const StyledTextField = styled(TextField)({
    [`& .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
      border: "3px solid rgb(155, 152, 152)"
    },
    [`&:hover .${outlinedInputClasses.root} .${outlinedInputClasses.notchedOutline}`]: {
      borderColor: "white"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.notchedOutline}`]: {
      border: "3px solid #029cfd"
    },
    [`& .${outlinedInputClasses.input}`]: {
      color: "rgb(155, 152, 152)",
      zIndex: 1
    },
    [`&:hover .${outlinedInputClasses.input}`]: {
      color: "rgb(155, 152, 152)"
    },
    [`& .${outlinedInputClasses.root}.${outlinedInputClasses.focused} .${outlinedInputClasses.input}`]: {
      color: "rgb(155, 152, 152)"
    },
    [`& .${inputLabelClasses.outlined}`]: {
      color: "rgb(155, 152, 152)"
    },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
      color: "white"
    }
  });
  const pattern = /^.*(?=.{8,16})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\(\)]).*$/;

  const [password, setPassword] = useState('');
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value
  }

  return (
   
      <div className='password-container enabled'>
        <label className='password-label'>Password</label>
        <div>
        <StyledTextField
          // defaultValue="Password"
          variant="outlined"
          label="Password"
          type='password'
          className='password'
        />
        <ul className='pattern-rules'>
        <li className='pattern-rule'>Have at least one uppercase letter</li>
        <li className='pattern-rule'>Have at least one lowercase letter</li>
        <li className='pattern-rule'>Have at least one number</li>
        <li className='pattern-rule'>Have at least one special character</li>
        <li className='pattern-rule'>Longer than 8 characters</li>
      </ul>
      </div>
      </div>
      
    
  );
};

export default PasswordInput;
