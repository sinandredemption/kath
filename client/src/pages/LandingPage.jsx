import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'nes.css/css/nes.min.css'; // Import nes.css
import ChatIcon from '../components/ChatIcon';

function LandingPage() {
  // State hooks to store the user's input
  const [displayName, setDisplayName] = useState('');
  const [roomName, setRoomName] = useState('');
  // Hook from react-router-dom to programmatically navigate
  const navigate = useNavigate();

  // Function to handle form submission
  const handleJoinChat = (event) => {
    event.preventDefault(); // Prevent default form submission

    // Basic validation
    if (displayName.trim() && roomName.trim()) {
      // Navigate to the chat room URL, passing displayName via route state
      navigate(`/${roomName.trim().toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9_-.]/g, '')}`, { // Sanitize room name for URL
        state: { displayName: displayName.trim() }
      });
    } else {
      // TODO Replace alert with a more integrated UI message using nes.css dialog in the future
      alert('Please enter both a display name and a room name.');
    }
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100dvh',
      backgroundColor: '#f5f5f5',
      fontFamily: 'Press Start 2P, cursive',
      padding: '16px'
    }}>
      <div className="nes-container is-rounded with-title" style={{ maxWidth: '400px', width: '100%' }}>
        <p className="title">Kath</p>
        
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <ChatIcon width={80} height={80} />
        </div>

        <form onSubmit={handleJoinChat}>
          <div className="nes-field" style={{ marginBottom: '16px' }}>
            <label htmlFor="displayName">Display Name</label>
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              placeholder="Enter your name"
              className="nes-input"
            />
          </div>

          <div className="nes-field" style={{ marginBottom: '24px' }}>
            <label htmlFor="roomName">Room Name</label>
            <input
              type="text"
              id="roomName"
              value={roomName}
              onChange={(e) => setRoomName(e.target.value)}
              required
              placeholder="Enter room name"
              className="nes-input"
            />
          </div>

          <button
            type="submit"
            className="nes-btn is-primary"
            style={{ width: '100%' }}
          >
            Join Chat
          </button>
        </form>

        <div className="nes-text is-disabled" style={{ textAlign: 'center', marginTop: '16px', fontSize: '10px' }}>
          Messages are not stored. Enter a room name to join or create it.
        </div>
        <div className="nes-text" style={{ textAlign: 'center', marginTop: '24px', fontSize: '10px' }}>
          <a
            href="https://github.com/sinandredemption/kath"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'black' }}
          >
          Made with <i className="nes-icon heart is-small"></i> by Fahad
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
