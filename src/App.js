import Action from './pages/Action';
import './App.css';
import {
  BrowserRouter as Router,
  Route,Switch

} from 'react-router-dom';
import CustDetails from './pages/CustDetails';
import Location from './pages/Location';
import DriverLoginPage from './pages/DriverLoginPage';
import DriverDetailedRegnFormPage from './pages/DriverDetailedRegnFormPage';
import ProceedDriverRegistration from './pages/ProceedDriverRegistration';


// {/* SATHIYA CODE STARTS */}
import useState from "react";
// {/* SATHIYA CODE ENDS */}


function App() {
  {/* SATHIYA CODE STARTS */}
  // const [driverDetailsObj,setDriverDetailsObj] = useState({})
  {/* SATHIYA CODE ENDS */}
  


  return (     
         <Router>
          <Switch>
          <Route exact path="/" component={Action}/>
          <Route path="/CustDetails" component={CustDetails}/>
          <Route path="/Location" component={Location}/>
          <Route path="/DriverLoginPage" component={DriverLoginPage}/>
          <Route path="/DriverDetailedRegnFormPage" component={DriverDetailedRegnFormPage}></Route>
          {/* SATHIYA CODE STARTS */}
          <Route path="/proceedDriverRegn">
            <ProceedDriverRegistration />
          </Route>
          <Route
            path="/driverdetailedregnformpage"
            component={DriverDetailedRegnFormPage}
          ></Route>
          {/* SATHIYA CODE ENDS */}
          </Switch>
       

     
          </Router>
        
  );
}

export default App;
