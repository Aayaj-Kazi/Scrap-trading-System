import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class GetScrapPostByUserComponent extends Component {
    constructor(props){
super(props)

this.state = {
    user:[],
    scrappost:[]
}

    }



    componentDidMount(){
        this.state.username=localStorage.getItem('username')
        ScrapPostService.getUserByUsername(this.state.username).then((res) => {
            this.setState({user: res.data});
        });
        
        // res. setHeader("Access-Control-Allow-Origin", "*");
        this.state.id=localStorage.getItem('userId')
        ScrapPostService.getScarpPostByUserId(this.state.id).then((resp) => {
            this.setState({scrappost: resp.data});
          
        });
    }

    viewBid(id){
        localStorage.setItem('scrapId',id)
        console.log('scarppost id :'+ id)
        this.props.history.push(`/viewBid/${id}`);
    }

  render() {
    return (
      <div><h3> {this.state.user.fullname}      </h3>
   
 <div className="row">
 
<table className="table table-striped table-bordered">
                 <thead>
                     <tr>  
                         <th>Uploading Date</th>
                            <th>city</th>
                         <th>weight</th>
                         <th>Material Type</th>
                        <th>Scrap Image</th>
                         <th>Action</th>
                     </tr>
                 </thead>

                 <tbody>
                 {
                         this.state.scrappost.map(
                             scrap =>
                             
                             <tr key={scrap.id}>
                                  <td>{scrap.uploadingDate}</td>
                                 <td>{scrap.city}</td>
                                 <td>{scrap.weight}</td>
                                 <td>{scrap.materialType}</td>
                                <td><img src={scrap.scrapImage} alt="Scrap Image" width={150} height={150} /></td>
                                 <td><button className="btn btn-primary"  onClick={ () => this.viewBid(scrap.id)}>Get all Bids</button></td>
                             </tr>
                             
                         )
                     }
                 </tbody>
                 </table>


                 </div>
      </div>



    )
  }
}
