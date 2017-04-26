import React, {Component} from 'react';

class AddTodo extends Component {
  render(){
    return(
      <div className="col-sm-6 col-sm-offset-3">
        <h1>Redux Todo</h1>
        <form className="add-todo form-inline">
          <input className="form-control" type="text" placeholder="Add a todo..." />
          <button className="btn btn-primary" type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default AddTodo;
