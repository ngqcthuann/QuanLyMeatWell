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

const AdminUsersPage = () => {
  const [users, setUsers] = useState([]);
  const [isAddDialogOpen, setAddDialogOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState({
    id: '',
    username: '',
    password: '', // Not recommended to handle passwords in frontend
    role: '',
  });

  useEffect(() => {
    // Fetch users from your backend or API on component mount
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setAddDialogOpen(true);
  };

  const handleDeleteClick = (id) => {
    // Delete user from backend
    fetch(`/api/users/${id}`, { method: 'DELETE' })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
      })
      .catch((error) => console.error('Error deleting user:', error));
  };

  const handleAddClick = () => {
    setSelectedUser({ id: '', username: '', password: '', role: '' });
    setAddDialogOpen(true);
  };

  const handleAddDialogClose = () => {
    setAddDialogOpen(false);
  };

  const handleSaveUser = () => {
    const isNewUser = !selectedUser.id;

    // Save or update user to backend
    fetch(isNewUser ? '/api/users' : `/api/users/${selectedUser.id}`, {
      method: isNewUser ? 'POST' : 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(selectedUser),
    })
      .then((response) => response.json())
      .then((data) => {
        if (isNewUser) {
          setUsers((prevUsers) => [...prevUsers, data]);
        } else {
          setUsers((prevUsers) =>
            prevUsers.map((user) => (user.id === data.id ? data : user))
          );
        }

        setAddDialogOpen(false);
      })
      .catch((error) => console.error('Error saving user:', error));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddClick}
        style={{ margin: '16px' }}
      >
        Add User
      </Button>

      <TableContainer component={Paper} style={{ marginTop: '16px' }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Password</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.password}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEditClick(user)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => handleDeleteClick(user.id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog open={isAddDialogOpen} onClose={handleAddDialogClose}>
        <DialogTitle>{selectedUser.id ? 'Edit User' : 'Add User'}</DialogTitle>
        <DialogContent style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <TextField
            label="Username"
            name="username"
            value={selectedUser.username}
            onChange={handleInputChange}
          />
          <TextField
            label="Password"
            name="password"
            value={selectedUser.password}
            onChange={handleInputChange}
          />
          <TextField
            label="Role"
            name="role"
            value={selectedUser.role}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleAddDialogClose}>Cancel</Button>
          <Button onClick={handleSaveUser} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AdminUsersPage;
