import css from './Footer.module.css';
import { Box, Container, Link, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className={css.footer}>
      <Container maxWidth="sm">
        <Typography
          variant="body2"
          color="inherit"
          align="center"
          sx={{ mt: 2, mb: 2 }}
        >
          {'Phonebook'}
          <Link color="inherit" href="https://github.com/Nadija30">
            Nadiia Sukhorukova
          </Link>
          {'©'} {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
      {/* <p className={css.footerText}>
        &copy; {new Date().getFullYear()} Movie finder footer
      </p> */}
    </Box>
  );
};
export default Footer;
