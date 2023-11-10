import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { register } from 'redux/auth/authThunk';
import {
  avatarStyle,
  boxBottomFStyle,
  boxFormStyle,
} from '../../pages/StylePages';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  Container,
  Typography,
  CssBaseline,
  TextField,
  Box,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;

      default:
        break;
    }
  };
  const handleSubmitUser = e => {
    e.preventDefault();
    const newUser = { name, email, password };
    console.log('newUser', newUser);
    dispatch(register(newUser))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(`${originalPromiseResult.newUser.name} welcome!`);
      })
      .catch(() => {
        toast.failure("Sorry, something's wrong");
      });
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box sx={boxFormStyle}>
        <Avatar sx={avatarStyle}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Box component="form" onSubmit={handleSubmitUser} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            helperText="The name must contain only letters, apostrophes, hyphens and indents."
            autoComplete="name"
            name="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            required
            fullWidth
            label="Name"
            onChange={handleChangeInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            helperText="Please enter a valid email address"
            fullWidth
            id="email"
            label="Email"
            type="email"
            name="email"
            pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
            value={email}
            autoComplete="email"
            onChange={handleChangeInput}
          />
          <TextField
            margin="normal"
            required
            helperText="The password must contain at least 7 characters"
            fullWidth
            type="password"
            name="password"
            value={password}
            label="Password"
            pattern="^[a-zA-Z0-9!@#$%^&*()-_=+`~[\]{}|:<>/?]+$"
            id="password"
            autoComplete="new-password"
            onChange={handleChangeInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Box sx={boxBottomFStyle}>
            <NavLink to="/login">Already have an account? Sign in</NavLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default RegisterForm;
