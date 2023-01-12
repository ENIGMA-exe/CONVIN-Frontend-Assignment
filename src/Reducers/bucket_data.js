
var initial_data = {
    total:0,
    isfetched:false,
    data:[]
}

export default function bucketOperation(state=initial_data,action){
    switch(action.type){

        case "SET-B-DATA":
            //console.log("apayload",action.payload.length)
            return {
                ...state,
                ["isfetched"]:true,
                ["data"]:action.payload,
                ["total"]:action.payload.length}

        case "UPDATE-B-LIST":
            var temp = [...state.data] //array of buckets

            temp.forEach((bkt,index)=>{
                if(bkt.id === action.payload.bid){
                    bkt.list = action.payload.list
                }
            })
            return {...state,['data']:temp}

        case "UPDATE-B":
            var temp = state.data
            temp.forEach((bkt,index)=>{
                if(bkt.id===action.payload.bid){
                    bkt.name = action.payload.name
                }
            })
            return {...state,['data']:temp}

        case "ADD-B":
            var temp = [...state.data]
            action.payload.id = state.total+1
            temp.push(action.payload)
            return {...state,['total']:state.total+1,["data"]:temp}

        case "DEL-B":
            var temp = [...state.data] //bucket array

            for(var i=0;i<temp.length;i++){
                if(temp[i].id === Number(action.payload)){
                    temp.splice(i,1);
                    break
                }
            }
            return {...state,['data']:temp}

        case "MOVE-CARD":
            var temp_state = {...state}
            var index = -1;

            var mv_temp_bucket = state.data.filter((bkt,ind) => bkt.id === action.payload.mv_bid)[0]
            var cr_temp_bucket = state.data.filter((bkt,ind) =>{return bkt.id === action.payload.cr_bid})[0]
            var temp_card = cr_temp_bucket.list.filter((card,ind) =>{
                if(card.id === action.payload.card_id){
                    index = ind
                }
                return card.id === action.payload.card_id
            })[0]
            

            //delete card from temp current bucket
            cr_temp_bucket.list.splice(index,1)

            //updating card property
            temp_card.id = (mv_temp_bucket.list.length >0)?mv_temp_bucket.list[mv_temp_bucket.list.length-1].id + 1:1
            temp_card.bid = mv_temp_bucket.id

            //pushing to temp moving bucket
            mv_temp_bucket.list.push(temp_card)

            //set to the temp state
            temp_state.data.forEach((bkt,index)=>{
                if(bkt.id===cr_temp_bucket.id) temp_state.data[index] = cr_temp_bucket
                if(bkt.id===mv_temp_bucket.id) temp_state.data[index] = mv_temp_bucket
            })

            //return temp state
            return temp_state



        default:
            return state 
    }
}