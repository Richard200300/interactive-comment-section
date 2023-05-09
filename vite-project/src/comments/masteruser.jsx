import React from "react";

function Masteruser({
  setDeleteComment,
  master,
  setReply,
  editmainItem,
  dataID,
}) {
  return (
    <React.Fragment>
      {master ? (
        <div className="flex atc edit-btns">
          <div
            className="flex atc bold-lg delete-cont"
            onClick={() => {
              setDeleteComment(true);
            }}
          >
            <img src="icon-delete.png" alt="icon-delete.png" />
            Delete
          </div>

          <div
            className="flex atc edit-cont bold-lg"
            // onClick={editmainItem(dataID)}
          >
            <img src={"icon-edit.png"} alt={"icon-edit.png"} />
            Edit
          </div>
        </div>
      ) : (
        <div
          className="flex atc reply-section pointer"
          onClick={() => {
            setReply(true);
          }}
        >
          <img src="icon-reply.png" alt="icon-reply.png" />
          <p className="bold-lg">Reply</p>
        </div>
      )}
    </React.Fragment>
  );
}

export default Masteruser;
