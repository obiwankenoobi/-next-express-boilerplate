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


class Admin extends Component {
    constructor(props) {
    super(props);
    this.state = {
        inputs: {
            password:'',
            email:''
        },
        errors: {isEmailErr:true},
        showDrawer:false,
        }

    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            console.log('accessToken' , JSON.parse(localStorage.getItem('user')).accessToken)
            this.setState({
                accessToken:JSON.parse(localStorage.getItem('user')).accessToken,
                mount:true,
                isSigned:JSON.parse(localStorage.getItem('user')).isSigned
            })
        }

    }
    
    signup = (state, setState , isInputEmptyCB) => {
        const isEmail = this.emailValitade(state.inputs.email);
        isInputEmptyCB()
        console.log(isEmail)
        if (state.inputs.email && isEmail && state.inputs.password && state.inputs.password.length >= 6) {
            axios.post(`${helper.server}/signup`, {
                username:state.inputs.email,
                password:state.inputs.password
            })
            .then(res => {
                if (res.data.code == 11000) {
                    console.log('email exist')
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

    login = (state, setState , isInputEmptyCB) => {
        const isEmail = this.emailValitade(state.inputs.email);
        console.log('state.inputs.email', state.inputs.email)
        isInputEmptyCB()
        console.log(isEmail)
        if (state.inputs.email && isEmail && state.inputs.password) {
            axios.post(`${helper.server}/login`, {
                username:state.inputs.email,
                password:state.inputs.password
            })
            .then(res => {
                if (res.data.accessToken) {
                    let oldStorage = JSON.parse(localStorage.getItem('user'));
                    localStorage.setItem('user', JSON.stringify({...oldStorage, accessToken:res.data.accessToken}))
                    this.setState({accessToken:res.data.accessToken})
                }
            }) 
            .catch(e => {
                let errStatus = e.response.status; // catching the response status to handle the error
                const {errors} = this.state;
                errors.errStatus = errStatus.toString()
                this.setState({errors})
            })
        } else if (isEmail == false) {
            const {errors} = this.state;
            errors.isEmailErr = true
            this.setState({errors})
        } else {
            console.log('couldnt do it')
        }
    }

    logout = () => {
        let oldStorage = JSON.parse(localStorage.getItem('user'));
        localStorage.setItem('user', JSON.stringify({...oldStorage, accessToken:undefined}))
        this.setState({accessToken:undefined})
    }

    emailValitade = (email) => {
        return isEmail(email)
    }


    toggleDrawerHandler = () => {
        this.setState({showDrawer:!this.state.showDrawer})
    } 

    


  render() {
    return(
        <div>
        <Head>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU" crossorigin="anonymous"/>
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
                            this.state.isSigned ? 
                                <Login
                                signup={this.signup}
                                login={this.login}
                                errors={this.state.errors}
                                /> 
                                :
                                <Signup
                                signup={this.signup}
                                login={this.login}
                                errors={this.state.errors}
                                />
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