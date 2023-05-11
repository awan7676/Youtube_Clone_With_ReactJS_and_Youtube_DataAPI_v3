import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import ThemeContextProvider from './contexts/ThemeContext';
import { ThemeContext } from './contexts/ThemeContext';
import { useContext } from 'react';
import ApiContextProvider from './contexts/ApiContext';
import PlayPage from './components/PlayPage/PlayPage';


function App() {
  const isLightTheme = useContext(ThemeContext);
  return (
    <ThemeContextProvider>
      <ApiContextProvider>
        <div className={`app ${isLightTheme && 'darkTheme'}`}>
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
