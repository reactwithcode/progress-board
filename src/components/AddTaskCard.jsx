import React from "react";

export default function TaskCard(props) {
  return (
    <div
      className="task-card"
      draggable="true"
      id={[props.timeId]}
      onDragStart={props.onDragStart}
    >
      {props.taskText}
    </div>
  );
}
