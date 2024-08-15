import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    
    const data = useLoaderData()
    // useEffect(() => {
    //     fetch('https://api.github.com/users/barchakuz')
    //         .then((info) => info.json())
    //         .then((data) => setData(data));
    // }, []);

    return (
        <>

                <div className='flex flex-col items-center justify-center text-center'>
                    <h1>Name: {data.name}</h1>
                    <img src={data.avatar_url} alt="Avatar" className="my-4" width="100px" />
                    <h2>Bio: {data.bio}</h2>
                </div>
        </>
    );
}

export default Github;

export const githubLoader = async ()=>{
 const response = await fetch("https://api.github.com/users/barchakuz")
    return response.json()
}