import { React, useState } from "react";
import likeICon from "../../public/icons/icon-plus.png";
import unLikeICon from "../../public/icons/icon-minus.png";
import replyIcon from "../../public/icons/icon-reply.png";
import deleteIcon from "../../public/icons/icon-delete.png";
import editIcon from "../../public/icons/icon-edit.png";

import PostComment from "./postComment";
function Comments(props) {
  const [likes, setLikes] = useState(props.data.likes);
  const [reply, setReply] = useState(props.data.reply);
  const [editID, setEditID] = useState(null);
  const [deleteComment, setDeleteComment] = useState(false);
  const [isEditing, setIsEditing] = useState(props.userdata.edit);
  const [comment, seComment] = useState({
    text: "",
  });
  const [postComment, setPostComment] = useState([]);

  const handleInputChange = (event) => {
    seComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  function submitData() {
    if (!comment.text) {
      console.log("hello input your value");
    } else if (comment.text && isEditing) {
      console.log("this working...");
      setPostComment(
        postComment.map((item) => {
          if (item.id === editID) {
            return { ...item, title: comment.text };
          }
          return item;
        })
      );
      setReply(false);
      seComment({
        ...comment,
        text: "",
      });
      setEditID(null);
      setIsEditing(false);
    } else {
      const newComment = {
        id: new Date().getTime().toString(),
        title: comment.text,
      };
      setPostComment([...postComment, newComment]);

      seComment({
        ...comment,
        text: "",
      });
      console.log(postComment);
      setReply(false);
    }
  }
  const removeItem = (id) => {
    setPostComment(postComment.filter((item) => item.id !== id));
  };
  const removepost = (id) => {
    props.setData1(props.data1.filter((item) => item.id !== id));
  };
  const editItem = (id) => {
    setIsEditing(true);
    setReply(true);

    const specificItem = postComment.find((item) => item.id === id);
    setEditID(id);
    seComment({
      ...comment,
      text: specificItem.title,
    });
  };
  return (
    <section>
      <section className="comment-container">
        <section>
          <div className="flex  main-post-section">
            <div className="all-likes-container">
              <div
                className="like-post"
                onClick={() => {
                  setLikes((prevLikes) => prevLikes + 1);
                }}
              >
                <img src={likeICon} alt={likeICon} className="like-icon" />
              </div>

              <div className="num-of-likes">{likes}</div>

              <div
                className="unlike-post"
                onClick={() => {
                  likes === 0
                    ? setLikes(0)
                    : setLikes((prevLikes) => prevLikes - 1);
                }}
              >
                <img src={unLikeICon} alt={unLikeICon} className="like-icon" />
              </div>
            </div>
            <div className="all-likes-container1">
              <div
                className="like-post"
                onClick={() => {
                  setLikes((prevLikes) => prevLikes + 1);
                }}
              >
                <img src={likeICon} alt={likeICon} className="like-icon" />
              </div>

              <div className="num-of-likes">{likes}</div>

              <div
                className="unlike-post"
                onClick={() => {
                  likes === 0
                    ? setLikes(0)
                    : setLikes((prevLikes) => prevLikes - 1);
                }}
              >
                <img src={unLikeICon} alt={unLikeICon} className="like-icon" />
              </div>
            </div>
            <div className="full-width">
              <div className="flex atc jcSb user-info-main-cont">
                <div className="flex atc user-info-cont">
                  <img
                    src={props.data.userimg}
                    alt={props.data.userimg}
                    className="userdp"
                  />
                  <p className="bold-lg"> {props.data.userName}</p>
                  <p>{props.data.date}</p>
                </div>

                <div>
                  {deleteComment && (
                    <div className="confirm-delete-container">
                      <div className="delete-container">
                        <h1>Delete comment</h1>
                        <p>
                          Are you sure you want to delete this comment? This
                          will remove the content and can't be done{" "}
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
                              removepost(props.data1.id);
                              setDeleteComment(false);
                            }}
                          >
                            yes, delete
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {props.data.master ? (
                  <div className="flex atc edit-btns">
                    <div
                      className="flex atc bold-lg delete-cont"
                      onClick={() => {
                        setDeleteComment(true);
                      }}
                    >
                      <img src={deleteIcon} alt={deleteIcon} />
                      Delete
                    </div>

                    <div className="flex atc edit-cont bold-lg">
                      <img src={editIcon} alt={editIcon} />
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
                    <img src={replyIcon} alt={replyIcon} />
                    <p className="bold-lg">Reply</p>
                  </div>
                )}
              </div>
              <p className="replied-paragraph bold-md">{props.data.text} </p>
            </div>
          </div>
        </section>
      </section>
      <div className="bd-left">
        <PostComment
          userimg={props.userdata.userimg}
          postComment={postComment}
          userName={props.userdata.userName}
          otherUserName={props.data.userName}
          removeItem={removeItem}
          editItem={editItem}
        />
      </div>
      {reply && (
        <section className="hidden-reply-section">
          <div>
            <img
              src={props.userdata.userimg}
              alt={props.userdata.userimg}
              className="userdpuserdata"
            />
          </div>

          <div className="post-section1-cont1">
            <textarea
              className="post-section1"
              name="text"
              value={comment.text}
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
    </section>
  );
}

export default Comments;
