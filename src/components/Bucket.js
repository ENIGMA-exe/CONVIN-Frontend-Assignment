//SetModalOn,SetModalOff
import { DeleteBucket,SetFormOn,SetRecentBucket,SetBid} from "../Actions/action"
import { useDispatch, useSelector } from "react-redux";

export default function Bucket(props){
  var dispatch = useDispatch()
  let bucket_data = useSelector(state => state.bucketOperation)

  //...............event methods.................
  var handleDelete = (e)=>{
    e.stopPropagation()
    
    dispatch(DeleteBucket(e.target.parentElement.parentElement.parentElement.id))
    dispatch(SetRecentBucket(null))
  }

  var handleEdit = (e)=>{
    e.stopPropagation()
    var bucket_id = e.target.parentElement.parentElement.parentElement.id
    
    dispatch(SetFormOn("eb"))
    dispatch(SetBid(bucket_id))

  }

  var handleRecentBucket = (e)=>{
      var bucket_id = (e.target.id)?e.target.id:e.target.parentElement.id
      var rb = bucket_data.data.filter((bkt,index)=>(bkt.id=== Number(bucket_id)))
      dispatch(SetRecentBucket(rb[0]))
  }

  
  return(
    <div className="bkt" id={props.id} onClick={(e)=>{handleRecentBucket(e)}}>
        <i className="fa-solid fa-caret-down edit">
                <div className="bkt-edit">
                    <div id="bk-ed" onClick={(e)=>{handleEdit(e)}}>Edit</div>
                    <div id="bk-del" onClick={(e)=>{handleDelete(e)}}>Delete</div>
                </div>
        </i>
        <i className="fa-solid fa-bucket"></i>
        <p>{props.name}</p>
    </div>
  )
}