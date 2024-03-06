import React from 'react'
import { useParams } from 'react-router-dom'
const User = () => {
    const {id}=useParams()
  return (
    <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform transition-transform duration-300 hover:scale-105 hover:bg-indigo-600 hover:text-gray-100 flex items-center justify-center">
    <span className="mr-2 hover:text-red-600">User:</span>
    <span className="font-bold hover:text-red-600">{id}</span>
</div>
  )
}

export default User;

