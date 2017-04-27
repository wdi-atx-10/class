
export default function(state=[], action){
  switch(action.type){
    case 'ADD_TODO':

      // add a todo
      const newState = {
        msg: action.payload,
        id: Date.now()
      };

      console.log('newState: ', newState, state);

      return state.concat(newState)

    break;
    case 'REMOVE_TODO':
      // remove a todo
      return state.filter(todo => {
        return todo.id != action.payload;
      })

    break;
    default:
      return state;
    break;
  }
}
