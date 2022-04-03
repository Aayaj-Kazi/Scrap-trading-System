import React from 'react'
import './Kyc.css'

//need userContext;
const Kyc = () => {
  return (

    <div className=" bg-colo">
      <div>
        <center><h2>KYC Page</h2></center>
        <br></br><br></br>
        <div className="container">
          <th>
            Choose Your Validation ID:
            <tr>
              <select>
                <option value="Aadhar Card">Aadhar</option>
                <option value="PAN Card">PAN Card</option>
                <option value="Ration Card">Ration Card</option>
                <option value="Passport">Passport</option>
              </select>&nbsp;&nbsp;&nbsp;&nbsp;<input type="file"></input><br></br><br></br>
            </tr>
          </th><br></br>
          <th>
            Upload Vehicle RC:
            <tr>
              <input type="file"></input>
            </tr>
          </th><br></br>
          <th>
            Upload Vehicle Insurance:
            <tr>
              <input type="file"></input>
            </tr>
          </th><br></br>
          <th>
            Upload Driving License:
            <tr>
              <input type="file"></input>
            </tr>
          </th>
        </div>
        <center><button className="btn btn-success input-maargin">SUBMIT</button></center>
      </div>
    </div>

  );
}

export default Kyc