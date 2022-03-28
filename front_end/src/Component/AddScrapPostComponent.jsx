import React, { Component } from 'react';
import ScrapPostService from '../services/ScrapPostService';

class AddScrapPostComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            city:'',
            weight:'',
            material:'',
            date:'',
            image:''

        }

        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeWeightHandler = this.changeWeightHandler.bind(this);
        this.changeMaterialHandler = this.changeMaterialHandler.bind(this);
        this.changeDateHandler = this.changeDateHandler.bind(this);
        this.changeImageHandler = this.changeImageHandler.bind(this);
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
        {material:event.target.value} 
      )};

      changeDateHandler =(event) => {this.setState(
        {date:event.target.value} 
      )};

      changeImageHandler =(event) => {this.setState(
        {image:event.target.value} 
      )};

      postScrapPost = (e) => {e.preventDefault();
      let scrappost = {city: this.state.city,
                      weight: this.state.weight,
                      material: this.state.material,
                      date: this.state.date,
                      image: this.state.image};
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
                          <div className="card-body">
                              <form>
                                  <div className="form-group">
                                      <label>City</label>
                                      <input placeholder='city' name='city' className='form-control' value={this.state.city} onChange={this.changeCityHandler}></input>
                                      <label>Weight</label>
                                      <input placeholder='weight' name='weight' className='form-control' value={this.state.weight} onChange={this.changeWeightHandler}></input>
                                      <label>Material Type</label>
                                      <input placeholder='material' name='material' className='form-control' value={this.state.material} onChange={this.changeMaterialHandler}></input>
                                      <label>Uploading Date</label>
                                      <input placeholder='date' name='date' className='form-control' value={this.state.date} onChange={this.changeDateHandler}></input>
                                      <label>Scrap Image</label>
                                      <input placeholder='image' name='image' className='form-control' value={this.state.image} onChange={this.changeImageHandler}></input>
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