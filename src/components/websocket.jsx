import React, { useState, useEffect } from 'react';

const WebSocketChat = () => {
  const [socket, setSocket] = useState(null);
  const [myName, setMyName] = useState('');
  const [newMsg, setNewMsg] = useState('');
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    const protocol = window.location.protocol === 'http:' ? 'ws' : 'wss';
    const newSocket = new WebSocket(`${protocol}://${window.location.host}/ws`);
    
    newSocket.onopen = () => {
      appendMsg('system', 'websocket', 'connected');
    };

    newSocket.onmessage = (event) => {
      const chat = JSON.parse(event.data);
      appendMsg('friend', chat.name, chat.msg);
    };

    newSocket.onclose = () => {
      appendMsg('system', 'websocket', 'disconnected');
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (!!newMsg) {
      appendMsg('me', 'me', newMsg);
      socket.send(`{"name":"${myName}", "msg":"${newMsg}"}`);
      setNewMsg('');
    }
  };

  const appendMsg = (cls, from, msg) => {
    setChatMessages(prevMessages => [
      ...prevMessages,
      { cls, from, msg }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  };

  const handleNameChange = (e) => {
    setMyName(e.target.value);
  };

  const handleMsgChange = (e) => {
    setNewMsg(e.target.value);
  };

  return (
    <div>
      <fieldset className="login-box" id="name-controls">
        <legend className="location">My Name</legend>
        <input id="my-name" type="text" value={myName} onChange={handleNameChange} />
      </fieldset>

      <fieldset className="button-row" id="chat-controls" disabled={!socket}>
        <legend className="location">Chat</legend>
        <input
          className="button-row"
          id="new-msg"
          type="text"
          value={newMsg}
          onChange={handleMsgChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={sendMessage}>Send</button>
      </fieldset>

      <div id="chat-text">
        {chatMessages.map((message, index) => (
          <div key={index}><span className={message.cls}>{message.from}</span>: {message.msg}</div>
        ))}
      </div>
    </div>
  );
};

export default WebSocketChat;
