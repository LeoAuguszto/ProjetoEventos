const INITIAL_STATE = {
    UserEmail: '',
    UserLogado: 0,
  };
  
  function userRedux(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'LOG_IN':
        return {...state, UserLogado: 1, UserEmail: action.UserEmail };
      case 'LOG_OUT':
        return {...state, UserLogado: 0, UserEmail: null };
      default:
        return state;
    }
  }
  
  export default userRedux;