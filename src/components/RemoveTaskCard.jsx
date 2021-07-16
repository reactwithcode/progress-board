import React from "react";

const RemoveTaskCard = (props) => {
  return (
    <>
      <button className="button delete-button" onClick={props.onRemove}>
        <a>Delete</a>
      </button>
    </>
  );
};

export default RemoveTaskCard;
