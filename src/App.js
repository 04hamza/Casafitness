import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import Footer from './Footer/Footer';
function App(){
  return (
    <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
