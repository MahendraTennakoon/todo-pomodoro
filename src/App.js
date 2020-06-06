import React from "react";
import AddToDo from "./AddToDo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDos: [],
    };
  }

  addToDo = (toDo) => {
    this.setState((state) => {
      return { toDos: state.toDos.concat(toDo) };
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">todo-pomodoro</header>
        <AddToDo addToDo={this.addToDo} />
      </div>
    );
  }
}

export default App;
