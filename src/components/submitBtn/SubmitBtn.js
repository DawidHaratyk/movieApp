import React, { useEffect } from "react";

function SubmitBtn({ handleSubmit, dataRef }) {
  useEffect(() => {
    dataRef.current();
  }, []);

  return (
    <button className="movies__submit-btn" onClick={handleSubmit}>
      Search
    </button>
  );
}

export default SubmitBtn;
