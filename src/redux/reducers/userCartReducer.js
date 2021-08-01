import { USER_CART, HISTORY_REMOVE, LOGIN_USER} from '../actions/types'


const initState = {

  userTotal: [],
  login: []
}

const userCartReducer = (state = initState, action) => {

    switch(action.type){

        case USER_CART:
            return {
                ...state,
                userTotal:  action.payload
            }

        case HISTORY_REMOVE:
            return {
                ...state,
                userTotal:  state.userTotal.filter(item => item._id !== action.payload.id)
            }
            case LOGIN_USER:
            return {
                ...state,
                login:  action.payload
            }

        default: 
            return state
    }

}

export default userCartReducer