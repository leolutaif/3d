import React from 'react';
import ModelViewer from './ModelViewer';
import Chat from './Chat';
import "./App.css"

function App() {
  return (
    <div className='App'>
      <ModelViewer />
      <div className="EnvChat">
      <Chat />
      </div>
      <div className="live">
            Live Now <div className="g">•</div>
      </div>
    </div>
  );
}

export default App;
