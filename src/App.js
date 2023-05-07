import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={
          <HomePage />
        } />

        <Route path='/search/:searchText' element={
          <SearchPage />
        } />
      </Routes>
    </div>
  );
}

export default App;
