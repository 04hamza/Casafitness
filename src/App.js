import './App.css';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Home/home';
import Navbar from './Navbar/navbar';
import Footer from './Footer/Footer';
import GymPlans from './Login/GymPlans';
import GymSelection from './Login/GymSelection';
import SignUpForm from './Login/SignUpForm';
import LoginForm from './Login/LoginForm';
import ProposerLocal from "./components/ProposerLocal";
import RecipesArticl from './RecipesArticl/RecipesArticl';
<<<<<<< HEAD
import FAQ from './FAQ/FAQ';
=======
import Activities from './Activities/Activities';
import Musculation from './Activities/Musculation';
import Cross_training from './Activities/Cross-training';
import Cardio_training from './Activities/cardio-training';
import Cours_collectifs from './Activities/Cours_collectifs';
>>>>>>> 637c08cea6892cb22bc7d41f822a91dad7739c5b
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
        <Route path="/Propose a location" element={<ProposerLocal />} />
<<<<<<< HEAD
        <Route path="/FAQ" element={<FAQ/>} />
=======
        
        <Route path='/Activities' element={<Activities/>}></Route>
        <Route path='/musculation' element={<Musculation/>}></Route>
        <Route path='/cross-training'element={<Cross_training/>}/>
        <Route path='/cardio-training' element={<Cardio_training/>}/>
        <Route path='/cours_collectifs' element={<Cours_collectifs/>}/>
>>>>>>> 637c08cea6892cb22bc7d41f822a91dad7739c5b
      </Routes>
      <Footer/>
    </Router>
  );
}
export default App;
