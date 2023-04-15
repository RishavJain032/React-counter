
import React from 'react'
import { useSelector } from 'react-redux'


export default function Display() {

    const data = useSelector((data) => data.count)

  return (
    <div style={{alignItems:"center", marginTop:"100px"}}>
        <h1 className='display'>{data}</h1>
    </div>
  );
}