import { React, useState, useEffect } from "react";
import likeICon from "../../public/icons/icon-plus.png";
import unLikeICon from "../../public/icons/icon-minus.png";
import replyIcon from "../../public/icons/icon-reply.png";

function Comments(props) {
  const [likes, setLikes] = useState(props.data.likes);
  const [reply, setReply] = useState(props.data.reply);
  const [postComment, setPostComment] = useState([]);

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
  }



  return (
    <section>
      <section className="comment-container">
        <section>
  
          <div className="flex atc main-post-section">
            <div>
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
              <div className="flex atc jcSb">
                <div className="flex atc">
                  <img src={props.data.userimg} alt={props.data.userimg} />
                  <p> {props.data.userName}</p>
                  <p>{props.data.date}</p>
                </div>
                <div
                  className="flex atc reply-section"
                  onClick={() => {
                    setReply(true);
                  }}
                >
                  <img src={replyIcon} alt={replyIcon} />
                  <p>Reply</p>
                </div>
              </div>
              <p className="text">{props.data.text} </p>
            </div>
          </div>
        </section>
      </section>
      {postComment.map((posts, index) => {
        const { text, userName } = posts;
        return (
          <div key={index}>
       
            <p>@{props.data.userName} {text}</p>
          </div>
        );
      })}
      {reply && (
        <section className="hidden-reply-section ">
          <img
            src={props.userdata.userimg}
            alt={props.userdata.userimg}
            className="user-img"
          />
          <button className="send-reply-btn" onClick={submitData}>
            Reply
          </button>
          <div>
            <textarea
              className="post-section1"
              name="text"
              value={props.userdata.text}
              onChange={handleInputChange}
            ></textarea>
          </div>
        </section>
      )}
    </section>
  );
}

export default Comments;
