import React from 'react'
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div className='hero text-white'>
        <div className="text-center hero-content">
            <div className="max-w-lg">
                <div className="text-8xl font-bold mb-8">
                    Oops!
                </div>
                <div className="text-5xl mb-8">
                404 - Page Not Found
                </div>
                <Link to='/' className='text-white btn btn-warning btn-lg '>
                    <FaHome className='mr-2'/> Back To Home
                </Link>
            </div>
        </div>
    </div>
  )
}

export default NotFound