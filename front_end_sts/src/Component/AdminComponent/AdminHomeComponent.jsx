import React, { Component } from 'react'

export default class AdminHomeComponent extends Component {
    constructor(props){
        super(props)
        this.report=this.report.bind(this);
    }
    report=(e) =>{
        this.props.history.push('/AdmingetAllScrappost');
      }
      feedback=(e) =>{
        this.props.history.push('/AdmingetAllScrappost');
      }
      allScrapPost=(e) =>{
        this.props.history.push('/AdmingetAllScrappost');
      }
      allUsers=(e) =>{
        this.props.history.push('/AdmingetAllUsers');
      }
      
      
  render=(e) => {
    return (
      <div><h2>AdminHomeComponent</h2>

          <button className="btn btn-success" onClick={this.allUsers}>Get User</button><br></br>
          <button className="btn btn-success" onClick={this.allScrapPost}>Get all  ScrapPost</button><br></br>
          
          <button className="btn btn-success" onClick={this.report}>Get all Report </button><br></br>
          <button className="btn btn-success" onClick={this.feedback}>Get allFeedback</button><br></br>
          
         

      </div>
    )
  }
}
