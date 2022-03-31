
import './App.css';
import ListScrapPostComponent from './Component/ListScrapPostComponent';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AddScrapPostComponent from './Component/AddScrapPostComponent';
import AddBidComponent from './Component/AddBidComponent';

function App() {
  return (
    <div>
      <Router>
        <div className="container">
           <Switch>
              <Route path='/' exact component={ListScrapPostComponent}></Route>
              <Route path='/viewScrapPost'  component={ListScrapPostComponent}></Route>
              <Route path='/addScrapPost' component={AddScrapPostComponent}></Route>
              <Route path='/addBid/:id' component={AddBidComponent}></Route>

           </Switch>
    </div>
    </Router>
    </div>
  );
}

export default App;
