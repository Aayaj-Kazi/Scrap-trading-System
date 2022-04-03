
import './../SignIn/SignIn';
import axios from 'axios';
import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import UserContext from '../../Session/Session';
import Navbar2 from './../NavBar/Navbar2/NavBar2';

const AddCompany = () => {
  const [name, setName] = useState('')
  const history = useHistory();
  const {value,setValue}=useContext(UserContext)

  const registerCompany = () => {
  
    if (name.length === 0) {
      alert('please enter company')
    } else {
      const data = new FormData()
      data.append('name', name);
      const url = 'http://localhost:8080'
      axios.post(url + '/postcompany', data).then((response) => {
        const result = response.data
        if (result.status === 'success') {
          alert(' Succesfully Registered Company')
          history.push('/Adminhome')
        }
        else {
          alert('failed to Add Company')
        }
      })

    }
  }


  return (
    <div>
      <Navbar2 />
      <div id="loginform">
        {/* Welcome {value.data.firstName} */}
        <h2 id="headerTitle">Add Company</h2>
        <div>
          <div className="row">
            <label>Company</label>
            <input
              type="text"
              placeholder="Enter company name"
              onChange={(event) => {
                setName(event.target.value)
              }}
            />
          </div>
          <div id="button" className="row">
            <button onClick={registerCompany}>Add</button>
          </div>

        </div>

      </div>

    </div>
  )

}
export default AddCompany


