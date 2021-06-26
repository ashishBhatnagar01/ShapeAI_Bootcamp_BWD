import React from "react";
function Info() {
  return (
    <div>
      <div className="note">
        <h1>JavaScript with React JS</h1>
        <p>Details: Front End with React JS</p>
        <p>
          Current Date: {new Date().getDate()}-{new Date().getMonth() + 1}-
          {new Date().getFullYear()}
        </p>
      </div>
      <div className="note">
        <h1>JavaScript with React JS</h1>
        <p>Details: Front End with React fg</p>
        <p>
          Current Date: {new Date().getDate()}-{new Date().getMonth() + 1}-
          {new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
}
export default Info;
