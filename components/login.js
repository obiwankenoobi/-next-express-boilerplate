import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import MaterialBtn from '@material-ui/core/Button';
import Head from 'next/head'
import isEmail from 'is-email'
import helpers from '../server/config'

import Link from 'next/link'
class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs: {
                password:'',
                email:''
            },
            errors:this.props.errors
         };
    }

    componentDidUpdate(prevProps) {
        console.log('componentDidUpdate')
        if (prevProps.errors != this.props.errors) {
            this.setState({errors:this.props.errors})
        }
    }

    handleInput = (e) => {

        let target = e.target;
        let name = target.name;
        this.cleanErrors(name);
        let value = target.value;
        const {inputs} = this.state;
        inputs[name] = value;
        this.setState({inputs}, () => console.log(this.state.inputs[name]));
        console.log(this.props.errors);
    }


    emailValitade = (email) => {
        return isEmail(email)
    }

    cleanErrors = (name) => {
        const {errors} = this.state;
        errors[name] = false;
        errors.errStatus = '';
        errors.isEmailErr = false;
        this.setState({errors});
    }

    isInputEmpty = () => {

        const {inputs, errors} = this.state;

        for (let key in inputs) {
            if (inputs[key].length == 0) {
                errors[key] = true;
            }
        }
        // if (inputs.password.length < 6) {
        //     errors.password = true;
        // }
        console.log('errors.password.length', errors.password)
        this.setState({errors}, () => console.log(this.state.errors))
    }

    pwErrMark = () => {

    }


    render() {
        // let pwErrMark;
        // if (this.state.errors.errStatus == '401') {
        //     pwErrMark = (<label style={{color:'red'}}>the password or email are wrong</label>)
        // }
        // if (this.state.errors.isEmail === false) {
        //     pwErrMark = (<label style={{color:'red'}}>email invalid</label>)
        // }
        console.log('this.state.errors.isEmailErr', this.state.errors.isEmailErr)

        return (
            <div >
            {style}
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            </Head>
                <div className='center'>
                    <h1>Login</h1>  
                    <div >
                        <Input error={this.state.errors.email ||this.state.errors.isEmailErr == true ? true : false} onChange={(e) => this.handleInput(e)} name='email' placeholder='email' className='center-input'/>                
                    </div>
                    <div >
                        <Input error={this.state.errors.password ? true : false} onChange={(e) => this.handleInput(e)} name='password' type='password' placeholder='password' className='center-input'/>           
                    </div>

                    {this.state.errors.errStatus == '401' ? <label style={{color:'red'}}>the password or email are wrong</label> : null}  
                    {this.state.errors.isEmailErr == true ? <label style={{color:'red'}}>email invalid</label> : null}      
                    <br/>
                    <div >
                        <MaterialBtn onClick={() => this.props.login(this.state, this.setState, this.isInputEmpty)} className='center-input'>Login</MaterialBtn>                
                    </div>
                </div>
            </div>
        );
    }
}



let style = (
    <style jsx='true'>
        {`
            .center-input {
                margin: 0 auto;
                width:100%;
                margin-top:0.5rem;
            }
            .center {
                width:40%;
                margin-left:auto;
                margin-right:auto;
                margin-top:5rem;
            }
        `}
    </style>
)

export default LoginPage;