const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');

const gadgetRoutes = require('./routes/gadgets');
const authRoutes = require('./routes/auth');
const notificationRoutes = require('./routes/notifications');
const mpesaRoutes = require('./routes/mpesa'); 
const setupSocket = require('./sockets/chat');

require('dotenv').config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST'],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/gadgets', gadgetRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/mpesa', mpesaRoutes); // Mpesa route

// Health check
app.get('/', (req, res) => {
  res.send('GadgetDen backend is running!');
});

// Handle 404 for undefined routes
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Setup socket.io
setupSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
