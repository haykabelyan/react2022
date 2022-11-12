import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import {Footer} from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Category from './pages/Category';
import Recipe from './pages/Recipe';
import NotFound from './pages/NotFound';

function App() {

  
  return (
    <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/category/:name" element={<Category/>}/>
            <Route path="/recipe/:id" element={<Recipe/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        <Footer />
    </Router>
  );
}

export default App;

/*

 <Route path="/login" element={<Login/>} />
 <Route path="*" element={<Navigate to="/login" />}

*/
