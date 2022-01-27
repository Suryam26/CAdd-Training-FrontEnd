import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import DetailPost from './components/DetailPost';

function App() {
  return (
    <BrowserRouter>
      <h1>Fetch Data</h1>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/post/:id" element={<DetailPost/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
