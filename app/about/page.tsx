import React from 'react'
import { jost } from '../layout'
import { About } from '../components/about'

const Page = () => {
  return (
    <div
    className={`${jost.className} flex items-center min-h-screen flex-col p-2 w-11/12 md:w-3/4 text-white`}
  >
    <About />

    </div>
  )
}
export default Page