import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { ThemeContextProvider } from './contexts/ThemeContext';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import PlayPage from './components/PlayPage/PlayPage';


function App() {
  return (
    <ThemeContextProvider>
      <div className="app">
        <PlayPage />
        {/* <Routes>
          <Route path='/' element={
            <HomePage />
          } />

          <Route path='/search/:searchText' element={
            <SearchPage />
          } />

          <Route path='/video/:videoId' element={
            <VideoPlayer />
          } />
        </Routes> */}
      </div>
    </ThemeContextProvider>
  );
}

export default App;
