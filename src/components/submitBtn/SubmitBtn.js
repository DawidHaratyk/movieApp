import React from "react";

function SubmitBtn({ handleSubmit }) {
  return (
    <button className="movies__submit-btn" onClick={handleSubmit}>
      Search
    </button>
  );
}

export default SubmitBtn;
