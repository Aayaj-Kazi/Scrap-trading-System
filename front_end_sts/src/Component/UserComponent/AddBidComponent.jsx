import React, { Component } from 'react';
import ScrapPostService from '../../services/ScrapPostService';
//import { useHistory } from 'react-router-dom';


class AddBidComponent extends Component {

    constructor(props){
        super(props)

        this.state ={
            user:[],
            scrappost:[],
            bidAmt:''
        }
        this.addBidhandler=this.addBidhandler.bind(this)
    }

    componentDidMount (){
        this.state.username=localStorage.getItem('username')
      ScrapPostService.getUserByUsername(this.state.username).then((res) => {
          this.setState({user: res.data});
      });

       // const history = useHistory()
       this.state.id= localStorage.getItem('scrapId')
       ScrapPostService.getScrapPostById(this.state.id).then((resp) => {
        this.setState({scrappost: resp.data});
        console.log(JSON.stringify(this.state.scrappost))
        //console.log(JSON.stringify(resp.data));
     
      
        });
    }


    report =(e)=>{
        this.props.history.push('/reportScrappost');
      }



      addBidhandler =(event) => {this.setState(
        {bidAmt:event.target.value} 
      )};


      
      addBid = (e) => {e.preventDefault();
        let bidDetails = {
            bidAmt: this.state.bidAmt,
            scrappost: this.state.scrappost.data,
            user: this.state.user,
            
    
                  };
                        //console.log('bid detials info ='+JSON.stringify(bidDetails));
  
                        ScrapPostService.addBid(bidDetails).then(res =>{
                          this.props.history.push('/viewScrapPost');
                        });
        }

        logout=(e) =>{
            alert('You are logged out');
            this.props.history.push('/logout');
          }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>


    render() {
        return (
            <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
            <h3>{this.state.user.fullname}</h3>
            <h6>{this.state.scrappost.city}</h6>
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
                             <tr key={this.state.scrappost.id}>
                                  {/* <td key={this.state.scrappost.user.id}>{this.state.scrappost.user.fullname}</td>  */}
                                 <td>{this.state.scrappost.city}</td>
                                 <td>{this.state.scrappost.weight}</td>
                                 <td>{this.state.scrappost.materialType}</td>
                                 <td>{this.state.scrappost.uploadingDate}</td>
                                 <td>{this.state.scrappost.scrapImage}</td>
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