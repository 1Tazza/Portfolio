
const initialState = {
    darkMode: false

}


export default function rootReducer(state = initialState, action) {

    if(action.type === "DARK_MODE") {
       return {...state, darkMode : true}
    }

    else if(action.type === "DAY_MODE") {
        return {...state, darkMode : false}
     }

    else {return state}
}