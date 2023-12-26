import React, { useState, useEffect } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

const AdminProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({
    id: '',
    name: '',
    price: '',
    quantity: '',
  });

  useEffect(() => {
    // Fetch products from your backend or API on component mount
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setAddDialogOpen(true);
  };

  const handleDeleteClick = (id) => {
    // Delete product from backend
    fetch(`/api/products/${id}`, { method: 'DELETE' })
      .then(() => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
      })
      .catch((error) => console.error('Error deleting product:', error));
  };

  const handleAddClick = () => {
    setSelectedProduct({ id: '', name: '', price: '', quantity: '' });
    setAddDialogOpen(true);
  };

  const handleAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  const handleSaveProduct = () => {
    const isNewProduct = !selectedProduct.id;

    // Save or update product to backend
    fetch(isNewProduct ? '/api/products' : `/api/products/${selectedProduct.id}`, {
      method: isNewProduct ? 'POST' : 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedProduct),
    })
      .then((response) => response.json())
      .then((data) => {
        if (isNewProduct) {
          setProducts((prevProducts) => [...prevProducts, data]);
        } else {
          setProducts((prevProducts) =>
            prevProducts.map((product) => (product.id === data.id ? data : product))
          );
        }

        setAddDialogOpen(false);
      })
      .catch((error) => console.error('Error saving product:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
      >
        Add Product
      </Button>

      <TableContainer component={Paper} style={{ marginTop: 16 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.id}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.price}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(product)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(product.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isAddDialogOpen} onClose={handleAddDialogClose}>
        <DialogTitle>{selectedProduct.id ? 'Edit Product' : 'Add Product'}</DialogTitle>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <TextField
            label="Name"
            name="name"
            value={selectedProduct.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Price"
            name="price"
            value={selectedProduct.price}
            onChange={handleInputChange}
          />
          <TextField
            label="Quantity"
            name="quantity"
            value={selectedProduct.quantity}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDialogClose}>Cancel</Button>
          <Button onClick={handleSaveProduct} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminProductsPage;
