import { AuthNav } from 'components/Navigation/AuthNavigation';
import { AppBar, Toolbar } from '@mui/material';
import { Navigation } from 'components/Navigation/Navifation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';

export const MyAppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar>
      <Toolbar
        sx={{ display: 'flex', fontSize: 18, justifyContent: 'space-between' }}
      >
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Toolbar>
    </AppBar>
  );
};
