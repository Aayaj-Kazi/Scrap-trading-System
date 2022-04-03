
import './../SignIn/SignIn';
import axios from 'axios';
import React, { useState, useEffect,useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import Navbar2 from './../NavBar/Navbar2/NavBar2';
import { Form } from 'react-bootstrap';
import AdminHome from './AdminHome';

const AddModel = () => {
  const [modelname, setModel] = useState('')
  const [companyId,setCompanyId] = useState(0)
  const history = useHistory();
  const {value,setValue}=useContext(UserContext)
  const [companies, setCompanies] = useState([]);
  const url = 'http://localhost:8080'
  useEffect(() => {
    loadCompanies();
  }, []);
 
  console.log("companyId"+`${companyId}`);

  //get api on load
  const loadCompanies = async () => {
    const result = await axios.get(url+'/getcompanies');
    setCompanies(result.data.data);
    console.log(result.data.data);
  };

  const registerModel = () => {
  
    if (modelname.length === 0) {
      alert('please enter mpdel name')
    } else {
      const data = new FormData()
      data.append('modelname', modelname);
      data.append('companyId', companyId)
      console.log('-------'+data)
      const url = 'http://localhost:8080'

      axios.post(url + '/postmodel', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert(' Succesfully Registered Model')
          history.push('/AdminHome')
        }
        else {
          alert('failed to Add Model')
        }
      })

    }
  }


  return (
    <div>
      <Navbar2 />
      <div id="loginform">
        {/* Welcome {value.data.firstName} */}
        <h2 id="headerTitle">Add Model</h2>
        <div>

        <div className="form-control " >
              <select className="select"
                className="form-control"
                onChange={(event) => {
                  setCompanyId(event.target.value)
                }}>
                {companies.map((company, index ) => (
                  <option  
                  value={company.id}
                  
                  >{company.name}</option>
                ))}
              </select>
          </div>

          <div className="row">
            <label>Model</label>
            <input
              type="text"
              placeholder="Enter Model name"
              onChange={(event) => {
                setModel(event.target.value)
              }}
            />
          </div>
          <div id="button" className="row">
            <button onClick={registerModel}>Add</button>
          </div>

        </div>

      </div>

    </div>
  )

}
export default AddModel


