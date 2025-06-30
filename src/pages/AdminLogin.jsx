// src/pages/AdminLogin.jsx
import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
// Import auth2 for myadminproject Firebase instance
import { auth2 } from '../firebase'; // Make sure this exports auth2 as explained
import { Container, Paper, Box, Typography, TextField, Button, Avatar } from '@mui/material';
import { AdminPanelSettings } from '@mui/icons-material';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      await signInWithEmailAndPassword(auth2, email, password);

      // Redirect to admin dashboard running on port 5174
      window.location.href = 'http://localhost:5174';
    } catch (err) {
      if (err.code === 'auth/user-not-found') {
        setError('No user found with this email.');
      } else if (err.code === 'auth/wrong-password') {
        setError('Incorrect password.');
      } else if (err.code === 'auth/invalid-email') {
        setError('Invalid email address.');
      } else {
        setError('Failed to sign in. Please try again.');
      }
      console.error('Firebase signIn error:', err);
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper 
        elevation={6} 
        sx={{ p: 4, borderRadius: 2, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 3 }}>
          <Avatar sx={{ bgcolor: '#1976d2', mb: 1 }}>
            <AdminPanelSettings />
          </Avatar>
          <Typography variant="h5" component="h1" fontWeight="bold">
            Admin Login
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Please sign in to your admin account
          </Typography>
        </Box>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email Address"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          {error && (
            <Typography color="error" variant="body2" sx={{ mt: 1, textAlign: 'center' }}>
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 3, py: 1.5, fontWeight: 'bold' }}
          >
            Sign In
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default AdminLogin;
