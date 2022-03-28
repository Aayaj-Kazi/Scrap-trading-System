import React, { Component } from 'react';
import ScrapPostService from '../services/ScrapPostService';

class ListScrapPostComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            scrappost: []
        }

        this.addScrapPost = this.addScrapPost.bind(this);
    }

    componentDidMount(){
        ScrapPostService.getScrapPost().then((res) => {
            this.setState({scrappost: res.data});
        });
    }

    addScrapPost(){
        this.props.history.push('/addScrapPost');
    }
    
    render() {
        return (
            <div>
             <h2 className="text-center">Scrap Posts</h2>
             <div className="row">
                 <button className="btn btn-primary" onClick={this.addScrapPost}>Add Scrap Post</button>
                 </div> 
             <div className="row">
             <table className="table table-striped table-bordered">
                 <thead>
                     <tr>
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

export default ListScrapPostComponent;

