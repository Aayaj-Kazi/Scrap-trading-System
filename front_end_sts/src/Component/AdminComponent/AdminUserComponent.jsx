import React, { Component } from 'react'
import AdminService from '../../services/AdminService';

export default class AdminUserComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            user: []
        }

        this.deleteUser = this.deleteUser.bind(this)

    }
    componentDidMount(){
        // res. setHeader("Access-Control-Allow-Origin", "*");
        AdminService.getAllUsers().then((res) => {
            this.setState({user: res.data});
        });
    }

    deleteUser(id){
        AdminService.deleteUser(id).then( res => {
            this.setState({user: this.state.user.filter(user => user.id!==id)});
        })
    }

  render() {
    
        return (
            <div>
             <h2 className="text-center">All Users</h2>
          
             <div className="row">
             <table className="table table-striped table-bordered">
             
                 <thead>
                     <tr>
                         <th>User Name</th>
                         <th>User Email</th>
                         <th>User ContactNo</th>
                         <th>User Address </th>
                         <th>User Username</th>
                         <th>Action</th>
                         
                     </tr>
                 </thead>

                 <tbody>
                     {
                         this.state.user.map(
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
