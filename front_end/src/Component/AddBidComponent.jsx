import React, { Component } from 'react';
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
        ScrapPostService.getScrapPostById(this.state.id).then((res) => {
        this.setState({scrappost: res.data});
        // let scrappost=res.data; 
        // this.setState({
        //     city: this.state.city,
        //               weight: this.state.weight,
        //               material: this.state.material,
        //               date: this.state.date,
        //               image: this.state.image});
        
        });
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
                         this.state.scrappost.map(
                             scrap =>
                             
                             <tr key={scrap.id}>
                                 {/* <td key={scrap.user.id}>{scrap.user.fullname}</td> */}
                                 <td>{scrap.city}</td>
                                 <td>{scrap.weight}</td>
                                 <td>{scrap.materialType}</td>
                                 <td>{scrap.uploadingDate}</td>
                                 <td>{scrap.scrapImage}</td>
                    
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

export default AddBidComponent;