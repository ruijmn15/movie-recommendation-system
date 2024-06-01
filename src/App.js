import './App.css';
import React, { useState } from 'react';
import Signup from './Signup';
import Login from './Login';

function App() {
  const [activeTab, setActiveTab] = useState('login');

  return (
    <div className="App">
      <header className="App-header">
        <h1>FlickPick</h1>
        <div className="App-body">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'login' ? 'active' : ''}`}
              onClick={() => setActiveTab('login')}
            >
              Login
            </button>
            <button
              className={`tab-button ${activeTab === 'signup' ? 'active' : ''}`}
              onClick={() => setActiveTab('signup')}
            >
              Signup
            </button>
          </div>
          {activeTab === 'login' && <Login />}
          {activeTab === 'signup' && <Signup />}
        </div>
      </header>
    </div>
  );
}

export default App;

