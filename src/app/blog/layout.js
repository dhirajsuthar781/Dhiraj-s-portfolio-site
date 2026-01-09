import React from 'react'
import WrapperBlog from './_components/WrapperBlog'

export default function layout({ children }) {
     return (
          <WrapperBlog>
               {children}
          </WrapperBlog>
     )
}
