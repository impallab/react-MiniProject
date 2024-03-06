import React from 'react'
// import { useState,useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // process-1 for fetching data:

    // const [data, setdata] = useState({});
    // useEffect(() => {
    //   try {
    //    await fetch("https://api.github.com/users/impallab")
    //     .then(res=>res.json())
    //     .then(data =>setdata(data))
    //   } catch (error) {
    //       alert(error);
    //       throw error;
    //     }
    // }, [])

    // process-2 for fetching data :
    const data = useLoaderData()
    
  return (
    <>
        <div  className="bg-violet-400 p-3 text-white text-lg font-extrabold">
            <span className='text-red-600 p-2 mr-4 '>Username:</span> {data.login} <br />
            <span className='text-red-600 p-2 mr-4 '>Followers:</span> {data.followers} <br />
            <span className='text-red-600 p-2 mr-4 '>Following:</span> {data.following}
            <img className="rounded-full inline ml-24 rotate-12"src={data.avatar_url} alt="profile" width={250} /> 

        </div>
    </>
  )
}


export const GithubInfo = async ()=>{
    try {
        const response = await fetch("https://api.github.com/users/impallab")
        .then((response)=>response.json());
        if(!response){
            throw new Error('Not found');
        };
        return response;
    } catch (error) {
        throw new  Error(`Error! ${error}`);
    }
}
export default Github