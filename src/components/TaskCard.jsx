import React from "react";

const TaskCard = (props) => {
  const { timeId, taskText, onDragStart } = props;

  console.log("cardText", taskText);

  return (
    <div
      className="task-card"
      draggable="true"
      id={timeId}
      onDragStart={onDragStart}
    >
      {taskText}
    </div>
  );
};

export default TaskCard;
