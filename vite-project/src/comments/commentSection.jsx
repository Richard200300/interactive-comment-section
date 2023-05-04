import {React, useState} from "react";
import Comments from "./comments";
import { data } from "../Data/data";

function CommentSection() {
  const [userdata, setUserData] = useState({
    userName: "juliusomo",
    userimg: "../../public/avatars/image-juliusomo.png",
    text: '',
    truetext: '',
    date: "3, moonth ago"
  })
  const dataElement = data.map((data) => {
    return <Comments key={data.id} data={data} userdata={userdata} setUserData={setUserData}/>;
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
