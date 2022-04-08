import React, { Component } from 'react'
import ScrapPostService from '../../services/ScrapPostService';

export default class GetScrapPostByUserComponent extends Component {
    constructor(props){
super(props)

this.state = {
    user:[],
    scrappost: []
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
            console.log(JSON.stringify(this.state.scrappost))
              //console.log(JSON.stringify(resp.data));
        });
    }

    viewBid(id){
        localStorage.setItem('scrapId',id)
        console.log('scarppost id :'+id)
      //  this.props.history.push(`/addBid/${id}`);
    }

  render() {
    return (
      <div>GetScrapPostByUserComponent<h3>   Welcome,  {this.state.user.fullname}</h3>

 <div className="row">
<table className="table table-striped table-bordered">
                 <thead>
                     <tr>  
                         <th>Uploading Date</th>
                        
                         <th>city</th>
                         <th>weight</th>
                         <th>Material Type</th>
                       
                         <th>Scrap Image</th>
                         <th>Bidding</th>
                     </tr>
                 </thead>

                 <tbody>
                     {
                        //  this.state.scrappost(
                        //      scrap =><td key={this.state.scrappost.user.id}>{this.state.scrappost.user.fullname}</td>
                             
                             <tr key={this.state.scrappost.id}>
                                   <td>{this.state.scrappost.uploadingDate}</td>
                                                              <td>{this.state.scrappost.city}</td>
                                 <td>{this.state.scrappost.weight}</td>
                                 <td>{this.state.scrappost.materialType}</td>
                               
                                 <td><img src={this.state.scrappost.scrapImage} alt="Scrap Image" width={150} height={150} /></td>
                                 <td><button className="btn btn-primary"  onClick={ () => this.viewBid(this.state.scrappost.id)}>View All Bids</button></td>
                             
                             </tr>
                             
                         //)
                     }
                 </tbody>
                 </table>


                 </div>
      </div>



    )
  }
}
