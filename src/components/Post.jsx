import React from "react";

function Post({ value }) {
  const { userId, id, title, body } = value;
  return (
    <div>
      <h1>{userId}</h1>
      <h1>{id}</h1>
      <h1>{title}</h1>
    </div>
  );
}

export default Post;
