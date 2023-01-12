
export default function recentPlayer(state=null,action){

    switch(action.type){
        case "SET-V":
            return action.payload
        default:
            return state
    }
}