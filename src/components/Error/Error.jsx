import { useSelector } from 'react-redux';
import { selectError } from 'redux/contacts/contactsSelectors';
import { Box, Typography } from '@mui/material';
import css from './Error.molule.css';

export const Error = () => {
  const error = useSelector(selectError);

  return (
    <Box className={css.wrapperError}>
      <Typography color="white" component="h2" variant="h5">
        We're sorry, {error}
      </Typography>
    </Box>
  );
};
