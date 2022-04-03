import React, { Component } from 'react';
import ScrapPostService from '../services/ScrapPostService';

class AddScrapPostComponent extends Component {
    constructor(props){
        super(props)
        
    // var today = new Date(),

    // date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    var formatedMysqlString = (new Date ((new Date((new Date(new Date())).toISOString() )).getTime() - ((new Date()).getTimezoneOffset()*60000))).toISOString().slice(0, 19).replace('T', ' ');
console.log( formatedMysqlString );
        this.state = {
            city:'',
            weight:'',
            materialType:'',
            uploadingDate:formatedMysqlString,
            scrapImage:''

        }
        

        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.changeMaterialHandler = this.changeMaterialHandler.bind(this);
       // this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changescrapImageHandler = this.changescrapImageHandler.bind(this);
        this.postScrapPost = this.postScrapPost.bind(this);
        this.cancelScrapPost = this.cancelScrapPost.bind(this);

    }

    changeCityHandler =(event) => {this.setState(
      {city:event.target.value} 
    )};

    changeWeightHandler =(event) => {this.setState(
        {weight:event.target.value} 
      )};

      changeMaterialHandler =(event) => {this.setState(
        {materialType:event.target.value} 
      )};

      // changeDateHandler =(event) => {this.setState(
      //   {uploadingDate:event.target.value} 
      // )};

      changescrapImageHandler =(event) => {this.setState(
        {scrapImage:event.target.value} 
      )};

      postScrapPost = (e) => {e.preventDefault();
      let scrappost = {city: this.state.city,
                      weight: this.state.weight,
                      materialType: this.state.materialType,
                      uploadingDate: this.state.uploadingDate,
                      scrapImage: this.state.scrapImage};
                      console.log('scrap post info='+JSON.stringify(scrappost));

                      ScrapPostService.addScrapPost(scrappost).then(res =>{
                        this.props.history.push('/viewScrapPost');
                      });
      }

      cancelScrapPost(){
        this.props.history.push('/viewScrapPost');
      }

      


    render() {
        return (
            <div>
              <div className="container">
                  <div className="row">
                      <div className="card col-md-6 offset-md-3 offset-md-3">
                          <h2 className="text-center">Add Scrap Post</h2>
                          <h1>Welcome,{JSON.parse(localStorage.getItem("loggedinuser")).username}</h1>
                          <div className="card-body">
                              <form>
                                  <div className="form-group">
                                      <label>City</label>
                                      <input placeholder='city' name='city' className='form-control' value={this.state.city} onChange={this.changeCityHandler}></input>
                                      <label>Weight</label>
                                      <input placeholder='weight' name='weight' className='form-control' value={this.state.weight} onChange={this.changeWeightHandler}></input>
                                      <label>Material Type</label>
                                      <input placeholder='materialType' name='materialType' className='form-control' value={this.state.materialType} onChange={this.changeMaterialHandler}></input>
                                      {/* <label>Uploading Date</label>
                                      <input placeholder='uploadingDate' name='uploadingDate' className='form-control' value={this.state.uploadingDate} onChange={this.changeDateHandler}></input> */}
                                      <label>Scrap scrapImage</label>
                                      <input placeholder='scrapImage' name='scrapImage' className='form-control' value={this.state.scrapImage} onChange={this.changescrapImageHandler}></input>
                                      <button className="btn btn-success" onClick={this.postScrapPost}>Post</button>
                                      <button className="btn btn-danger" onClick={this.cancelScrapPost} style={{marginLeft : "10px"}}>Cancel</button>
                                  </div>
                              </form>
                          </div>
                    </div> 
                  </div>
              </div>
                
            </div>
        );
    }
}

export default AddScrapPostComponent;