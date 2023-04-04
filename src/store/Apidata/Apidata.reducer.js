export default function (state = 0, action){
    switch(action.type){
        case 'apidata':
            return {...state, data : action.payload}
        default:
            return state
    }
}