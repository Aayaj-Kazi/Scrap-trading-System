import React, { Component } from 'react';
import ScrapPostService from '../../services/ScrapPostService';


class ListScrapPostComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            user:[],
            scrappost: []
        }

        this.addScrapPost = this.addScrapPost.bind(this);
       // this.deleteScrapPost = this.deleteScrapPost.bind(this);
        this.addBid = this.addBid.bind(this);
        this.loginpage=this.loginpage.bind(this);
        this.giveFeedback=this.giveFeedback.bind(this)
    }

   
    componentDidMount(){
        this.state.username=localStorage.getItem('username')
        ScrapPostService.getUserByUsername(this.state.username).then((res) => {
            this.setState({user: res.data});
        });
        
        // res. setHeader("Access-Control-Allow-Origin", "*");
        ScrapPostService.getScrapPost().then((resp) => {
            this.setState({scrappost: resp.data});
              
        });
    }
    
    loginpage(){
       
        this.props.history.push('/loginpage');
    }

    addScrapPost(){
        this.props.history.push('/addScrapPost');
    }

    giveFeedback(){
        this.props.history.push('/feedbackUser');
    }

    addBid(id){
        localStorage.setItem('scrapId',id)
        console.log('scarppost id :'+id)
        this.props.history.push(`/addBid/${id}`);
    }
    logout=(e) =>{
        alert('You are logged out');
        this.props.history.push('/logout');
      }//<button className="btn btn-success" onClick={this.logout}>Get allFeedback</button><br></br>
    render() {
        return (
            <div><button className="btn btn-success" onClick={this.logout}>Log Out </button><br></br>
                <h3>Welcome,  {this.state.user.fullname}</h3>
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
                         <th>Bidding</th>
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
                                 <td><img src={scrap.scrapImage} alt="Scrap Image" width={150} height={150} /></td>
                                 <td><button className="btn btn-primary"  onClick={ () => this.addBid(scrap.id)}>Bid</button></td>
                             </tr>
                         )
                     }
                 </tbody>
                 </table>    
 {/* <div className="row"> <button className="btn btn-primary" onClick={this.loginpage}>Login</button></div>  
 <td><button className="btn btn-primary"  onClick={ () => this.deleteScrapPost(scrap.id)}>Delete</button></td>
*/}<div className="row">
<button className="btn btn-primary"  onClick={this.giveFeedback}>Give Feedback</button>
</div>
             </div>  
            </div>
        );
    }
}

export default ListScrapPostComponent;

