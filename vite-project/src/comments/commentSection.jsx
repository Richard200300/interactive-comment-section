import React from "react";
import Comments from "./comments";
import { data } from "../Data/data";

function CommentSection() {
  const dataElement = data.map((data) => {
    return <Comments key={data.id} data={data} />;
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
