
import {combineReducers} from 'redux'

import bucketOperation from './bucket_data'
import modalOperation from './form'
import recentBucket from './recent_bucket'
import recentPlayer from './recent_player'
import historyOperation from './history'

const rootReducer = combineReducers({
    bucketOperation,
    historyOperation,
    modalOperation,
    recentBucket,
    recentPlayer,
    historyOperation
})

export default rootReducer