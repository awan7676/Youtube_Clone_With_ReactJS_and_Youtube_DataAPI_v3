import './App.css';
import SearchPage from './components/SearchPage/SearchPage';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import { ThemeContextProvider } from './contexts/ThemeContext';


function App() {
  return (
    <ThemeContextProvider>
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
    </ThemeContextProvider>
  );
}

export default App;
