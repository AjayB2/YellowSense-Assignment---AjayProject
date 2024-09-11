import React, { useState } from 'react';
import Jobs from './components/Jobs';
import Bookmarks from './components/Bookmarks';

const App = () => {
  const [activeTab, setActiveTab] = useState('jobs');

  return (
    <div>
      <nav>
        <button onClick={() => setActiveTab('jobs')}>Jobs</button>
        <button onClick={() => setActiveTab('bookmarks')}>Bookmarks</button>
      </nav>
      
      {activeTab === 'jobs' && <Jobs />}
      {activeTab === 'bookmarks' && <Bookmarks />}
    </div>
  );
};

export default App;
