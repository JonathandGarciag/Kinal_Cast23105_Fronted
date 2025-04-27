// src/components/channel/ChannelChat.jsx
import React, { useEffect, useState } from 'react';
import { connectToChat, sendMessage, disconnectChat } from '../channel/chatService';

const ChannelChat = ({ channelId }) => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    connectToChat(channelId, (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => disconnectChat();
  }, [channelId]);

  const handleSend = () => {
    if (text.trim()) {
      sendMessage({ content: text, sender: 'UsuarioX' });
      setText('');
    }
  };

  return (
    <div style={{ width: '300px', height: '100%', background: '#222', color: '#fff', padding: '10px', overflowY: 'scroll' }}>
      <h4>Chat</h4>
      <div style={{ height: '400px', overflowY: 'auto' }}>
        {messages.map((msg, idx) => (
          <div key={idx}><strong>{msg.sender}:</strong> {msg.content}</div>
        ))}
      </div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        placeholder="Escribe un mensaje..."
        style={{ width: '100%', marginTop: '5px' }}
      />
    </div>
  );
};

export default ChannelChat;
