import Blog from './pages/blog';
import ContactPage from './pages/contact'
import MerchantPage from './pages/merchant'
import SignIn from './pages/signIn';
import WayaGram from './pages/wayagram';
import WayaPay from './pages/wayapay'
import Home from './pages/home'
import About from './pages/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './styles/App.scss';
import WayaChat from './pages/wayachat';
import Agent from './pages/agent';

function App() {
  return (
    <div className="App">
        <Router>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path='/home'>
     <Home/>
      </Route> 
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/agent'>
        <Agent/>
      </Route>
      <Route path="/contact">
        <ContactPage />
      </Route>
      <Route path='/merchant'>
      <MerchantPage/>
      </Route>
      <Route path='/wayapay'>
      <WayaPay/>
      </Route>
      <Route path='/wayagram'>
      <WayaGram/>
      </Route>
      <Route path='/blog'>
      <Blog/>
      </Route>
      <Route path='/wayachat'>
      <WayaChat/>
      </Route> 
      <Route path='/signin'>
        {/* Will be a protected route */}
      <SignIn/>
      </Route>
      </Router>
   </div>
  );
}

export default App;
