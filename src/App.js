import './App.css';
import { Routes, Route } from 'react-router-dom';
import ThemeContextProvider from './contexts/ThemeContext';
import PlayPage from './components/PlayPage/PlayPage';
import Main from './components/Main/Main';
import { useEffect, useState } from 'react';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPageVideos from './components/SearchPageVideos/SearchPageVideos';
import axios from 'axios';
import { API_KEY } from './contexts/ApiContext';

function App() {
  const homeActive = true;
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=id&part=snippet&part=statistics&chart=mostPopular&maxResults=15&key=${API_KEY}`, { timeout: 5000 })
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <ThemeContextProvider>
      <div className='app'>
        <Routes>
          <Route path='/' element={
            <Main homeActive={homeActive} ><RecommendedVideos videos={videos} /></Main>
          } />

          <Route path='/search/:searchText' element={
            <Main><SearchPageVideos /></Main>
          } />

          <Route path='/video/:videoId' element={

            <PlayPage />
          } />
        </Routes>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
