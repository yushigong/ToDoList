import React from 'react';

class TodoItem extends React.component {
	
	render(){
	  return(
	    <div>{this.props.content}</div>
	  )
	}
}

export default TodoItem;