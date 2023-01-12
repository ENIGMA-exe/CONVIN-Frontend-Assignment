
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SetFormOff,UpdateBucketLIst} from "../../Actions/action"

export default function EditCard(){

  var dispatch = useDispatch()
  let recent_bucket = useSelector(state => state.recentBucket)
  var modal_data = useSelector(state => state.modalOperation)

  var recent_card = recent_bucket.list.filter((crd,index)=>crd.id===modal_data.vid)[0]

  var [name,SetName] = useState(recent_card.name)
  var [url,SetUrl] = useState(recent_card.url)

  var handleClose = (e)=>{
    e.stopPropagation()
    dispatch(SetFormOff("ec"))
  }

  var handleOnChange = (e)=>{
    if(e.target.id === "name") SetName(e.target.value)
    else SetUrl(e.target.value)
  }

  var handleEdit = (e)=>{
    
    var temp_list = [...recent_bucket.list]
    temp_list.forEach((card,index)=> {
        if(card.id===recent_card.id){
          card.name = name
          card.url = url
        }
    });

    dispatch(UpdateBucketLIst({bid:recent_bucket.id,list:temp_list}))
  }

  return(
    <div className="box">
        <label htmlFor="edit-box">Edit Card</label>

        <input
        type="text" 
        placeholder="Name..."
        value={name}
        id="name"
        onChange={(e)=>{handleOnChange(e)}}
        />

        <input 
        type="text" 
        placeholder="URL..."
        value={url}
        id="url"
        onChange={(e)=>{handleOnChange(e)}}
        />

        <button onClick={(e)=>{handleEdit(e)}}>Edit Card</button>
        <button onClick={handleClose}>Close</button>
    </div>
  )
}