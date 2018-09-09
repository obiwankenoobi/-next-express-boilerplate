import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import MaterialBtn from '@material-ui/core/Button';
import Head from 'next/head'
import isEmail from 'is-email'
import helper from '../server/config'
import axios from 'axios'

class SignupPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputs: {
                password:'',
                email:''
            },
            errors: {}
         };
    }

    handleInput = (e) => {

        let target = e.target;
        let name = target.name;
        this.cleanErrors(name);
        let value = target.value;
        const {inputs} = this.state;
        inputs[name] = value;
        this.setState({inputs}, () => console.log(this.state.inputs[name]))
    }


    emailValitade = (email) => {
        return isEmail(email)
    }

    cleanErrors = (name) => {
        const {errors} = this.state;
        errors[name] = false;
        this.setState({errors})
    }

    isInputEmpty = (...arg) => {
        const {inputs, errors} = this.state;

        for (let key in inputs) {
            if (inputs[key].length == 0) {
                errors[key] = true;
            }
        }
        this.setState({errors}, () => console.log(this.state.errors))
    }

    signup = () => {
        const isEmail = this.emailValitade(this.state.inputs.email);
        this.isInputEmpty()
        console.log(isEmail)
        if (this.state.inputs.email && isEmail && this.state.inputs.password && this.state.inputs.password.length >= 6) {
            axios.post(`${helper.server}/signup`, {
                username:this.state.inputs.email,
                password:this.state.inputs.password
            })
            .then(res => {
                if (res.data.code == 11000) {
                    console.log('email exist')
                } else {
                    console.log(res.data)
                }
            }) 
            .catch(e => console.log(e))
        } else {
            console.log('couldnt do it')
        }
    }

    render() {
        return (
            <div >
            {style}
            <Head>
                <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
            </Head>
                <div className='center'>  
                    <div >
                        <Input error={this.state.errors.email ? true : false} onChange={(e) => this.handleInput(e)} name='email' placeholder='email' className='center-input'/>                
                    </div>
                    <div >
                        <Input error={this.state.errors.password ? true : false} onChange={(e) => this.handleInput(e)} name='password' type='password' placeholder='password' className='center-input'/>                
                    </div>
                    <div >
                        <MaterialBtn onClick={this.signup} className='center-input'>Signup</MaterialBtn>                
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

export default SignupPage;