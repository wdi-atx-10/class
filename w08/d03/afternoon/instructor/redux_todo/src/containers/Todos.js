import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import removeTodos from '../actions/remove_todo';

class Todos extends Component {
  render(){
    console.log(this.props);

    const todos = this.props.todos.map(todo => {
      return (<li className="list-group-item" key={todo.id} style={{ overflow: 'auto'}}>
                {todo.msg}

                <button onClick={e => this.props.removeTodos(todo.id) }
                className="btn btn-danger" style={{ float: 'right'}}>Delete</button>

              </li>)
    });

    return(
      <div className="col-sm-6 col-sm-offset-3">
        <ul className="list-group" style={{ marginTop: '1em' }}>
          { todos }
        </ul>
      </div>
    )
  }
}

/*add some state to our container*/
function mapStateToProps(state){
  console.log('state: ', state)
  return {
    todos: state.todos
  }
}

/* Add an action creator to our container Todos*/
function mapDispatchToProps(dispatch){
  return bindActionCreators({
    removeTodos: removeTodos
  },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);




// bottom
