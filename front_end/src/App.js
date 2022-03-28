import logo from './logo.svg';
import './App.css';
import ListScrapPostComponent from './Component/ListScrapPostComponent';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import AddScrapPostComponent from './Component/AddScrapPostComponent';

function App() {
  return (
    <div>
      <Router>
    <div className="container">
       <Routes>
         <Route path='/' element={ListScrapPostComponent}></Route>
        <Route path='/addScrapPost' element={AddScrapPostComponent}></Route>
       </Routes>

      
    </div>
    </Router>
    </div>
  );
}

export default App;
