import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage/HomePage';
const API_KEY = 'AIzaSyD-6O6rfl0-xNWZVa_V7kqS8O2Y3HCauJU';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=id&part=snippet&part=statistics&chart=mostPopular&maxResults=15&key=${API_KEY}`)
      .then((response) => {
        setVideos(response.data.items);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="app">
      <HomePage />
      <Routes>
        <Route path='/' element={
          <div className='app-page'>
            <HomePage videos={videos} />
          </div>
        } />

        {/* <Route path='/search/:searchText' element={
          <div className='app-page'>
            <Sidebar />
            <SearchPage />
          </div>
        } /> */}
      </Routes>
    </div>
  );
}

export default App;
