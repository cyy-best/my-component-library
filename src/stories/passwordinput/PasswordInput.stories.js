// src/passwordinput/PasswordInput.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import PasswordInput from './PasswordInput';
import '../global.css'
import './passwordInput.css'

export default {
  title: 'PasswordInput',
  component: PasswordInput,
};

export const Main = () => (
  <>
  <div className='password-container enabled'>
    <label className='password-label'>Password</label>
    <PasswordInput  label="Password"  onChange={action('onChange')} value="" />
    </div>
  </>
);

