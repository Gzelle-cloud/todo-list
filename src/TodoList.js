import { Component } from "react";
// import check from './check.gif';
import check from "./check.gif";
import completed from "./completed.png"

export default class TodoList extends Component {
 constructor() {
  super();
  this.state = {
    userInput: '',
    toDoList: []
  }
 }

 onChangeEvent(e) { 
  this.setState({userInput: e});
}

addItem(input) {
  if (input === '') {
    alert("Please, enter an item");
  }
  else {
    let listArray = this.state.toDoList;
    // listArray.push(input);
    listArray.push({text: input, completed: false});
    this.setState({toDoList: listArray, userInput: ''})
  }
}

deleteItem() {
  let listArray = this.state.toDoList;
  listArray = [];
  this.setState({toDoList: listArray})
}

// crossWord(event) {
  // const li = event.target;
  // li.classList.toggle('crossed');
  crossWord(index) {
  let listArray = this.state.toDoList;
    listArray[index].completed = !listArray[index].completed;
    this.setState({ toDoList: listArray });
}

onFormSubmit(e) {
  e.preventDefault();
}

 render() {
  return(
    <div>
      <form onSubmit={this.onFormSubmit}>
        <div className="input-group">
          <div className="container">
            <input type="text"
              placeholder="Type here"
              onChange={(e) => {this.onChangeEvent(e.target.value)}}
              value={this.state.userInput}/>
          </div>
          <div className="container">
              <button onClick={() => this.addItem(this.state.userInput)} className="btn btn-add">Add</button>
          </div>
        </div>
        
        <ul>
            {this.state.toDoList.map((item, index) => (
              <li 
              onClick={() => this.crossWord(index)} key={index}
              className={item.completed ? 'crossed' : ''}>

               {/* onClick={this.crossWord} key={index} */}
                <img
                src={item.completed ? completed : check} 
                // src={check} 
                width="30px" alt="check-mark"/>
                {/* <span> </span>{item} */}
                <span> </span>{item.text}
              </li>
            )
          )}
        </ul>
          <div className="container">
            <button onClick={() => this.deleteItem()} className="btn btn-delete">Delete</button>
          </div>
      </form>
    </div>
  )
 }
}