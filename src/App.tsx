import React from 'react';
import UrlForm from './components/UrlForm/UrlForm';
import './App.css';

const App: React.FC = () => {
  return (

      <div className="App">

          <header className="App-header">
              <h3>URL Shortener</h3>
              <UrlForm/>
          </header>
      </div>

  );
};

export default App;
