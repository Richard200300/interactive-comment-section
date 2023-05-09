import React from "react";

const DeleteComment = ({ setDeleteComment, removepost, dataID }) => {
  return (
    <React.Fragment>
      <div className="confirm-delete-container">
        <div className="delete-container">
          <h1>Delete comment</h1>
          <p>
            Are you sure you want to delete this comment? This will remove the
            content and can't be done{" "}
          </p>
          <div className="flex atc jcSb">
            <button
              className="cancel-btn"
              onClick={() => {
                setDeleteComment(false);
              }}
            >
              No, cancel
            </button>
            <button
              className="delete-btn"
              onClick={() => {
                setDeleteComment(false);
                removepost(dataID);
              }}
            >
              yes, delete
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default DeleteComment;
