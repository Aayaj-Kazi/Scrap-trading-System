import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export default class AdminUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            users: []
        }

        this.deleteUser = this.deleteUser.bind(this)

    }
    componentDidMount(){
        
        // res. setHeader("Access-Control-Allow-Origin", "*");
        AdminService.getAllUsers().then((res) => {
            this.setState({users: res.data});
        });
    }
s
    deleteUser(id){
        AdminService.deleteUser(id).then( res => {
            this.setState({users: this.state.users.filter(users => users.id!==id)});
        })
    }
    deleteScrapPost(id){
        AdminService.deleteScrapPost(id).then( res => {
            this.setState({scrappost: this.state.scrappost.filter(scrappost => scrappost.id!==id)});
        })
    }
    logout=(e) =>{
        alert('You are logged out');
        this.props.history.push('/logout');
      }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>

  render() {
    
        return (
            <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
             <h2 className="text-center">All Users</h2>
          
             <div className="row">
             <table className="table table-striped table-bordered">
             
                 <thead>
                     <tr>
                     <th>User ID</th>
                         <th> Name</th>
                         <th> Email</th>
                         <th> ContactNo</th>
                         <th> Address </th>
                         <th> Username</th>
                         <th>Action</th>
                         
                     </tr>
                 </thead>

                 <tbody>
                     {
                         this.state.users.map(
                             user =>
                             
                             <tr key={user.id}>
                                <td>{user.id}</td>
                                 <td >{user.fullname}</td>
                                 <td>{user.email}</td>
                                 <td>{user.contactNo}</td>
                                 <td>{user.address}</td>
                                 <td>{user.username}</td>
                
                                 <td><button className="btn btn-primary"  onClick={ () => this.deleteUser(user.id)}>Delete User</button></td>
                                
                             </tr>
                         )
                     }
                 </tbody>
                 </table>    
                 </div>  
            </div>
        );
    }
}
