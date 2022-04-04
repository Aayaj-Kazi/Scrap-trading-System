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
        this.addBidhandler=this.addBidhandler.bind(this)
    }

    componentDidMount (){
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


    report =(e)=>{
        this.props.history.push('/reportScrappost');
      }



      addBidhandler =(event) => {this.setState(
        {bidAmt:event.target.value} 
      )};

      addBid = (e) => {e.preventDefault();
        let bidDetails = {user: this.state.user,
            bidAmt: this.state.bidAmt,
                        
                  };
                        console.log('user info='+JSON.stringify(bidDetails));
  
                        ScrapPostService.addBid(bidDetails).then(res =>{
                          this.props.history.push('/viewScrapPost');
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
<div>
<table><tbody>
    <tr>
        <td>
            Enter Bidding Amount
        </td>
        <td>
            <input type='text' name='addbid' value={this.state.bidAmt} onChange={this.addBidhandler} placeholder='Enter Amount' />
        </td>
    </tr>
   </tbody>
</table>
</div>


                 <button className="btn btn-success" onClick={this.addBid}>Bid on ScrapPost</button>
                 <button className="btn btn-success" onClick={this.report}>Report ScrapPost</button>
             </div>  
            </div>
        );
    }
}

export default AddBidComponent;