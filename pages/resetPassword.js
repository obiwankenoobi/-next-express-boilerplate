import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import MaterialBtn from '@material-ui/core/Button';
import axios from 'axios';
import helper from '../server/config';
import Link from 'next/link';
import Head from 'next/head'




class ResetPwPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs:{
                password:'',
                confirmPassword:''
            },
            errors:{}
        };
    }

    static async getInitialProps (context) {
        const { email, token } = context.query
        console.log('context.query', context.query)
        return {email , token}
    };
    

    resetPassword = () => {
        this.isInputEmpty()
        axios.post(`${helper.server}/resetpassword`, {
            password:this.state.inputs.password,
            email:this.props.email,
            token:this.props.token
        })
        .catch(e => console.log('couldnt reset password'))
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
        // console.log(this.props.errors);
    }

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
            let hasError;
            for (let key in inputs) { // rotating through inputs object 
                if (inputs[key].length == 0 || inputs[key].length < 6) { // if an item inside this object is empty
                    errors[key] = true; // add the [key] (prop name) to the <errors> object 
                }
            }

            if (this.state.password != this.state.confirmPassword) {
                errors.password = true;
                errors.confirmPassword = true
            }


            this.setState({errors}, () => console.log(this.state.errors)) // update the state

            return hasError;
        }


    render() {
        return (
            <div >
            {style}
                <Head>
                    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
                </Head>
                <div className='center'>
                    <h1>Reset email</h1>  
                    <div >  
                        <Input error={this.state.errors.password ? true : false } onChange={(e) => this.handleInput(e)} name='password' type='password' placeholder='enter password' className='center-input'/>           
                    </div> 
                    {this.state.errors.password == true ? <label style={{color:'red'}}>min 6 chars</label> : null}      
                    <br/>
                    <div>
                    {
                        this.state.inputs.password.length >= 6 ? 
                        <Link href={{ pathname: '/admin', query: { reset: 'true' }}} as={'/admin'}>
                            <MaterialBtn onClick={this.resetPassword} color="primary" variant="outlined"  className='center-input'>Reset</MaterialBtn> 
                        </Link>  
                        :
                        <MaterialBtn onClick={this.resetPassword} color="primary" variant="outlined"  className='center-input'>Reset</MaterialBtn> 
                    }           
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


export default ResetPwPage;