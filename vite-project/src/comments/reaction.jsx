import React from "react";

function Reaction({setLikes, likes}) {
  return <React.Fragment>
     <div className="all-likes-container">
              <div
                className="like-post"
                onClick={() => {
                  setLikes((prevLikes) => prevLikes + 1);
                }}
              >
                <img
                  src="icon-plus.png"
                  alt="icon-plus.png"
                  className="like-icon"
                />
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
                <img
                  src="icon-minus.png"
                  alt="icon-minus.png"
                  className="like-icon"
                />
              </div>
            </div>

  </React.Fragment>;
}

export default Reaction;
