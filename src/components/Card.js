
import { useDispatch, useSelector } from "react-redux";
import { SetFormOn, SetVid, UpdateBucketLIst,moveCard,setPlayer,setHistory} from "../Actions/action"

export default function Card(props){

    var dispatch = useDispatch()
    var recent_bucket = useSelector(state => state.recentBucket)
    let bucket_data = useSelector(state => state.bucketOperation)

    var handleEdit = (e)=>{
        e.stopPropagation()
        console.log(recent_bucket)
        let vid = Number(e.target.parentElement.parentElement.parentElement.id)
        dispatch(SetFormOn("ec"))
        dispatch(SetVid({vid:vid,bid:recent_bucket.id}))
    }

    var handleDelete = (e)=>{
        let card_id = Number(e.target.parentElement.parentElement.parentElement.id)
        var temp_list = [...recent_bucket.list]

        // console.log(temp_list)
        for (var i=0;i<temp_list.length;i++){
            if(temp_list[i].id===card_id){
                temp_list.splice(i,1)
                break
            }
        }

        dispatch(UpdateBucketLIst({bid:recent_bucket.id,list:temp_list}))
    }

    var handleMove = (e)=>{
        var obj = {
            mv_bid: Number(e.target.id),
            cr_bid: recent_bucket.id,
            card_id: Number(props.id)
        }
        // console.log(obj)

        dispatch(moveCard(obj))
    }

    var handlePlay = (e)=>{
        var card = recent_bucket.list.filter((card,index)=>{
            return card.id === props.id
        })[0]
        dispatch(setPlayer(card))
        dispatch(SetFormOn('mp'))
        dispatch(setHistory(card))
    }

    return(
        <div className="card" id={props.id}>

            <i className="fa-solid fa-caret-down edit">
                <section className="card-eb">
                    <div id="eb1" onClick={(e)=>{handleEdit(e)}}>Edit</div>
                    <div id="eb2">  
                        Move To
                        <i className="fa-solid fa-angle-right"></i>
                        <div className="card-sub-eb">
                            {
                                bucket_data.data.map((bkt,index)=>{
                                    if(bkt.id !== recent_bucket.id){
                                        return <div key={index} id={bkt.id} onClick={(e)=>{handleMove(e)}}>{bkt.name}</div>
                                    }
                                })
                            }
                        </div>
                    </div>
                    <div id="eb3" onClick={(e)=>{handleDelete(e)}}>Delete</div>
                </section>
            </i>

            <i className="fa-solid fa-circle-play playlogo" onClick={handlePlay}></i>
            <p>{props.name}</p>
        </div>
    )
}