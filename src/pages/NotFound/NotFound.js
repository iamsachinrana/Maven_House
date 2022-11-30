import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <section className="flex justify-center items-center flex-col min-h-screen">
      <div className="container">
       <div className="text-center">
                <h1 className="relative z-10">404</h1>
              </div>
              <div className="text-center">

                <img className='mx-auto w-[600px] my-[-80px]' src="/images/static/not-found.gif" alt="" />
                <h3 className="h2">
                  Look like you're lost
                </h3>

                <p>the page you are looking for not available!</p>

                <Link to="/" className="bg-blue-500 font-semibold px-8 py-3 center text-white rounded-xl block mx-auto mt-8 w-fit">Go to Home</Link>
              </div>
      </div>
    </section>
  )
}
export default NotFound