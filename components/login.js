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
        // checking if there is any new errors to pass here and if there is - update the state
        if (prevProps.errors != this.props.errors) {
            this.setState({errors:this.props.errors})
        }
    }


    // add the inputs values in theire [name] in state
    handleInput = (e) => {
        let target = e.target;
        let name = target.name;
        this.cleanErrors(name); // on each type clean the errors to remove the "error" mark on each input
        let value = target.value;
        const {inputs} = this.state;
        inputs[name] = value;
        this.setState({inputs}, () => console.log(this.state.inputs[name])); // add the input in its proper property in the <inputs> object in state
        console.log(this.props.errors);
    }


    // // validate if the input is an email
    // emailValitade = (email) => {
    //     return isEmail(email)
    // }

    // clean the errors from the <errors> object in the state
    cleanErrors = (name) => {
        const {errors} = this.state;
        errors[name] = false;
        errors.errStatus = '';
        errors.isEmailErr = false;
        this.setState({errors});
    }



    // checking if the input is empty  
    isInputEmpty = () => {
        const {inputs, errors} = this.state; // grabing the <inputs> and <errors> objects from the state


        for (let key in inputs) { // rotating through inputs object 
            if (inputs[key].length == 0) { // if an item inside this object is empty
                errors[key] = true; // add the [key] (prop name) to the <errors> object 
            }
        }

        this.setState({errors}, () => console.log(this.state.errors)) // update the state
    }


    render() {
        console.log('this.state.errors', this.state.errors)
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
                        <MaterialBtn onClick={() => this.props.login(this.state, this.isInputEmpty)} className='center-input'>Login</MaterialBtn>                
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