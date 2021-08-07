import React from 'react'
import initialState from '../initialState.js'
import { Products } from '@/components'

const Home = () => (
    <>
      <Products products={initialState.products} />
    </>
  )

export default Home
