const users = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        //para que me devuelva solo el token
        token: action.payload.token,
      };

    case 'GET_USER_INFO':
      return {
        ...state,
        user: action.payload.user,
      };

    default:
      return state;
  }
};

export default users;
