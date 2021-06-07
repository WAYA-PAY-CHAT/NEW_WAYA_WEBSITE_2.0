import Blog from './pages/blog';
import ContactPage from './pages/contact'
import MerchantPage from './pages/merchant'
import SignIn from './pages/signIn';
import WayaGram from './pages/wayagram';
import WayaPay from './pages/wayapay'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import './styles/App.scss';
import WayaChat from './pages/wayachat';

function App() {
  return (
    <div className="App">
        <Router>
      <Route exact path="/">
        <Redirect to="/home" />
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
