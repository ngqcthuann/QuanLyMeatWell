// ContentSection.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia } from '@mui/material';
import Carousel from 'react-material-ui-carousel';

const products = [
  {
    id: 1,
    name: 'Product 1',
    image: 'product1.jpg', // Replace with the actual image URL
    description: 'Description of Product 1.',
  },
  {
    id: 2,
    name: 'Product 2',
    image: 'product2.jpg', // Replace with the actual image URL
    description: 'Description of Product 2.',
  },
  // Add more products as needed
];

const promotions = [
  {
    id: 1,
    title: 'Special Offer 1',
    description: 'Description of Special Offer 1.',
  },
  {
    id: 2,
    title: 'Special Offer 2',
    description: 'Description of Special Offer 2.',
  },
  // Add more promotions as needed
];

const ContentSection = () => {
  return (
    <Container maxWidth="lg">
      <div style={{ marginBottom: '25px' }}>
        <Typography variant="h3" align="center" marginTop={'50px'} gutterBottom>
          Các sản phẩm
        </Typography>
        <Carousel>
          {products.map((product) => (
            <Card key={product.id}>
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
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Carousel>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <Typography variant="h4" align="center" gutterBottom>
          Special Offers
        </Typography>
        <Grid container spacing={3}>
          {promotions.map((promotion) => (
            <Grid item key={promotion.id} xs={12} sm={6} md={4}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {promotion.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {promotion.description}
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

export default ContentSection;
