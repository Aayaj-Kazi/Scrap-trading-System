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
             
    

                 <tbody>
                     {
                        this.state.users.map(
                            user =>
                        <tr key={user.id} >
                        <td>
                            <div class="card mb-3">
                                
                                <div class="card-body">
                                    
                                    <p class="card-text">user id : {user.id}<br></br>
                                    full name : {user.fullname}<br></br>
                                        email : {user.email}<br></br>
                                        contact No. : {user.contactNo}<br></br>
                                        address : {user.address}<br></br>
                                        username: {user.username}  </p>
                                    <div ><button className="btn btn-primary"  onClick={ () => this.deleteUser(user.id)}>Delete User</button></div>
                                    
                                </div>
                            </div></td>
                    </tr>
                        
                             
                            //  <tr key={user.id}>
                            //     <td>{user.id}</td>
                            //      <td >{user.fullname}</td>
                            //      <td>{user.email}</td>
                            //      <td>{user.contactNo}</td>
                            //      <td>{user.address}</td>
                            //      <td>{user.username}</td>
                
                            //      <td><button className="btn btn-primary"  onClick={ () => this.deleteUser(user.id)}>Delete User</button></td>
                                
                            //  </tr>
                         )
                     }
                 </tbody>
                 </table>    
                 </div>  
            </div>
        );
    }
}
{/* <tr key={scrap.id} >
<td>
<div class="card mb-3">
    <img src={scrap.scrapImage} class="card-img-top" alt="Scrap Image" width={150} height={400} />
    <div class="card-body">
        <h5 class="card-title">{scrap.user.fullname}</h5>
        <p class="card-text">City : {scrap.city}<br></br>
            Scrap Weight : {scrap.weight}<br></br>
            Discription : {scrap.materialType}</p>
        <div ><button className="btn btn-primary align-right" onClick={() => this.addBid(scrap.id)}>Details</button></div>
        <p class="card-text"><small class="text-muted">posted on - {scrap.uploadingDate}</small></p>
    </div>
</div></td>
</tr> */}
