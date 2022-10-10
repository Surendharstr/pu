import Action from './pages/Action';
import './App.css';
import {
  BrowserRouter as Router,
  Route,Switch

} from 'react-router-dom';
import CustDetails from './pages/CustDetails';
import Location from './pages/map/Location';
import Signin from './pages/Signin/signin';




function App() {
  return (  
    <div className='action'>   
         <Router>
          <Switch>
            <Route exact path="/Signin" component={Signin}/>
          <Route exact path="/" component={Action}/>
         <Route path="/CustDetails" component={CustDetails}/>
         <Route path="/Location" component={Location}/>
         <Route path="/signin" component={Signin}/>
          </Switch>
       

     
          </Router>
          </div>
  );
}

export default App;
