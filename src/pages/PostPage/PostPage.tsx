import React from 'react'
import { CardPost } from '../../components/cardpost/CardPost';
import { CommentList } from '../../components/commentList/CommentList';
import { Modal } from '../../components/modal/Modal';
import { OwnerDetails } from '../../components/ownerDetails/OwnerDetails';
import { PostList } from '../../components/postList/PostList';
import { useFetchGet } from '../../hooks/useFetchGet';
import { usePost } from '../../hooks/usePost';
import { DummyService } from '../../services/api/DummyService';
import { IPost } from '../../types/Post';
import './PostPage.css';
function PostPage() {
  
  const {state:{
    setIsModalOpenComments,
    postSelected,
    isModalOpenUser,
    isModalOpenComments,
    postsFiltered,
    setIsModalOpenUser,
    currentComments,
    isloadingPosts

  },func:{
    onSeeComments,
    onSeeUser,
    onFilterPosts
  }} = usePost()
  
  return (
    <div className='posts-container' >
      <div className='posts-container__search' >
        <input className='input-search' onChange={(e)=>onFilterPosts(e.target.value)} type="text" placeholder="Search by tag" />
      </div>
      
        <PostList isLoading={isloadingPosts}>
        {postsFiltered.map((post: IPost) => <CardPost 
        onSeeUser={onSeeUser} 
        onSeeComments={onSeeComments} 
        key={post.id} 
        post={post} />
        )}
        </PostList>
        {/* <div className='pagination'> 1 de []</div> */}
      <Modal isOpen={isModalOpenUser} onClose={()=>setIsModalOpenUser(false)}>
        <OwnerDetails owner={postSelected.owner} />
      </Modal>
      <Modal isOpen={isModalOpenComments} onClose={()=>setIsModalOpenComments(false)}>
        <CommentList comments={currentComments}/>
      </Modal>
    </div>
  )
}

export  {PostPage}