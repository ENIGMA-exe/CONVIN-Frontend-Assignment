
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetFormOff,UpdateBucketLIst} from "../../Actions/action"

export default function AddCard(){
  var dispatch = useDispatch()
  var recent_bucket = useSelector(state => state.recentBucket)

  var [value,setValue] = useState("")
  var [url,setUrl] = useState("")

  var handleUpdate = (e)=>{
      console.log(recent_bucket)
      var temp = {
        id:recent_bucket.list.length+1,
        bid:recent_bucket.bid,
        name:value,
        url:url
      }

      recent_bucket.list.push(temp)

      dispatch(UpdateBucketLIst({list:recent_bucket.list,bid:recent_bucket.bid}))
  }

  var handleClose = ()=>{
    dispatch(SetFormOff("ac"))
  }

  var handleOnchange = (e)=>{
      if(e.target.id==="name")setValue(e.target.value)
      else setUrl(e.target.value)
  }



  return(
    <div className="box">
        <label htmlFor="box">Add Card</label>

        <input 
        type="text" 
        placeholder="Name..." 
        value={value} 
        id="name"
        onChange={(e)=>{handleOnchange(e)}}
        />

        <input 
        type="text" 
        placeholder="URL..." 
        value={url} 
        id="url"
        onChange={(e)=>{handleOnchange(e)}}
        />

        <button onClick={handleUpdate}>Add Card</button>
        <button onClick={handleClose}>Close</button>
    </div>
  )
}