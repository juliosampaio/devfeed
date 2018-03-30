const initialState = {

}

const signup = (state = initialState, { type }) => {
  switch (type) {
    case 'SIGN_UP_REQUEST':
      return {
        ...state
      }
    default:
      return state
  }
}

export default signup
