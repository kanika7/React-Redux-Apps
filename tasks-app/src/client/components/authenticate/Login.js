import React, {Component} from 'react';
import auth from './auth';
import {Redirect} from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
          redirectToReferrer: false
        }
        this.login = this.login.bind(this);
    }

    login(e) {
        console.log("in login");
        e.preventDefault();
        auth.authenticate(this.email.value, this.password.value,() => {
            this.setState({ redirectToReferrer: true })
        })
    }
    
    render() {
        const { from } = this.props.location.state || { from: { pathname: '/' } }
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
            return (
                <Redirect to={from} />
            )
        }

        return (
            <div className="login row">
                <form id="loginForm" name="taskAppLogin" className="col-sm-4 loginForm">
                    <div className="col-sm-12">
                        <input type="email" ref={node => this.email=node} className="form-control" name="userId" placeholder="EMAIL"/>
                    </div>
                    <div className="col-sm-12">
                        <input type="password" ref={node => this.password=node} className="form-control" name="password" placeholder="PASSWORD"/>
                    </div>
                    <button type="submit" className="btn btn-primary col-sm-6" onClick={this.login}>LOGIN</button>
                </form>
            </div>
        )
    }
}

export default Login