import { React, useState } from "react";
import Comments from "./comments";
import { data } from "../Data/data";

function CommentSection() {
  const [data1,setData1] = useState(data)
  const [userdata, setUserData] = useState({
    userName: "Julisomo",
    userimg: "../../public/avatars/image-juliusomo.png",
    text: "",
    truetext: "",
    date: "2 days ago",
    likes: 10,
  });
console.log(data1)
  const handleInputChange = (event) => {
    setUserData({
      ...userdata,
      [event.target.name]: event.target.value,
    });
  };

  const dataElement = data1.map((data) => {
    return (
      <Comments
        key={data.id}
        data={data}
        userdata={userdata}
        setUserData={setUserData}
      />
    );
  });
  function submitComment() {
    console.log(userdata);

  }
  return (
    <section className="data-container">
      {dataElement}

      <div>
        <div className="hidden-reply-section">
          <div>
            <img
              src={userdata.userimg}
              alt={userdata.userimg}
              className="userdp"
            />
          </div>
          <textarea
            name="text"
            onChange={handleInputChange}
            className="post-section"
            placeholder="write a comment...."
          ></textarea>
          <div>
            <button
              className="reply-btn bold-lg pointer"
              onClick={submitComment}
            >
              send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CommentSection;
