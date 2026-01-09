import React from 'react'
import WrapperDashboard from './_components/WrapperDashboard.jsx'

export default function layout({ children }) {
     
     
     return (
          <WrapperDashboard>
               {children}
          </WrapperDashboard>
     )
}
