import React, { Component } from 'react'
import ScrapPostService from '../services/ScrapPostService';

export default class ReportComponent extends Component {
    constructor(props) {
        super(props)
        
    this.state = {
        value: ''
      };
  
      this.handleChange = this.handleChange.bind(this);
      
    }
  
    handleChange=(event)=> {
      this.setState({value: event.target.value});
    }
  
    handleSubmit=(event)=> {
      alert('An Report was submitted: ' + this.state.value);
      event.preventDefault();
    }
    
    sendReport = (e) => {e.preventDefault();
      let report = {user: this.state.user,
        description: this.state.description,
                      
                };
                      console.log('user info='+JSON.stringify(report));

                      ScrapPostService.sendReport(report).then(res =>{
                        this.props.history.push('/viewScrapPost');
                      });
      }


  render() {
    return (
        <form >
          <label>
           Desciption :
            <textarea value={this.state.value} onChange={this.handleChange}/>
          </label>
          <input type="submit" value="Submit" onClick={this.sendReport} />
        </form>
      )
  }
}
