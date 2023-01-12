

export default function historyOperation(state = [],action){
    switch(action.type){
        case "SET-H":
            var temp_list = [...state]
            for(var i=0;i<temp_list.length;i++){
                if(temp_list[i].id === action.payload.id && temp_list[i].bid === action.payload.bid){
                    temp_list.splice(i,1)
                    break;
                }
            }

            temp_list.unshift(action.payload)
            return temp_list
        
        default:
            return state
    }
}