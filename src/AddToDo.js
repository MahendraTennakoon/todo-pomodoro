import React from "react";
import { createToDo } from "./factories";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(createToDo({ description: this.state.toDo }));
    this.setState({
      toDo: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      toDo: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            id="txt_add_todo"
            placeholder="Add todo"
            value={this.state.toDo}
            onChange={this.handleChange}
            autoComplete="off"
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;
