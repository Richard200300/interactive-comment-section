import { React, useState } from "react";
import likeICon from "../../public/icons/icon-plus.png";
import unLikeICon from "../../public/icons/icon-minus.png";
import replyIcon from "../../public/icons/icon-reply.png";
import deleteIcon from "../../public/icons/icon-delete.png";
import editIcon from "../../public/icons/icon-edit.png";

function Comments(props) {
  const [likes, setLikes] = useState(props.data.likes);
  const [reply, setReply] = useState(props.data.reply);
  const [postComment, setPostComment] = useState([]);
  const [deleteComment, setDeleteComment] = useState(false);



  const handleInputChange = (event) => {
    props.setUserData({
      ...props.userdata,
      [event.target.name]: event.target.value,

    });
  };
  function submitData() {
    if (props.userdata.text) {
      const showdata = props.userdata;
      setPostComment((postComment) => {
        return [...postComment, showdata];
      });
      props.setUserData({
        ...props.userdata,
        text: "",
      });
    } else {
      console.log("please write somt ests");
    }
    setReply(false);
  }

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
            <div>
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
                <div
                  className="flex atc reply-section pointer"
                  onClick={() => {
                    setReply(true);
                    props.setUserData({
                      ...props.userdata,
                      text: "",
                    });
                  }}
                >
                  <img src={replyIcon} alt={replyIcon} />
                  <p className="bold-lg">Reply</p>
                </div>
              </div>
              <p className="replied-paragraph bold-md">{props.data.text} </p>
            </div>
          </div>
        </section>
      </section>
      <div className="bd-left">
        {postComment.map((posts, index) => {
          const { text, userName, userimg } = posts;
          return (
            <div key={index} className="replied-section flex">
              <div className="all-likes-container"> 
                <div
                  className="like-post"
                  onClick={() => {
                    props.setCommentLikes((prevLikes) => prevLikes + 1);
                  }}
                >
                  <img src={likeICon} alt={likeICon} className="like-icon" />
                </div>

                <div className="num-of-likes">{props.commentLikes}</div>

                <div
                  className="unlike-post"
                  onClick={() => {
                    props.commentLikes === 0
                      ? props.setCommentLikes(0)
                      : props.setCommentLikes((prevLikes) => prevLikes - 1);
                  }}
                >
                  <img
                    src={unLikeICon}
                    alt={unLikeICon}
                    className="like-icon"
                  />
                </div>
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
                    <div className="flex atc bold-lg delete-cont" onClick={()=> {
                      setDeleteComment(true)
                    }}>
                      <img src={deleteIcon} alt={deleteIcon} />
                      Delete
                    </div>
                    <div className="flex atc edit-cont bold-lg">
                      <img src={editIcon} alt={editIcon} />
                      Edit
                    </div>
                  </div>
                </div>
                <p className="replied-paragraph">
                  <span className="bold-lg username">
                    @{props.data.userName}
                  </span>{" "}
                  {text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {reply && (
        <section className="hidden-reply-section">
          <div>
            <img
              src={props.userdata.userimg}
              alt={props.userdata.userimg}
              className="userdp"
            />
          </div>

          <div className="post-section1-cont1">
            <textarea
              className="post-section1"
              name="text"
              value={props.userdata.text}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div>
            <button className="reply-btn bold-lg pointer" onClick={submitData}>
              Reply
            </button>
          </div>
        </section>
      )}
      {deleteComment && (
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
              <button className="delete-btn">yes, delete</button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Comments;
