import Link from 'next/link'
import React, { Component } from 'react';


class index extends Component {
constructor(props) {
  super(props);
  this.state = {}
}


  render() {
    return(
      <div>
      {style}
        <ul>
          <Link href='/login'><a className='link'>Login</a></Link>
          <Link href='/signup'><a className='link'>Signup</a></Link>
        </ul>
        <h1 className='text-center'>Main app page</h1>
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

export default index;