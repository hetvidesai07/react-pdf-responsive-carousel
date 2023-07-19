import React from "react";
import Facebook from "../reactShare/Facebook";
import "./style.css";

const Page = () => {
  return (
    <div className="container">
      <div className="heading">
        <h2>Social Media Page</h2>
      </div>
      <div className="icons">
        <Facebook />
      </div>
    </div>
  );
};

export default Page;
