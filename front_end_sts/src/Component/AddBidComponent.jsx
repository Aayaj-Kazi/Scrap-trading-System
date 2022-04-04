import React, { Component } from 'react';
//import { useHistory } from 'react-router-dom';
import ScrapPostService from '../services/ScrapPostService';

class AddBidComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            id:this.props.match.params.id,
            scrappost:[],
            bidAmt:''
        }
    }

    componentDidMount(){
       // const history = useHistory()
        ScrapPostService.getScrapPostById(this.state.id).then((res) => {
        this.setState({scrappost: res.data});
        let scrappost=res.data; 
        this.setState({
            city: scrappost.city,
                      weight: scrappost.weight,
                      material: scrappost.material,
                      date: scrappost.date,
                      image: scrappost.image});
        
        });
    }
    report(){
        this.props.history.push('/reportScrappost');
      }
      
    render() {
        return (
            <div>
             <h2 className="text-center">Add Bid</h2>
             
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
                         
                     </tr>
                 </thead>

                 <tbody>
                     {
                         (
                             
                             
                             <tr key={this.state.id}>
                                  {/* <td key={this.state.scrappost.user.id}>{this.state.scrappost.user.fullname}</td>  */}
                                 <td>{this.state.city}</td>
                                 <td>{this.state.weight}</td>
                                 <td>{this.state.materialType}</td>
                                 <td>{this.state.uploadingDate}</td>
                                 <td>{this.state.scrapImage}</td>
                    
                             </tr>
                         )
                     }
                 </tbody>
                 </table>    
                 <button className="btn btn-success" onClick={this.report}>Report ScrapPost</button>
             </div>  
            </div>
        );
    }
}

export default AddBidComponent;