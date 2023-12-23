import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { inputLabelClasses } from "@mui/material/InputLabel";
import { styled } from "@mui/material/styles";
import zIndex from '@mui/material/styles/zIndex';

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
    // [`&:hover .${inputLabelClasses.outlined}`]: {
    //   color: "rgb(155, 152, 152)"
    // },
    [`& .${inputLabelClasses.outlined}.${inputLabelClasses.focused}`]: {
      color: "rgb(155, 152, 152)"
    }
  });
  // const [isHovered, setIsHovered] = useState(false);
  // const [isActive, setIsActive] = useState(false);

  return (
    <StyledTextField
      defaultValue="Password"
      variant="outlined"
      label="Password"
      className='password'
    />
  );
};

export default PasswordInput;
