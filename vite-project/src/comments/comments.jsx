import { React, useState } from "react";
import likeICon from "../../public/icons/icon-plus.png";
import unLikeICon from "../../public/icons/icon-minus.png";
import replyIcon from "../../public/icons/icon-reply.png";

function Comments(props) {
  const [likes, setLikes] = useState(props.data.likes);
  const [reply, setReply] = useState(props.data.reply);
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

    {reply && (
      <section className="hidden-reply-section">
       
        <div>
          <textarea className="post-section"></textarea>
        </div>
        <button>Reply</button>
      </section>
    )}
    </section>
  );
}

export default Comments;
