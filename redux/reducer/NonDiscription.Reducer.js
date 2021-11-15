// type
const NON_REQUEST = "NON_REQUEST";
const NON_RESPONSE = "NON_RESPONSE";
const NON_ERROR = "NON_ERROR";


const initState = {
  data:null,
  error:null,
}

// action
export const non_request = (data) => {
  return {
    type:NON_REQUEST,
    payload:data,
  }
}

export const non_response = (data) => {
  return {
    type:NON_RESPONSE,
    payload:data
  }
}

export const non_error = (err) => {
  return {
    type:NON_ERROR,
    payload:err
  }
}

const nonReducer = (state=initState, action) => {
  switch(action.type){
    case NON_REQUEST:
      return {
        ...state,
      }

    case NON_RESPONSE:
       return {
         ...state,
         data:action.payload,
       }
    case NON_ERROR:
      return {
        ...state,
        error:action.error,
      }
    default:
      return state;
  }
}

export default nonReducer;