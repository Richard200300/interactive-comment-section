import { React, useState } from "react";
import DeleteComment from "./deleteComment";
import Masteruser from "./masteruser";
import Reply from "./reply";
import PostComment from "./postComment";
import Reaction from "./reaction";
function Comments({data, setData1, data1, userdata, editmainItem}) {


  
  const [likes, setLikes] = useState(data.likes);
  const [reply, setReply] = useState(data.reply);
  const [editID, setEditID] = useState(null);
  const [deleteComment, setDeleteComment] = useState(false);
  const [isEditing, setIsEditing] = useState(userdata.edit);

  /*comment holds the state of a Replied text*/
  const [comment, seComment] = useState({
    text: "",
  });

  //postComment is an empty array which will add users comment into the array
  const [postComment, setPostComment] = useState([]);

  // This handleInputChange handles replied input changes
  const handleInputChange = (event) => {
    seComment({
      ...comment,
      [event.target.name]: event.target.value,
    });
  };

  // editItem edits replied comment
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

  // removeItem removes replied comment
  const removeItem = (id) => {
    setPostComment(postComment.filter((item) => item.id !== id));
  };

  // removePost removes master user  comment
  const removepost = (id) => {
    const newArray = data1.filter((item) => item.id !== id);
    setData1(newArray);
    console.log(data1);
  };
  // submitData adds the comment to the array

  function submitData() {
    if (!comment.text) {
      console.log("Please input your text");
    } else if (comment.text && isEditing) {
      /*This returns a new array when text is edited */
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
      /* newComment defines a new comment with a special id*/
      const newComment = {
        id: new Date().getTime().toString(),
        title: comment.text,
      };
      /*setting existing array with new comment */
      setPostComment([...postComment, newComment]);

      seComment({
        ...comment,
        text: "",
      });
      console.log(postComment);
      setReply(false);
    }
  }

  return (
    <section>
      <section className="comment-container">
        <section>
          <div className="flex  main-post-section">
            {/* users reactions */}
            <article>
              <Reaction setLikes={setLikes} likes={likes} />
            </article>

            {/* second part of comment */}
            
            <div className="full-width ">
              <div className="flex atc jcSb user-info-main-cont">
                <div className="flex atc user-info-cont">
                  <img
                    src={data.userimg}
                    alt={data.userimg}
                    className="userdp"
                  />
                  <p className="bold-lg"> {data.userName}</p>
                  <p>{data.date}</p>
                </div>

                {/* Confirm delelte section  */}
                <article>
                  {deleteComment && (
                    <div>
                      <DeleteComment
                        setDeleteComment={setDeleteComment}
                        removepost={removepost}
                        dataID={data.id}
                      />
                    </div>
                  )}
                </article>

                {/* check to see if user is the master user */}
                <article>
                  <Masteruser
                    setDeleteComment={setDeleteComment}
                    master={data.master}
                    setReply={setReply}
                    editmainItem={editmainItem}
                    dataID={data.id}
                  />
                </article>
              </div>
              <p className="replied-paragraph bold-md">{data.text} </p>
            </div>
          </div>
        </section>
      </section>
      <article>
        <div className="bd-left">
          {/* PostComment is an array of replied comnment */}
          <PostComment
            userimg={userdata.userimg}
            postComment={postComment}
            userName={userdata.userName}
            otherUserName={data.userName}
            removeItem={removeItem}
            editItem={editItem}
          />
        </div>

        {/* Reply component is a textcomment that replies users comment */}
        <article>
          <Reply
            reply={reply}
            userImg={userdata.userimg}
            text={comment.text}
            handleInputChange={handleInputChange}
            submitData={submitData}
            isEditing={isEditing}
          />
        </article>
      </article>
    </section>
  );
}

export default Comments;
