import React, { Component } from 'react';
import { Input } from 'semantic-ui-react';
import MaterialBtn from '@material-ui/core/Button';
import { withAlert } from 'react-alert';
import isEmail from 'is-email'
class ResetPw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors:{},
            inputs:{
                emailReset:''
            }
        };
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
        //console.log(this.props.errors);
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

    askResetPasswordHandler = () => {
        const isValidEmail = this.emailValitade(this.state.inputs.emailReset)
        const {errors} = this.state;
        if (isValidEmail) {
            const {inputs} = this.state
            this.props.askResetPassword(this.state.inputs.emailReset)
            this.props.alert.show('check your email')
            inputs.emailReset = ''
            this.setState({inputs})
        } else {
            errors.emailReset = true;
            this.setState({errors})
        }

    }

        // validate if the input is valid email
        emailValitade = (email) => {
            return isEmail(email)
        }


    render() {
        return (
            <div >
            {style}
                <div className='center'>
                    <h1>Reset email</h1>  
                    <div >
                        <Input error={this.state.errors.emailReset ? true : false}  onChange={(e) => this.handleInput(e)} value={this.state.inputs.emailReset} name='emailReset' type='text' placeholder='enter email' className='center-input'/>           
                    </div> 
                    {this.state.errors.emailReset == true ? <label style={{color:'red'}}>email invalid</label> : null}      
                    <br/>
                    <div>
                        <MaterialBtn onClick={this.askResetPasswordHandler} color="primary" variant="outlined"  className='center-input'>Reset</MaterialBtn>              
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


export default withAlert(ResetPw);