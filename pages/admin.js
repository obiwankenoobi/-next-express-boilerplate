import Link from 'next/link'
import React, { Component } from 'react';
import Signup from '../components/signup'
import Login from '../components/login'
import isEmail from 'is-email'
import axios from 'axios'
import helper from '../server/config'

class Admin extends Component {
    constructor(props) {
    super(props);
    this.state = {
        inputs: {
            password:'',
            email:''
        },
        errors: {}
        }
    }

    componentDidMount() {
        if (localStorage.getItem('user')) {
            console.log('accessToken' , JSON.parse(localStorage.getItem('user')).accessToken)
            this.setState({
                accessToken:JSON.parse(localStorage.getItem('user')).accessToken,
                mount:true
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
        isInputEmptyCB()
        console.log(isEmail)
        if (state.inputs.email && isEmail && state.inputs.password && state.inputs.password.length >= 6) {
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
            .catch(e => console.log(e))
        } else {
            console.log('couldnt do it')
        }
    }

    emailValitade = (email) => {
        return isEmail(email)
    }




    


  render() {
    return(
        <div>
            {
                this.state.mount ?
                <div>
                {
                    this.state.accessToken ? 
                    <div>
                    {style}
                      <h1>Admin</h1>
                    </div> 
                    :
                    <div>
                        {
                            this.state.isSigned ? 
                                <Login
                                signup={this.signup}
                                login={this.login}
                                errors={this.state.errors}/> 
                                :
                                <Signup
                                signup={this.signup}
                                login={this.login}
                                errors={this.state.errors}/>
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
    `}
  </style>
)

export default Admin;