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
import HowItWorks from './pages/how-it-works';

function App() {
  return (
    <div className="App">
        <Router>
      <Route exact path="/">
      <Home/>
      </Route>
      <Route exact path='/about'>
        <About/>
      </Route>
      <Route exact path='/agent'>
        <Agent/>
      </Route>
      <Route exact path="/contact">
        <ContactPage />
      </Route>
      <Route exact path='/merchant'>
      <MerchantPage/>
      </Route>
      <Route exact path='/wayapay'>
      <WayaPay/>
      </Route>
      <Route exact path='/wayagram'>
      <WayaGram/>
      </Route>
      <Route exact path='/blog'>
      <Blog/>
      </Route>
      <Route exact path='/wayachat'>
      <WayaChat/>
      </Route> 
      <Route exact path='/signin'>
      <SignIn/>
      </Route>
      <Route exact path='/how-it-works'>
      <HowItWorks/>
      </Route>
      </Router>
   </div>
  );
}

export default App;
