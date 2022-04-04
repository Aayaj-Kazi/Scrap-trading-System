import React, { Component } from 'react'
import AdminService from '../../services/AdminService';
import ScrapPostService from '../../services/ScrapPostService';

export default class AdminScrapPostComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            scrappost: []
        }

        this.deleteScrapPost = this.deleteScrapPost

    }
    componentDidMount(){
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

  render() {
    
        return (
            <div><h3>  {this.state.user.fullname}</h3>
             <h2 className="text-center">Scrap Posts</h2>
             <div className="row">
                 <button className="btn btn-primary" onClick={this.addScrapPost}>Add Scrap Post</button>
                 </div> 
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
