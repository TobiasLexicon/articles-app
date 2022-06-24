import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Articles } from './components/Articles';
import { Home } from './components/Home';
import { Contact } from './components/Contact';
import { AddArticle } from './components/AddArticle';

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='articles' element={<Articles />} />
        <Route path='contact' element={<Contact />} />
        <Route path='add-article' element={<AddArticle />} />
      </Routes>
    </div>
  );
}

export default App;
