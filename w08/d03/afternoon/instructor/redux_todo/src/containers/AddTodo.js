import React, {Component} from 'react';
import {connect} from 'react-redux';

/* allows us to pass action creators to our container */
import {bindActionCreators} from 'redux';
import addTodo from '../actions/add_todo';

class AddTodo extends Component {
  constructor(props){
    super(props)

    this.state = {
      input : ''
    }
  }

  addTodo(e){
    e.preventDefault();
    this.props.addTodo(this.state.input);
    this.setState({input: ''})
  }

  render(){
    return(
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Redux Todo</h1>

        <form onSubmit={this.addTodo.bind(this)} className="add-todo form-inline">

          <input value={this.state.input}
          onChange={ e => this.setState({ input: e.target.value }) }
          className="form-control" type="text" placeholder="Add a todo..." />

          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

/* takes the state, and puts in into the container / component */
function mapStateToProps(state){
  return {
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({
    addTodo: addTodo
  }, dispatch)
}


export default connect(null, mapDispatchToProps)(AddTodo);




//bottom
