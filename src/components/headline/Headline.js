import React from "react";

function Headline({ title }) {
  return (
    <>
      <h1 className="headline">{title}</h1>
      <span className="headline__line"></span>
    </>
  );
}

export default Headline;
