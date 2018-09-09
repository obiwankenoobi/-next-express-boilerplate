import React from 'react'
import Link from 'next/link'



const index = () => (
  <div>
  {style}
    <ul>
      <Link href='/login'><a className='link'>Login</a></Link>
      <Link href='/signup'><a className='link'>Signup</a></Link>
    </ul>
    <h1 className='text-center'>Comments panel</h1>
  </div>
)

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