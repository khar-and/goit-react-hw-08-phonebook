import css from './EmptyContactList.module.css';
import { Box, Typography } from '@mui/material';
export const EmptyContactsList = () => {
  return (
    <Box className={css.boxStyle}>
      <Typography component="h1" variant="h5">
        You don't have any contacts yet
      </Typography>
    </Box>
  );
};
