// HomePage.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';

const featuredProducts = [
  {
    id: 1,
    name: 'Product 1',
    price: '$19.99',
    image: 'product1.jpg', // Replace with the actual image URL
    description: 'Description of Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '$29.99',
    image: 'product2.jpg', // Replace with the actual image URL
    description: 'Description of Product 2.',
  },
  // Add more featured products as needed
];

const HomePage = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h3" align="center" gutterBottom>
          Featured Products
        </Typography>
        <Grid container spacing={3}>
          {featuredProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <Card>
                <CardMedia
                  component="img"
                  alt={product.name}
                  height="140"
                  image={product.image}
                />
                <CardContent>
                  <Typography variant="h6" component="div">
                    {product.name}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {product.price}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default HomePage;
