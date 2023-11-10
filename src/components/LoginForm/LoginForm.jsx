import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Box,
  Container,
  Typography,
} from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { avatarStyle, boxFormStyle } from '../../pages/StylePages';
import { toast } from 'react-toastify';
import { logIn } from 'redux/auth/authThunk';

const { useState } = require('react');
const { useDispatch } = require('react-redux');
const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChangeInput = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
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

  const hendleSubmitLogin = event => {
    event.preventDefault();
    const loginUser = { email, password };
    console.log('logInUser', loginUser);
    dispatch(logIn(loginUser))
      .unwrap()
      .then(originalPromiseResult => {
        toast.success(`${originalPromiseResult.loginUser.name} welcome back!`);
      })
      .catch(() => {
        toast.failure('Incorrect login or password');
      });

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
          Sign in
        </Typography>
        <Box component="form" onSubmit={hendleSubmitLogin} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            value={email}
            type="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            onChange={handleChangeInput}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={handleChangeInput}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LoginForm;
