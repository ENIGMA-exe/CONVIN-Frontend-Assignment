
import { SetFormOff,UpdateBucket} from "../../Actions/action"
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

export default function EditBucket(){

  var dispatch = useDispatch()
  let bucket_data = useSelector(state => state.bucketOperation)
  var modal_data = useSelector(state => state.modalOperation)

  var bkt = bucket_data.data.filter((bkt,index)=>bkt.id===Number(modal_data.bid))
  var [value,SetValue] = useState(bkt[0].name)

  var handleClose = (e)=>{
    dispatch(SetFormOff("eb"))
  }

  var handleChange = (e)=>{
    SetValue(e.target.value)
  }

  var handleUpdate = (e)=>{
      var temp = bkt[0]
      temp.name = value
      dispatch(UpdateBucket({data:temp,bid:modal_data.bid}))
  }

  return(
    <div className="create-bucket">
        <label htmlFor="title">Update Bucket</label>

        <input 
          type="text" 
          placeholder="Bucket Name..."
          value={value}
          onChange={(e)=>{handleChange(e)}}
        />
        
        <button onClick={(e)=>{handleUpdate(e)}}>Update Bucket</button>
        <button onClick={(e)=>{handleClose(e)}}>Close</button>
    </div>
  )
}