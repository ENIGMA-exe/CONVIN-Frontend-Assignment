
import { Action } from "@remix-run/router";
import axios from "axios";
import { bindActionCreators } from "redux";

//.........................MODAL RELATED Action..............

export function SetBid(data){
    return {
        type:"SET-B-ID",
        payload:data

    }
}

export function SetVid(data){
    
    return {
        type:"SET-V-ID",
        payload:data

    }
}


export function SetFormOn(data){
    return{
        type:"MODAL-ON",
        payload:data
    }
}
export function SetFormOff(data){
    return {
        type:"MODAL-OFF",
        payload:data
    }
}

// ........................BUCKRT RELATED Action.............

export function SetRecentBucket(data){
    
    return{
        type:"SET-RB",
        payload:data
    }
}

export function SetBucket(data){
    return {
        type:"SET-B-DATA",
        payload:data
    }

}

export function UpdateBucket(data){
    return{
        type:"UPDATE-B",
        payload:data
    }
}

export function UpdateBucketLIst(data){
    
    return{
        type:"UPDATE-B-LIST",
        payload:data
    }
}

export function AddBkt(data){
    return{
        type:"ADD-B",
        payload:data
    }
}
export function DeleteBucket(id){
    console.log("delete bucket action",id)
    return{
        type:"DEL-B",
        payload:id
    }

}

export function FetchBucket(){
    return (dispatch,getstate)=>{
        axios.get('http://localhost:3004/data')
        .then(res =>{
            
            dispatch(SetBucket(res.data))
            dispatch(SetRecentBucket(res.data[0]))
            dispatch(setPlayer(null))
        })
        .catch((e)=>{
            console.log("bucket",e)
        })
    }
}

// ..............................CARD Action....................................

export function moveCard(data){
    return {
        type:"MOVE-CARD",
        payload:data
    }
}

//...............................MEDIA PLAYER ACTION ..................

export function setPlayer(data){
    return{
        type:"SET-V",
        payload:data
    }
}

//..............................History action..........................

export function setHistory(data){
    return{
        type:"SET-H",
        payload:data
    }
}