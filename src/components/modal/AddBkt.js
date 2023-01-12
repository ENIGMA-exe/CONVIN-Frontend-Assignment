
import { DeleteBucket,SetFormOn,SetFormOff,AddBkt} from "../../Actions/action"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function AddBucket(){

  var dispatch = useDispatch()

  var [value,SetValue] = useState("")
  var dummy = {id:"",name:"",list:[]}

  var handleOnchange = (e)=>{
    SetValue(e.target.value)
  }

  var handleClose = (e)=>{
    dispatch(SetFormOff("ab"))
  }

  var handleAddBucket = (e)=>{
    dummy.name = value
    dispatch(AddBkt(dummy))
  }
  
  return(
    <div className="create-bucket">
        <label htmlFor="title">Add Bucket</label>

        <input 
        type="text" 
        placeholder="Bucket Name..." 
        value={value} 
        onChange={(e)=>{handleOnchange(e)}}/>

        <button onClick={(e)=>{handleAddBucket(e)}}>Add Bucket</button>
        <button onClick={(e)=>{handleClose(e)}}>Close</button>
    </div>
  )
}