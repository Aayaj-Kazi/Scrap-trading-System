
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
import SignUp from './Component/SignUp/SignUp';

function App() {
  const [value, setValue] = useState('')
  return (
    
    <div>
      <Router>
      
        <div className="container">
           <Switch>
           <UserContext.Provider value={{value,setValue}}>
           
              <Route path='/' exact component={SignIn}></Route>
              <Route path='/SignUp' component={SignUp}></Route>
              <Route path='/loginpage'  component={LoginComponent}></Route>
              <Route path='/viewScrapPost'  component={ListScrapPostComponent}></Route>
              <Route path='/addScrapPost' component={AddScrapPostComponent}></Route>
              <Route path='/addBid/:id' component={AddBidComponent}></Route>
              </UserContext.Provider> 
           </Switch>
    </div>
    </Router>
    </div>
    
  );
}

export default App;
