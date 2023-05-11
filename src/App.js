import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ApiContextProvider from './contexts/ApiContext';
import PlayPage from './components/PlayPage/PlayPage';


function App() {
  return (
    <ApiContextProvider>
      <div className="app">
        {/* <PlayPage /> */}
        <Routes>
          <Route path='/' element={
            <HomePage />
          } />

          <Route path='/search/:searchText' element={
            <SearchPage />
          } />

          <Route path='/video/:videoId' element={
            <PlayPage />
          } />
        </Routes>
      </div>
    </ApiContextProvider>
  );
}

export default App;
