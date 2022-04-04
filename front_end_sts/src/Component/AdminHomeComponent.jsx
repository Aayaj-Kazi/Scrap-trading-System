import React, { Component } from 'react'

export default class AdminHomeComponent extends Component {
    constructor(props){
        super(props)
    }
    report(){
        this.props.history.push('/reportScrappost');
      }
      feedback(){
        this.props.history.push('/reportScrappost');
      }
      allScrapPost(){
        this.props.history.push('/reportScrappost');
      }
      allUsers(){
        this.props.history.push('/reportScrappost');
      }
      deleteUser(){
        this.props.history.push('/reportScrappost');
      }
      deleteScrapPost(){
        this.props.history.push('/reportScrappost');
      }
     
  render() {
    return (
      <div><h2>AdminHomeComponent</h2>
          <button className="btn btn-success" onClick={this.allScrapPost}>Get all  ScrapPost</button><br></br>
          <button className="btn btn-success" onClick={this.deleteScrapPost}>delete ScrapPost</button><br></br>
          <button className="btn btn-success" onClick={this.report}>Get all Report </button><br></br>
          <button className="btn btn-success" onClick={this.feedback}>Get allFeedback</button><br></br>
          <button className="btn btn-success" onClick={this.allUsers}>Get User</button><br></br>
          <button className="btn btn-success" onClick={this.deleteUser}>delete User</button><br></br>

      </div>
    )
  }
}
