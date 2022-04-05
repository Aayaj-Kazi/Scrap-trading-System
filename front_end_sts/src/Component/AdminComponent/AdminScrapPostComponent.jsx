import React, { Component } from 'react'
import AdminService from '../../services/AdminService';
import ScrapPostService from '../../services/ScrapPostService';

export default class AdminScrapPostComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            scrappost: [],
            user:[]
        }

        this.deleteScrapPost = this.deleteScrapPost

    }
    componentDidMount(){
        // res. setHeader("Access-Control-Allow-Origin", "*");
        this.state.username=localStorage.getItem('username')
        ScrapPostService.getUserByUsername(this.state.username).then((res) => {
            this.setState({user: res.data});
        });
        // res. setHeader("Access-Control-Allow-Origin", "*");
        AdminService.getAllScrapPost().then((res) => {
            this.setState({scrappost: res.data});
        });
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
            <h3>  {this.state.user.fullname}</h3>
             <h2 className="text-center">Scrap Posts</h2>
             
             <div className="row">
             <table className="table table-striped table-bordered">
                 <thead>
                     <tr>
                         <th>seller Name</th>
                         <th>city</th>
                         <th>weight</th>
                         <th>Material Type</th>
                         <th>Uploading Date</th>
                         <th>Scrap Image</th>
                         <th>Action</th>
                         
                     </tr>
                 </thead>

                 <tbody>
                     {
                         this.state.scrappost.map(
                             scrap =>
                             
                             <tr key={scrap.id}>
                                 <td key={scrap.user.id}>{scrap.user.fullname}</td>
                                 <td>{scrap.city}</td>
                                 <td>{scrap.weight}</td>
                                 <td>{scrap.materialType}</td>
                                 <td>{scrap.uploadingDate}</td>
                                 <td>{scrap.scrapImage}</td>
                                 <td><button className="btn btn-primary"  onClick={ () => this.deleteScrapPost(scrap.id)}>Delete</button></td>
                                
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
