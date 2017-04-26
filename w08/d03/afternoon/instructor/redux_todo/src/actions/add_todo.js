
/* action creator */
export default function(msg){
  // msg = 'hey whats up'

  /* Action */
  return {
    type: 'ADD_TODO',
    payload: msg
  }
}
