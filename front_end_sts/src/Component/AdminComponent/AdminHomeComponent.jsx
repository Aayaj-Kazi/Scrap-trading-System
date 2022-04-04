import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class AdminHomeComponent extends Component {
    constructor(props){
        super(props)
        this.state={
        user : [],
           
              }
    }

    componentDidMount(){
      // res. setHeader("Access-Control-Allow-Origin", "*");
      this.state.username=localStorage.getItem('username')
      ScrapPostService.getUserByUsername(this.state.username).then((res) => {
          this.setState({user: res.data});
      });}

    report=(e) =>{
        this.props.history.push('/AdmingetAllReport');
      }
      feedback=(e) =>{
        this.props.history.push('/AdmingetAllFeedback');
      }
      allScrapPost=(e) =>{
        this.props.history.push('/AdmingetAllScrappost');
      }
      allUsers=(e) =>{
        this.props.history.push('/AdmingetAllUsers');
      }
      
      
  render=(e) => {
    return (
      <div><h2>AdminHomeComponent    </h2>
      
      <h3>Welcome, Admin Mr {this.state.user.fullname}</h3>
          <button className="btn btn-success" onClick={this.allUsers}>Get User</button><br></br>
          <button className="btn btn-success" onClick={this.allScrapPost}>Get all  ScrapPost</button><br></br>
          
          <button className="btn btn-success" onClick={this.report}>Get all Report </button><br></br>
          <button className="btn btn-success" onClick={this.feedback}>Get allFeedback</button><br></br>
          
         

      </div>
    )
  }
} 
