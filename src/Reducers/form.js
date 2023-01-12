
var initial_state = {
    bid:null,
    vid:null,

    modal:false,
    mp:true,
    ac:false,
    ec:false,
    ab:false,
    eb:false
}

export default function modalOperation(state=initial_state,action){

    switch(action.type){
        case "MODAL-ON":
            return {...state,["modal"]:true,[action.payload]:true}
        
        case "MODAL-OFF":
            return {...state,["modal"]:false,[action.payload]:false,["bid"]:null,["vid"]:null}

        case "SET-B-ID":
            return {...state,['bid']:action.payload}

        case "SET-V-ID":
            return {...state,['bid']:action.payload.bid,['vid']:action.payload.vid}

        default:
            return state
    }
}