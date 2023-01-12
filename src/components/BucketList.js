import Bucket from "./Bucket"

import { useDispatch, useSelector } from "react-redux";
import { FetchBucket } from "../Actions/action";
// import { useEffect, useState } from "react";


export default function Bucketlist(){

  var dispatch = useDispatch()
  let bucket_data = useSelector(state => state.bucketOperation)

  if(bucket_data.data.length === 0 && !bucket_data.isfetched){
    dispatch(FetchBucket())
  }
  
  return(
      <aside className="bkt-list">
        {
          (bucket_data.data !== undefined)&&bucket_data.data.map((bkt,index)=>{
            return <Bucket key={index} name={bkt.name} id={bkt.id}/>
          })
        }
          
      </aside>
  )
}