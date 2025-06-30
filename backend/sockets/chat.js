const pool = require('../config/db');

module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('New client connected:', socket.id);

    socket.on('join', async ({ userId, clientId }) => {
      socket.join(clientId || userId);
      try {
        const result = await pool.query('SELECT * FROM chats WHERE client_id = $1 OR user_id = $2', [clientId, userId]);
        socket.emit('chatHistory', result.rows);
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    });

    socket.on('sendMessage', async ({ userId, clientId, message, sender }) => {
      try {
        const result = await pool.query(
          'INSERT INTO chats (user_id, client_id, message, sender) VALUES ($1, $2, $3, $4) RETURNING *',
          [userId, clientId, message, sender]
        );
        const newMessage = result.rows[0];
        io.to(clientId || userId).emit('newMessage', newMessage);

        // Send notification to admin
        if (sender === 'client') {
          await pool.query(
            'INSERT INTO notifications (user_id, message) VALUES ($1, $2)',
            [userId, `New message from client ${clientId}: ${message}`]
          );
        }
      } catch (error) {
        console.error('Error sending message:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('Client disconnected:', socket.id);
    });
  });
};