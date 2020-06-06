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
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

export default AddToDo;
