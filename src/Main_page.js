import "./styles.css";
import "./components/modal/modal.css"

import { useDispatch, useSelector } from "react-redux";


import Navbar from './components/Navbar'
import BucketLIst from './components/BucketList'
import CardList from './components/CradList'

import Addbucket from './components/modal/AddBkt'
import EditBucket from './components/modal/EditBkt'

import Addcard from './components/modal/AddCrad'
import Editcard from './components/modal/EditCrad'

import MediaPlayer from "./components/modal/MediaPlayer";


export default function Main() {

  var dispatch = useDispatch()
  
  var modal_data = useSelector(state => state.modalOperation)

  return (
    <div className="App">

      {
        (modal_data.modal)&&<div className="modal">
          {(modal_data.ab)&&<Addbucket/>}
          {(modal_data.eb)&&<EditBucket/>}
          {(modal_data.ac)&&<Addcard/>}
          {(modal_data.ec)&&<Editcard/>}

          {(modal_data.mp)&&<MediaPlayer/>}
        </div>
      }

      <Navbar/>
      <section className="op">
        <BucketLIst/>
        <CardList/>
      </section>
    </div>
  );
}
