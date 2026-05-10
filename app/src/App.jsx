import React, { useState } from 'react';
import './App.css';
import EntryView from './components/views/EntryView';
import MorningRitual from './components/views/MorningRitual';
import InternalDialogue from './components/views/InternalDialogue';
import InterruptionOverlay from './components/ui/InterruptionOverlay';
import ToastContainer from './components/ui/ToastContainer';

function App() {
  const [currentView, setCurrentView] = useState('entry'); // entry, ritual, dialogue
  const [toasts, setToasts] = useState([]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3000);
  };

  const navigateTo = (view) => {
    setCurrentView(view);
  };

  return (
    <div id="app-container">
      <ToastContainer toasts={toasts} />
      
      {currentView === 'entry' && (
        <EntryView onStartRitual={() => navigateTo('ritual')} onStartDialogue={() => navigateTo('dialogue')} />
      )}
      
      {currentView === 'ritual' && (
        <MorningRitual onFinish={() => navigateTo('entry')} showToast={showToast} />
      )}
      
      {currentView === 'dialogue' && (
        <InternalDialogue onFinish={() => navigateTo('entry')} showToast={showToast} />
      )}

      <InterruptionOverlay activeView={currentView} showToast={showToast} />
    </div>
  );
}

export default App;
