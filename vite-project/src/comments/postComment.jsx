import React,{useState} from "react";



function PostComment({ postComment,
  userimg,
  userName,
  otherUserName,
  removeItem,
  editItem
}) 
         {

 const [deleteComment, setDeleteComment] = useState(false);

  return (


    <div>
      {postComment.map((post, index) => {
        const { title, id } = post;
        return (
          <div key={index} className="replied-section flex">
            <div>
              {deleteComment && (
                <div className="confirm-delete-container">
                  <div className="delete-container">
                    <h1>Delete comment</h1>
                    <p>
                      Are you sure you want to delete this comment? This will
                      remove the content and can't be done{" "}
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
                      <button className="delete-btn" onClick={() => {
                        removeItem(id)
                        setDeleteComment(false)
                        }}>
                    yes, delete
                  </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="main-reply-section">
              <div className="flex atc jcSb user-info-main-cont">
                <div className="flex atc user-info-cont">
                  <img src={userimg} alt={userimg} className="userdp" />
                  <p className="bold-lg ur-username ">{userName}</p>
                  <span className="you-reply bold-lg">you</span>
                  <p>2 days ago</p>
                </div>
                <div className="flex atc edit-btns">
                  <div
                    className="flex atc bold-lg delete-cont"
                    onClick={() => {
                      setDeleteComment(true);
                    }}
                  >
                    <img src= "icon-delete.png" alt="icon-delete.png" />
                    Delete
                  </div>
                

                  <div className="flex atc edit-cont bold-lg" onClick={()=> editItem(id)}>
                    <img src="icon-edit.png" alt="icon-edit.png" />
                    Edit
                  </div>
                </div>
              </div>
              <p className="replied-paragraph">
                <span className="bold-lg username">@{otherUserName}</span>{" "}
                {title}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default PostComment;
