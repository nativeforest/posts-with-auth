import React from "react";
import { IPost } from "../../types/Post";
import "./CardPost.css";

function CardPost({
  post,
  onSeeComments,
  onSeeUser,
}: {
  post: IPost;
  onSeeComments: Function;
  onSeeUser: Function;
}) {
  return (
    <>
      <div className="card-post-container">
        <div>CardPost</div>
        <div onClick={(e) => onSeeUser(post)}>name {post.owner.firstName}</div>
        <div>likes: {post.likes}</div>
        {post.tags.map((tag: string, idx: number) => (
          <div style={{ color: "red" }} key={idx}>
            [{tag}]
          </div>
        ))}
        <div>description: {post.text}</div>
        <div onClick={(e) => onSeeComments(post.id)}>See comments</div>
        <img
          className="card-post-container__image"
          width={"100px"}
          src={post.image}
          alt=""
        />
      </div>
    </>
  );
}

export { CardPost };
