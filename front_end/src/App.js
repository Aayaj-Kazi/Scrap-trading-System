import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import AdminHome from './components/pages/AdminHome/AdminHome';
import Buycar from './components/pages/BuyCar/Buycar';
import ChangePassword from './components/pages/ChangePassword/ChangePassword';
import CustHome from './components/pages/CustomerHome/CustHome';
import EditProfile from './components/pages/EditProfile/EditProfile';
import Error from './components/pages/ErrorPage/Error';
import Home from './components/pages/Home/Home';
import Kyc from './components/pages/Kyc/Kyc';
import Sellcar from './components/pages/SellCar/Sellcar';
import SignIn from './components/pages/SignIn/SignIn';
import SignUp from './components/pages/SignUp/SignUp';
import UserContext from '../src/components/Session/Session';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logout from './components/pages/Logout/Logout';
import GetUsers from './components/pages/AdminHome/GetUsers';
import AddCompany from './components/pages/AdminHome/AddCompany';
import AddModel from './components/pages/AdminHome/AddModel';
import AboutUs from './components/pages/AboutUs/AboutUs';
import ContactUs from './components/pages/ContactUs/ContactUs';
import UserContact from './components/pages/BuyCar/UserContact';
import GetMyCars from './components/pages/SellCar/GetMyCars';
import DeleteCar from './components/pages/SellCar/DeleteCar';
import DeleteUser from './components/pages/AdminHome/DeleteUser';
import GetAllCompany from './components/pages/AdminHome/GetAllCompany';
import GetAllModel from './components/pages/AdminHome/GetAllModel';







function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <Router>
        
        <Switch>
        <UserContext.Provider value={{value,setValue}}>
          <Route path='/' exact component={Home} />
          <Route path='/SignUp' exact component={SignUp} />
          <Route exact path='/SignIn'  component={SignIn} />
          <Route exact path='/CustHome' xact component={CustHome} />
          <Route exact path='/Sellcar' exact component={Sellcar} />
          <Route exact path='/Buycar' exact component={Buycar} />
          <Route exact path='/Adminhome' exact component={AdminHome} />
          <Route exact path='/getusers' exact component={GetUsers} />
          <Route exact path='/addcompany' exact component={AddCompany} />
          <Route exact path='/addmodel' exact component={AddModel} />
          <Route exact path='/deleteUser' exact component={DeleteUser} />
          <Route exact path='/getallcompany' exact component={GetAllCompany} />
          <Route exact path='/getallmodel' exact component={GetAllModel} />
          <Route exact path='/EditProfile' exact component={EditProfile} />
          <Route exact path='/ChangePassword' exact component={ChangePassword} />
          <Route exact path='/kyc' exact component={Kyc} />
          <Route exact path='/logout' exact component={Logout} />
          <Route exact path='/aboutus' exact component={AboutUs} />
          <Route exact path='/contactus' exact component={ContactUs} />
          <Route exact path='/getuserdetail' exact component={UserContact} />
          <Route exact path='/getmycars' exact component={GetMyCars} />
          <Route exact path='/deleteCar' exact component={DeleteCar} />
          </UserContext.Provider> 
          <Route component={Error} />
        </Switch>                 
      </Router>
    </>
    
  );
}

export default App;
