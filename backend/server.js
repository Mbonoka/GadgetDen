const express = require('express'); 
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const gadgetRoutes = require('./routes/gadgets');
const authRoutes = require('./routes/auth');
const notificationRoutes = require('./routes/notifications');
const setupSocket = require('./sockets/chat');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Add your frontend URL
    methods: ['GET', 'POST'],
  },
});

app.use(cors());
app.use(express.json());

// Add this route to handle root requests
app.get('/', (req, res) => {
  res.send('GadgetDen backend is running!');
});

app.use('/api/gadgets', gadgetRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/notifications', notificationRoutes);

setupSocket(io);

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
