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
import SinglePost from './pages/single-post';
import TermsOfUse from './pages/terms';
import PrivacyPage from './pages/privacy';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blogs">
            <Blog />
          </Route>
          <Route exact path='/agent'>
            <Agent />
          </Route>
          <Route exact path="/contact">
            <ContactPage />
          </Route>
          <Route exact path='/merchant'>
            <MerchantPage />
          </Route>
          <Route exact path='/product/:cat'>
            <WayaChat />
          </Route>
          <Route exact path='/wayapay'>
            <WayaPay />
          </Route>
          <Route exact path='/wayagram'>
            <WayaGram />
          </Route>
          <Route exact path='/wayachat'>
            <WayaChat />
          </Route>
          <Route exact path='/signin'>
            <SignIn />
          </Route>
          <Route exact path='/how-it-works'>
            <HowItWorks />
          </Route>
          <Route exact path='/terms-of-use'>
            <TermsOfUse />
          </Route>
          <Route exact path='/privacy-page'>
            <PrivacyPage />
          </Route>
          <Route path={`/blogs/:topicId`}>
            <SinglePost />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
