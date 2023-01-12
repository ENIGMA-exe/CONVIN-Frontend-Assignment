
import Card from "./Card"
import { useDispatch, useSelector } from "react-redux";
import { DeleteBucket,SetFormOn,SetRecentBucket,SetBid} from "../Actions/action"


export default function Cardlist(){

  var dispatch = useDispatch()
  var recent_bucket = useSelector(state => state.recentBucket) //recent bucket
  var modal_data = useSelector(state => state.modalOperation) //handle modal

  var handleAddCard = ()=>{
      dispatch(SetFormOn("ac"))
  }

  return(
    
      <aside className="card-list">
          <div className="heading">
              {(recent_bucket !== null) && <p>{recent_bucket.name}</p>}
              {(recent_bucket !== null) && <button onClick={handleAddCard}>Add Card</button>}
          </div>
          
          <section className="card-section">
            {(recent_bucket === null)?
                <p>please choose a bucket</p>
              :recent_bucket.list.map((vd,index)=>{
                return <Card name={vd.name} id={vd.id} key={index} />
              })
            }
          </section>
      </aside>
    
  )
}