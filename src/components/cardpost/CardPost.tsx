import React from "react";
import { IPost } from "../../types/Post";
import "./CardPost.css";
import likeIcon from "../../shared/assets/icons/instagram-like-3507.svg";
import seeIcon from "../../shared/assets/icons/eye-view-6451.svg";
import { Tag } from "../tag/Tag";

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
        <div className="card-post-container__card-post-info">

          <div onClick={(e) => onSeeUser(post)}>{post.owner.firstName} <img className="card-post-container__see-icon" src={seeIcon} width='12px' title="see user details " /> </div>
          <div className="card-post-container__description">description: {post.text}</div>
          <div className="card-post-container__tags">
          {post.tags.map((tag: string, idx: number) => (
              <Tag key={idx} >{tag}</Tag>
          ))}
          </div>
          <div className="card-post-container__boot-section" >

          <div><img width={'20px'} src={likeIcon} alt='like icon' /> {post.likes}</div>
          <div className="card-post-container__btn-comments" onClick={(e) => onSeeComments(post.id)}>See comments</div>
          </div>
        </div>
        <div className="card-post-container__post-picture" ></div>
        <img
          className="card-post-container__image"
          
          src={post.image}
          alt="post imagen"
        />
      </div>
    </>
  );
}

export { CardPost };
