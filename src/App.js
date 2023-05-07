import './App.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import RecommendedVideos from './components/RecommendedVideos/RecommendedVideos';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
const API_KEY = 'AIzaSyD-6O6rfl0-xNWZVa_V7kqS8O2Y3HCauJU';

function App() {
  const [videos, setVideos] = useState([]);
  const [avatar, setAvatar] = useState([]);
  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=id&part=snippet&part=statistics&chart=mostPopular&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path='/' element={
          <div className='app-page'>
            <Sidebar />
            <RecommendedVideos videos={videos} avatar={avatar} />
          </div>
        } />

        <Route path='/search/:searchText' element={
          <div className='app-page'>
            <Sidebar />
            <SearchPage />
          </div>
        } />
      </Routes>
    </div>
  );
}

export default App;
