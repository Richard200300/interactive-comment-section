import { React, useState } from "react";
import Comments from "./comments";
import { data } from "../Data/data";

function CommentSection() {
  const [userdata, setUserData] = useState({
    userName: "juliusomo",
    userimg: "../../public/avatars/image-juliusomo.png",
    text: "",
    truetext: "",
    date: "2 days ago",
    likes1: 10,
  });
  const [commentLikes, setCommentLikes] = useState(userdata.likes1);

  const dataElement = data.map((data) => {
    return (
      <Comments
        key={data.id}
        data={data}
        userdata={userdata}
        setUserData={setUserData}
        commentLikes={commentLikes}
        setCommentLikes={setCommentLikes}
      />
    );
  });

  return (
    <section className="data-container">
      {dataElement}

      <form>
        <div className="post-section-container">
          <textarea className="post-section"></textarea>
        </div>
      </form>
    </section>
  );
}

export default CommentSection;
