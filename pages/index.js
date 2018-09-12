import Link from 'next/link'
import React, { Component } from 'react';


class index extends Component {
constructor(props) {
  super(props);
  this.state({
    accessToken:this.props.accessToken
  })
}


  render() {
    return(
      <div>
      {style}
        <ul>
          <Link href='/login'><a className='link'>Login</a></Link>
          <Link href='/signup'><a className='link'>Signup</a></Link>
        </ul>
        <h1 className='text-center'>Comments panel</h1>
      </div>
    )
  }

}

Index.getInitialProps = async () => { // getInitialProps is a Next method to get props to be fetched to the page when its render
  return {
    accessToken:JSON.parse(localStorage.getItem('user')).accessToken
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

export default index;