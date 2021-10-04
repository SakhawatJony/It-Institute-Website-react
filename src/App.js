
import './App.css';
import Header from './components/Header/Header';
import Homes from './components/Homes/Homes';
import Fotter from './components/Fotter/Fotter';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import About from './components/About/About';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';
import ContactUs from './components/ContactUs/ContactUs';






function App() {
  return (
    <div>
      <Router>
      <Header></Header>
      
     <Switch>
  <Route exact path="/">
    <Homes></Homes>
  </Route>
  <Route  path="/home">
    <Homes></Homes>
  </Route>
  <Route  path="/service">
   <Services></Services>
  </Route>
  <Route  path="/about">
    <About></About>
  </Route>
  <Route  path="/contact">
   <ContactUs></ContactUs>
  </Route>
  <Route  path="*">
   <NotFound></NotFound>
  </Route>
     </Switch>
     <Fotter></Fotter>
      </Router>
     
  
  


  
    </div>
  );
}

export default App;
