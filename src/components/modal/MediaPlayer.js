
import { useDispatch, useSelector } from "react-redux";
import { SetFormOff } from "../../Actions/action";


var MediaPlayer = (props)=>{

    var dispatch = useDispatch()
    var recent_card = useSelector(state => state.recentPlayer)

    // console.log(recent_card)

    var handleClose = ()=>{
        dispatch(SetFormOff('mp'))
    }

    return(
        <>  
            {(recent_card !== null)&&<h2 style={{color:"white",marginBottom:"1%"}}>{recent_card.name}</h2>
            }

            {(recent_card !== null)&&<iframe 
                    title="media"
                    src={recent_card.url} 
                    width="50%" 
                    height="50%" 
                    allow="autoplay"
                    frameBorder="0"
                    allowFullScreen={true}
                    seamless="">
                </iframe>
            }

            {(recent_card !== null)&&<button 
                style={{
                    width:'50%',
                    height:'8%',
                    marginTop:"2%",
                    fontSize:'1.5rem',
                    fontWeight:"bold",
                    cursor:"pointer",
                    background:'red',
                    border:"none",
                    color:"white"
                }}
                onClick={handleClose}
                >
                    Close
                </button>
            }
            
        </>

        
    )
}

export default MediaPlayer;