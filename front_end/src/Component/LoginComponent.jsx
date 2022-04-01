import React, { Component } from 'react'
import AuthenticationService from '../services/AuthenticationService';

class LoginComponent extends Component {

    
    
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        this.handleChangeUsername = this.handleChangeUsername.bind(this)
        this.handleChangePassword = this.handleChangePassword.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }

    handleChangeUsername=(event)=> {
        this.setState(
            {
                
                  username  : event.target.value
            }
        )
    };

    

    handleChangePassword= (event)=> {
        this.setState(
            {
                
                password : event.target.value
            }
        )
    };

    loginClicked() {
        //in28minutes,dummy
        // if(this.state.username==='haneef' && this.state.password==='123'){
        //     AuthenticationService.processLoginForm(this.state.username, this.state.password)
        //     this.props.history.push(`/addScrapPost`)
        //     this.setState({showSuccessMessage:true})
        //     this.setState({hasLoginFailed:false})
        // }
        // else {
        //     this.setState({showSuccessMessage:false})
        //     this.setState({hasLoginFailed:true})
        // }
       
        // AuthenticationService
        //     .processLoginForm(this.state.username, this.state.password)
        //     .then(() => {
        //         //AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password)
        //         this.props.history.push('/addScrapPost')
        //     }).catch(() => {
        //         this.setState({ showSuccessMessage: false })
        //         this.setState({ hasLoginFailed: true })
        //     })

        AuthenticationService
            .processLoginForm(this.state.username, this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username, response.data.token)
                this.props.history.push(`/addScrapPost`)
            }).catch(() => {
                this.setState({ showSuccessMessage: false })
                this.setState({ hasLoginFailed: true })
            })

    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <div className="container">
                    <form>
                    {/*<ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed}/>*/}
                    {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                    {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                    {/*<ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/>*/}
                    User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChangeUsername} /><br></br>
                    Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChangePassword} /><br></br>
                    <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default LoginComponent