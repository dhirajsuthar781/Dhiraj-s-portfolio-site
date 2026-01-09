import React from 'react'
import WrapperHome from './_components/WrapperHome'
import ScrollToTop from '@/utils/hook/ScrollToTop'

export default function layout({ children }) {
     return (
          <WrapperHome>
               <ScrollToTop />
               {children}
          </WrapperHome>
     )
}
