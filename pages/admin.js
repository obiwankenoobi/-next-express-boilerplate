import Link from 'next/link'
import Head from 'next/head'
import React, { Component } from 'react';
import Signup from '../components/signup'
import Login from '../components/login'
import isEmail from 'is-email'
import axios from 'axios'
import helper from '../server/config'
import MaterialBtn from '@material-ui/core/Button';
import Drawer from '../components/drawer'
import ResetPw from '../components/askResetPw';

class Admin extends Component {
    constructor(props) {
    super(props);
    this.state = {
        inputs: {
            password:'',
            email:''
        },
        errors: {isEmailErr:false},
        showDrawer:false,
        resetPwFlag:false
        }

    }

    static async getInitialProps (context) {
        const { reset } = context.query;
        console.log('reset' , context)
        return {reset}
    };
    

    componentDidMount() {
        console.log('this.props.reset', this.props.reset)

        // if there is <localStorage> object
        if (localStorage.getItem('user')) {
            console.log('accessToken' , JSON.parse(localStorage.getItem('user')).accessToken)
            this.setState({
                accessToken:JSON.parse(localStorage.getItem('user')).accessToken, // set <accessToken></accessToken> in state
                mount:true, // flag to render the view bt so it wonk flick between <Login/> and <Signup/> while updating <this.state.isSigned>
                isSigned:this.props.reset == 'true' ? true : JSON.parse(localStorage.getItem('user')).isSigned // check if user signed to know which component to render <Login/>  or <Signup/>
            })
        } else {
            this.setState({mount:true}) // turn mount flag even if there is no <localstorge> object
        }
    }
    
    signup = (
        state, // state object from the <Login/> component where the function getting called 
        isInputEmptyCB // validate if the input is empty cb
    ) => {

        const isEmail = this.emailValitade(state.inputs.email); // value to know if the email is valid with the input from the state of where its called
        isInputEmptyCB() // checking if input is empty

        if (state.inputs.email && isEmail && state.inputs.password && state.inputs.password.length >= 6) { // if email input exist && email valid && pw exist && pw length bigger then 6 fetch the login func
            axios.post(`${helper.server}/signup`, {
                username:state.inputs.email,
                password:state.inputs.password
            })
            .then(res => {
                if (res.data.name == 'UserExistsError') { // email exist error from mongo
                    console.log('email exist')
                    let errStatus = res.data.name; 
                    const {errors} = this.state;
                    errors.errStatus = errStatus;
                    this.setState({errors});
                } else {
                    console.log(res.data)
                    this.setState({isSigned:true} , () => {
                        localStorage.setItem('user', JSON.stringify({isSigned:true}))
                    })

                }
            }) 
            .catch(e => console.log(e))
        } else {
            console.log('couldnt do it')
        }
    }


    // login function
    login = (
        state, // state object from the <Login/> component where the function getting called
        isInputEmptyCB // validate if the input is empty cb
    ) => {
        const isEmail = this.emailValitade(state.inputs.email); // value to know if the email is valid with the input from the state of where its called
        isInputEmptyCB() // checking if input is empty


        if (state.inputs.email && isEmail && state.inputs.password) { // if email input exist && email valid && pw exist fetch the login func
            axios.post(`${helper.server}/login`, {
                username:state.inputs.email,
                password:state.inputs.password
            })
            .then(res => {
                if (res.data.accessToken) { // if <accessToken> is returned 
                    let oldStorage = JSON.parse(localStorage.getItem('user')); // assign the old storage to a variable 
                    localStorage.setItem('user', JSON.stringify({...oldStorage, accessToken:res.data.accessToken})) // merge the old storage with the new <accessToken> prop
                    this.setState({accessToken:res.data.accessToken}) // set the accessToken in state
                }
            }) 
            .catch(e => {
                // if there is n error - catching the response status to handle the error (usualy 401 for wrong data)
                let errStatus = e.response.status; 
                const {errors} = this.state;
                errors.errStatus = errStatus.toString()
                this.setState({errors})
            })
        } else if (isEmail == false) { // if email is wrong format add the error to the errors object in state
            const {errors} = this.state;
            errors.isEmailErr = true
            this.setState({errors})
        } else {
            console.log('couldnt do it')
        }
    }


    // logout - removing the access token from the localStorage
    logout = () => {
        let oldStorage = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('user', JSON.stringify({...oldStorage, accessToken:undefined}))
        this.setState({accessToken:undefined})
    }

    // validate if the input is valid email
    emailValitade = (email) => {
        return isEmail(email)
    }


    // open the side menu drawer
    toggleDrawerHandler = () => {
        this.setState({showDrawer:!this.state.showDrawer})
    } 

    // move between <Signup/> and <Login/>
    moveToSignupOrLogin = () => {
        this.setState({isSigned:!this.state.isSigned})
    }
    
    openResetPwHandler = () => {
        this.setState({resetPwFlag:!this.state.resetPwFlag})
    }

    askResetPassword = (email) => {
        if (email) {
            axios.post(`${helper.server}/askresetpw`, {
                email:email
            })
            .then((res) => {
                this.openResetPwHandler()
            })
        }
    }


  render() {
    return(
        <div>
        <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.3/semantic.min.css"></link>
        </Head>
        <Drawer 
            toggleDrawerHandler={this.toggleDrawerHandler}
            showDrawer={this.state.showDrawer}/>
            {
                this.state.mount ?
                <div>
                {
                    this.state.accessToken ? 
                    <div>
                    {style}
                    <div className='right'>
                        <MaterialBtn onClick={this.logout}>Logout</MaterialBtn>                        
                    </div>
                    <div className='left'>
                        <MaterialBtn className='center-btn'  onClick={this.toggleDrawerHandler}><i className="fas fa-bars"></i></MaterialBtn>                          
                    </div>
                    <br/>
                    <br/>
                      <h1 className='text-center'>Admin</h1>
                    </div> 
                    :
                    <div>
                        {
                            this.state.resetPwFlag ? 
                            <ResetPw askResetPassword={this.askResetPassword}/> 
                            :
                            <div>
                            {
                                this.state.isSigned ? 
                                    <Login
                                    signup={this.signup}
                                    login={this.login}
                                    errors={this.state.errors}
                                    moveToSignupOrLogin={this.moveToSignupOrLogin}
                                    openResetPwHandler={this.openResetPwHandler}
                                    /> 
                                    :
                                    <Signup
                                    signup={this.signup}
                                    login={this.login}
                                    errors={this.state.errors}
                                    moveToSignupOrLogin={this.moveToSignupOrLogin}
                                    />
                            }
                            </div>
                        }
                    </div>
        
                }
                </div> : null
            }
            </div>
    )
  }

}


let style = (
  <style>
    {`
      .text-center {
        text-align:center;
      }
      .link {
        margin:5px;
      }
      .right {
          float:right;
      }
      .left {
        float:left;
    }
      .center {
        width:100%;
        margin-left:auto;
        margin-right:auto;
        margin-top:5rem;
      }
      .center-btn {
        margin-left:auto;
        margin-right:auto;
        width:100%
    }
    .btn-container {
        margin-left:auto;
        margin-right:auto;
        width:100px;
    }
    `}
  </style>
)

export default Admin;