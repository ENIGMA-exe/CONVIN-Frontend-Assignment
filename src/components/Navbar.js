import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteBucket,SetFormOn,SetFormOff,SetRecentBucket} from "../Actions/action"

export default function Navebar(){
  var dispatch = useDispatch()

  var handleOnclick = (e)=>{
    dispatch(SetFormOn("ab"))
  }


    return(
      <nav>
          <Link to={'/history'}>
            <button>
                history
            </button>
          </Link>
          
          <button onClick={(e)=>{handleOnclick(e)}}>
              Create Bucket
          </button>
      </nav>
          
    )
}