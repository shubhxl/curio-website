import Index from './pages/homepage/index';
import IndexS from './pages/sports/indexs';
import IndexSporty from './pages/sportybeans/indexSporty';
import TOS from './pages/tos/index-tos';
import IndexPrivacy from './pages/privacy/indexP';
import indexAbout from './pages/about/indexAbout';
import indexGallery from './pages/gallery/indexGallery';
import './App.css';
import './Apps.scss';
import './assets/css/materialdesignicons.min.css';
import './assets/css/colors/default.css';
import { BrowserRouter as Router, Route } from "react-router-dom";



function App() {
  return (
 <div className="App">
  <Router>
    <Route exact path="/" component={Index}/>
    <Route exact path="/sports-and-fitness" component={IndexS}/>
    <Route exact path="/partners/sportybeans-sports-for-kids" component={IndexSporty}/>
    <Route exact path="/tos" component={TOS}/>
    <Route exact path="/privacy" component={IndexPrivacy}/>
    <Route exact path="/about" component={indexAbout}/>
    <Route exact path="/gallery" component={indexGallery}/>
  </Router> 
 </div>
  );
}

export default App;
