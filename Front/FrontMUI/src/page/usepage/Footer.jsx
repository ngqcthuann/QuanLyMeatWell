// Footer.js
import React from 'react';
import { styled } from '@mui/system';
import { Container, Typography, Link, Grid, Table, TableBody, TableCell, TableContainer, TableFooter as MUITableFooter, TableRow, Paper } from '@mui/material';

const FooterContainer = styled('footer')({
  backgroundColor: 'lightgray',
  padding: '20px',
  marginTop: 'auto',
});

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Your Company Name
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Description of your company or website.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Links
            </Typography>
            <ul>
              <li>
                <Link href="#" color="textSecondary">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" color="textSecondary">
                  Products
                </Link>
              </li>
              <li>
                <Link href="#" color="textSecondary">
                  Contact
                </Link>
              </li>
            </ul>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table>
            <MUITableFooter>
              <TableRow>
                <TableCell colSpan={2}>
                  <Typography variant="body2" color="textSecondary" align="center">
                    © {new Date().getFullYear()} Your Company Name. All rights reserved.
                  </Typography>
                </TableCell>
              </TableRow>
            </MUITableFooter>
          </Table>
        </TableContainer>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
