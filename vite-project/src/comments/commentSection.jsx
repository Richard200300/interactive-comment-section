import { React, useState } from "react";
import Comments from "./comments";
import { data } from "../Data/data";

function CommentSection() {
  const [data1,setData1] = useState(data)

  const [dealings, setDealings] = useState([])

  const [userdata, setUserData] = useState({
    id: new Date().getTime().toString(),
    userName: "Julisomo",
    userimg: "image-juliusomo.png",
    text: "",
    date: "2 days ago",
    likes: 0,
    edit: false,
    master: true
  });
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
        setData1={setData1}
        data1={data1}
        userdata={userdata}
        setUserData={setUserData}
      />
    );
  });
  function submitComment() {

    if (userdata.text) {

     
      setData1([...data1,
        userdata])
        setUserData({
          ...userdata,
          id: new Date().getTime().toString(),
        text: ""
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
