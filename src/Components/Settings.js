import React, { useState } from 'react';
import './Settings.css';

function Settings({ addPage }) {
  const [pageName, setPageName] = useState('');
  const [pagePath, setPagePath] = useState('');

  const handleAddPage = () => {
    if (pageName && pagePath) {
      addPage(pageName, pagePath);
      setPageName('');
      setPagePath('');
    }
  };

  return (
    <div className="content">
      <h1>⚙️ Settings</h1>
      <div className="settings">
        <input
          type="text"
          placeholder="Page Name"
          value={pageName}
          onChange={e => setPageName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Page Path"
          value={pagePath}
          onChange={e => setPagePath(e.target.value)}
        />
        <button onClick={handleAddPage}>Add Page</button>
      </div>
    </div>
  );
}

export default Settings;
