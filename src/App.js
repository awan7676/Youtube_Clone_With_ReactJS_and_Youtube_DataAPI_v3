import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ThemeContextProvider from './contexts/ThemeContext';
import ApiContextProvider from './contexts/ApiContext';
import PlayPage from './components/PlayPage/PlayPage';

function App() {

  return (
    <ThemeContextProvider>
      <ApiContextProvider>
        <div className='app'>
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
    </ThemeContextProvider>
  );
}

export default App;
