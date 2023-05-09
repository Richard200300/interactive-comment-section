import React from "react";

function Reply({
  reply,
  userImg,
  text,
  handleInputChange,
  submitData,
  isEditing,
}) {
  return (
    <React.Fragment>
      {reply && (
        <section className="hidden-reply-section">
          <div>
            <img src={userImg} alt={userImg} className="userdpuserdata" />
          </div>

          <div className="post-section1-cont1">
            <textarea
              className="post-section1"
              name="text"
              value={text}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button className="reply-btn bold-lg pointer" onClick={submitData}>
              {isEditing ? "Update" : "Reply"}
            </button>
          </div>
        </section>
      )}
    </React.Fragment>
  );
}

export default Reply;
