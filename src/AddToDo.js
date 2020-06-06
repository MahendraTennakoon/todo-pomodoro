import React from "react";

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDo: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state.toDo);
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
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;
