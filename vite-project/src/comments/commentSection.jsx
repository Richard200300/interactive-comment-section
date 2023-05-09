import { React, useState } from "react";
import Comments from "./commentsBox";
import { data } from "../Data/data";

function CommentSection() {
  const [userdata, setUserData] = useState({
    id: new Date().getTime().toString(),
    userName: "Julisomo",
    userimg: "image-juliusomo.png",
    text: "",
    date: "2 days ago",
    likes: 0,
    edit: false,
    master: true,
  });
  // const [isEditing, setIsEditing] = useState(userdata.edit);
  // const [editID, setEditID] = useState(null);

  /*data ia an existing array  of written data*/
  const [data1, setData1] = useState(data);
  const handleInputChange = (event) => {
    setUserData({
      ...userdata,
      [event.target.name]: event.target.value,
    });
  };
  function editmainItem(id) {
    setIsEditing(true);
    const specificItem = data1.find((item) => item.id === id);
    setEditID(id);
    setUserData({
      ...userdata,
      text: specificItem.text,
    });
  }
  // data1 is just setting data which is an array to a state

  const dataElement = data1.map((data) => {
    return (
      <Comments
        key={data.id}
        data={data}
        setData1={setData1}
        data1={data1}
        userdata={userdata}
        setUserData={setUserData}
        editmainItem={editmainItem}
      />
    );
  });

  function submitComment() {
    if (!userdata.text) {
    } else {
      setData1([...data1, userdata]);
      setUserData({
        ...userdata,
        id: new Date().getTime().toString(),
        text: "",
      });
    }
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
              className="userdpuserdata"
            />
          </div>
          <textarea
            name="text"
            value={userdata.text}
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
