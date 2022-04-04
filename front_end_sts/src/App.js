
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListScrapPostComponent from './Component/ListScrapPostComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddScrapPostComponent from './Component/AddScrapPostComponent';
import AddBidComponent from './Component/AddBidComponent';
import LoginComponent from './Component/LoginComponent';
import SignIn from './Component/SignIn/SignIn';
import UserContext from './Session/Session';
import { useState } from 'react';

import AddUserComponent from './Component/AddUserComponent';
import ReportComponent from './Component/ReportComponent';
import AdminHomeComponent from './Component/AdminComponent/AdminHomeComponent';
import AdminScrapPostComponent from './Component/AdminComponent/AdminScrapPostComponent';
import AdminUserComponent from './Component/AdminComponent/AdminUserComponent';

function App() {
  const [value, setValue] = useState('')
  return (
    
    <div>
      <Router>
      
        <div className="container">
           <Switch>
           <UserContext.Provider value={{value,setValue}}>
           
              <Route path='/' exact component={SignIn}></Route>
              <Route path='/register' exact component={AddUserComponent}></Route>
              <Route path='/login' exact component={SignIn}></Route>
              <Route path='/loginpage'  component={LoginComponent}></Route>
              <Route path='/viewScrapPost'  component={ListScrapPostComponent}></Route>
              <Route path='/addScrapPost' component={AddScrapPostComponent}></Route>
              <Route path='/addBid/:id' component={AddBidComponent}></Route>
              <Route path='/reportScrappost' component={ReportComponent}></Route>
              <Route path='/adminhome'  component={AdminHomeComponent}></Route>
              <Route path='/AdmingetAllScrappost'  component={AdminScrapPostComponent}></Route>
              <Route path='/AdmingetAllUsers'  component={AdminUserComponent}></Route>
              
              </UserContext.Provider> 
           </Switch>
    </div>
    </Router>
    </div>
    
  );
}

export default App;
