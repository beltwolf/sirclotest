import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detailpokemon from './components/Detailpokemon';
import Home from './components/Home';
import './css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';

export default function App() {    
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/pokemon/:id' element={<Detailpokemon />} />
      </Routes>
    </BrowserRouter>
  );
}