import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import Footer from './Footer/Footer';
import GymPlans from './Login/GymPlans';
import GymSelection from './Login/GymSelection';
import SignUpForm from './Login/SignUpForm';
import LoginForm from './Login/LoginForm';
import RecipesArticl from './RecipesArticl/RecipesArticl';
function App(){
  return (
    <Router>
       <Navbar/>
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Recipes/:title' element={<RecipesArticl/>}></Route>
        <Route path="/loginform" element={<LoginForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/gyms" element={<GymSelection />} />
        <Route path="/gymplans" element={<GymPlans />} />
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
