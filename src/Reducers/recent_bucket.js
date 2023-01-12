
//var rb = null

export default function recentBucket(state=null,action){

    switch(action.type){
        case "SET-RB":
            return action.payload
        default:
            return state
    }
}