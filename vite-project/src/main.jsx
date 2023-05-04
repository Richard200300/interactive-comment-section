import React from "react";
import ReactDOM from "react-dom/client";
import CommentSection from "./comments/commentSection";

import "./style/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <section className="main-cont">
      
      <CommentSection />
    </section>
  </React.StrictMode>
);
