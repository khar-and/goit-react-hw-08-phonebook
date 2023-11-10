import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import { Toolbar } from '@mui/material';
export const AuthNav = () => {
  return (
    <Toolbar className={css.toolbarStyle}>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Sign In</NavLink>
    </Toolbar>
  );
};
