import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import { Avatar, Button, Toolbar } from '@mui/material';

import avatar from './avatar.jpg';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <Toolbar sx={{ display: 'flex', columnGap: 2, fontSize: 18 }}>
      <Avatar alt={user.name} src={avatar} sx={{ width: 36, height: 36 }} />
      Welcome, {user.name}!
      <Button
        variant="text"
        color="inherit"
        type="button"
        sx={{ backgroundColor: 'skyblue' }}
        onClick={() => dispatch(logOut())}
      >
        Log Out
      </Button>
    </Toolbar>
  );
};
