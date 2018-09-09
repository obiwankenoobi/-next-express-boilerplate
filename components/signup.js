import React, { Component } from 'react';
import { Input , Dimmer, Loader , Segment} from 'semantic-ui-react';
import MaterialBtn from '@material-ui/core/Button';
import Head from 'next/head'


import axios from 'axios'
import Login from './login'
import CircularProgress from '@material-ui/core/CircularProgress';

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

    componentDidMount() {
        if (localStorage.getItem('user')) {
            this.setState({
                isSigned:JSON.parse(localStorage.getItem('user')).isSigned,
                mount:true
            }, () => console.log(this.state.isSigned))
            console.log(JSON.parse(localStorage.getItem('user')))
        }
        this.setState({mount:true})
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

    isInputEmpty = () => {

        const {inputs, errors} = this.state;

        for (let key in inputs) {
            if (inputs[key].length == 0) {
                errors[key] = true;
            }
        }
        if (inputs.password.length < 6) {
            errors.password = true;
        }
        console.log('errors.password.length', errors.password)
        this.setState({errors}, () => console.log(this.state.errors))
    }

    cleanErrors = (name) => {
        const {errors} = this.state;
        errors[name] = false;
        this.setState({errors})
    }

    



    render() {
        return (
            <div >
            {style}
                <div>
                    <Head>
                        <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                    </Head>
                    <div className='center'>  
                        <h1>Signup</h1>  
                        <div >
                            <Input error={this.state.errors.email ? true : false} onChange={(e) => this.handleInput(e)} name='email' placeholder='email' className='center-input'/>                
                        </div>
                        <div >
                            <Input error={this.state.errors.password ? true : false} onChange={(e) => this.handleInput(e)} name='password' type='password' placeholder='password' className='center-input'/>           
                        </div>
                        {this.state.inputs.password.length < 6 && this.state.errors.password ? <label style={{color:'red'}}>pw must be at least 6 chars</label> : null}     
                        <br/>
                        <div >
                            <MaterialBtn onClick={() => this.props.signup(this.state, this.setState, this.isInputEmpty)} className='center-input'>Signup</MaterialBtn>                
                        </div>
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