import React from "react";

export default function Spinner() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-primary mx-3" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-secondary mx-3" role="status">
          <span className="sr-only"></span>
        </div>
        <div className="spinner-grow text-success mx-3" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    </div>
  );
}
