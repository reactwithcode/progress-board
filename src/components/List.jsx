import React, { useContext } from "react";
import TaskCard from "./TaskCard";
import AddTaskForm from "./AddTaskForm";
import RemoveTaskCard from "./RemoveTaskCard";
import UpdateTaskForm from "./UpdateTaskForm";
import UpdateTitleForm from "./UpdateTitleForm";

export default function List(props) {
  const {
    cards,
    onDragStart,
    id,
    onUpdateTask,
    onRemove,
    onAdd,
    onUpdateTitle,
    onDragOver,
    title,
    onDrop,
  } = props;

  return (
    <div>
      <h2 className={`name-header name-${id}`}>
        {title} {`(${cards.length})`}
        <UpdateTitleForm formNum={id} onUpdateTitle={onUpdateTitle} />
      </h2>
      <ul className="list" onDragOver={onDragOver} onDrop={onDrop}>
        {cards.map((card, index) => {
          return (
            <li key={index}>
              <TaskCard {...card} onDragStart={onDragStart} />

              <UpdateTaskForm
                formNum={id}
                onUpdateTask={onUpdateTask}
                index={index}
              />
              <RemoveTaskCard onRemove={onRemove} />
            </li>
          );
        })}
        <li className="add-list-wrapper">
          <AddTaskForm formNum={id} onAdd={onAdd} />
        </li>
      </ul>
    </div>
  );
}
