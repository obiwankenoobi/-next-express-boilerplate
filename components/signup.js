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
            errors:this.props.errors
         };
    }


    componentDidMount() {
        if (localStorage.getItem('user')) { // if there is an localStorage object
            this.setState({
                isSigned:JSON.parse(localStorage.getItem('user')).isSigned, // assign <isSigned> value to the state (if the user was signedup already)
                // mount:true // flag to render the view bt so it wonk flick between <Login/> and <Signup/> while updating <this.state.isSigned>
            }, () => console.log(this.state.isSigned))
            console.log(JSON.parse(localStorage.getItem('user')))
        }
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


    // clean the errors from the <errors> object in the state
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

    // clean the errors from the <errors> object in the state
    cleanErrors = (name) => {
        const {errors} = this.state;
        errors[name] = false;
        errors.errStatus = '';
        errors.isEmailErr = false;
        this.setState({errors});
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
                            <Input error={this.state.errors.email || this.state.errors.errStatus == 'UserExistsError' ? true : false} onChange={(e) => this.handleInput(e)} name='email' placeholder='email' className='center-input'/>                
                        </div>
                        <div >
                            <Input error={this.state.errors.password ? true : false} onChange={(e) => this.handleInput(e)} name='password' type='password' placeholder='password' className='center-input'/>           
                        </div>
                        {this.state.errors.errStatus == 'UserExistsError' ? <label style={{color:'red'}}>email exist</label> : null}  
                        {this.state.inputs.password.length < 6 && this.state.errors.password ? <label style={{color:'red'}}>pw must be at least 6 chars</label> : null}  
                        {this.state.errors.isEmailErr == true ? <label style={{color:'red'}}>email invalid</label> : null}   
   
                        <br/>
                        <div >
                            <MaterialBtn color="primary" variant="outlined" onClick={() => this.props.signup(this.state, this.isInputEmpty)} className='center-input'>Signup</MaterialBtn>   
                            <MaterialBtn color="primary" onClick={this.props.moveToSignupOrLogin} className='center-input'>already have account?</MaterialBtn>              
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