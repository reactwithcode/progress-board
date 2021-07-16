import React from "react";

export default class UpdateTitleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
    };
  }

  onSubmit(event) {
    event.preventDefault();
    const titleText = this.textInput.value.trim();
    const listNumber = this.props.formNum;
    const index = this.props.index;
    console.log(titleText, listNumber, index);
    if (titleText && this.props.onUpdateTitle) {
      this.props.onUpdateTitle(titleText, listNumber, index);
    }
    this.textInput.value = "";
  }

  setEditing(editing) {
    this.setState({
      editing,
    });
  }

  render() {
    if (!this.state.editing) {
      return (
        <div
          className="open-update-button"
          onClick={() => this.setEditing(true)}
        >
          <button className="button update-button">
            <a>Update</a>
          </button>
        </div>
      );
    }
    return (
      <form className="card add-task-form" onSubmit={(e) => this.onSubmit(e)}>
        <input
          type="text"
          class="task-input"
          ref={(input) => (this.textInput = input)}
          aria-label="Add a task"
        />
        <div>
          <button className="button add-button">Update Task</button>
          <button
            className="button cancel-button"
            onClick={() => this.setEditing(false)}
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }
}
