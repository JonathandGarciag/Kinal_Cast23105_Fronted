// src/services/chatService.jsx
let socket;

export const connectToChat = (channelId, onMessageReceived) => {
  socket = new WebSocket(`ws://localhost:4000/ws/chat/${channelId}`);

  socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    onMessageReceived(message);
  };
};

export const sendMessage = (message) => {
  if (socket && socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(message));
  }
};

export const disconnectChat = () => {
  if (socket) socket.close();
};
