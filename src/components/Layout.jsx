import React from 'react'
import { Header, Footer } from '@/components'
import '@/styles/components/Layout.css'

function layout({children}) {
  return (
    <div className="main">
      <Header/>
        { children }
      <Footer/>
    </div>
  )
}

export default layout
