// type
const COMP_REQUEST = "COMP_REQUEST";
const COMP_RESPONSE = "COMP_RESPONSE";
const COMP_ERROR = "COMP_ERROR";


const initState = {
  data:null,
  error:null,
}

// action
export const comp_request = (data) => {
  return {
    type:COMP_REQUEST,
    payload:data,
  }
}

export const comp_response = (data) => {
  return {
    type:COMP_RESPONSE,
    payload:data
  }
}

export const comp_error = (err) => {
  return {
    type:COMP_ERROR,
    payload:err
  }
}

const compReducer = (state=initState, action) => {
  switch(action.type){
    case COMP_REQUEST:
      return {
        ...state,
      }

    case COMP_RESPONSE:
       return {
         ...state,
         data:action.payload,
       }
    case COMP_ERROR:
      return {
        ...state,
        error:action.error,
      }
    default:
      return state;
  }
}

export default compReducer;