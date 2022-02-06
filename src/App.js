import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Download from './Download/Download';
import Header from './Header/Header';
import NewsCards from './NewsCards/NewsCards';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header/>
        <Download/>
        <NewsCards/>
      </Provider>
    </div>
  );
}

export default App;
