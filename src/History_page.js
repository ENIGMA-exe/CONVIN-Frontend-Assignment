import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { setPlayer,SetFormOn,setHistory} from "./Actions/action";

import MediaPlayer from "./components/modal/MediaPlayer";

export default function History() {

  var dispatch = useDispatch()
  
  var modal_data = useSelector(state => state.modalOperation)
  let h_data = useSelector(state=>state.historyOperation)

  var handleOnclick = (e)=>{
    var index = Number(e.target.id)
    var card = h_data[index]

    console.log("his",card)

    dispatch(setPlayer(card))
    dispatch(SetFormOn('mp'))
    dispatch(setHistory(card))
  }


  return (
    <>    
        <Link to={'/'}>
            Main page
        </Link>
          {
            (modal_data.modal)&&<div className="modal">
              {(modal_data.mp)&&<MediaPlayer/>}
            </div>
          }
        
        <div className='hp'>
            {
              h_data.map((card,index)=>{
                return(
                  <div className='hsection' key={index} id={index} onClick={(e)=>{handleOnclick(e)}}>
                      <div className='vname'>{card.name}</div>
                  </div>
                )
              })
            }
        </div>
    </>
  )
}
