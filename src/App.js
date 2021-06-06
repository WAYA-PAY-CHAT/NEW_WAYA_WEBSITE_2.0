import Blog from './pages/blog';
import ContactPage from './pages/contact'
import MerchantPage from './pages/merchant'
import WayaGram from './pages/wayagram';
import WayaPay from './pages/wayapay'
import './styles/App.scss';

function App() {
  return (
    <div className="App">
       {/* <ContactPage/> 
      <MerchantPage/>
      <WayaPay/>
      <WayaGram/>*/}
      <Blog/>
   </div>
  );
}

export default App;
