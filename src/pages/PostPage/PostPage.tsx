import React from 'react'
import { CardPost } from '../../components/cardpost/CardPost';
import { CommentList } from '../../components/commentList/CommentList';
import { Modal } from '../../components/modal/Modal';
import { OwnerDetails } from '../../components/ownerDetails/OwnerDetails';
import { useFetchGet } from '../../hooks/useFetchGet';
import { DummyService } from '../../services/api/DummyService';
import { IPost } from '../../types/Post';
import './PostPage.css';
function PostPage() {
  const [posts,setPosts] = React.useState<Array<IPost>>([]);
  const [isModalOpenUser, setIsModalOpenUser] = React.useState(false)
  const [isModalOpenComments, setIsModalOpenComments] = React.useState(false)
  const [postSelected, setPostSelected] = React.useState<IPost>({} as IPost)
  const [postsFiltered, setPostsFiltered] = React.useState<Array<IPost>>([])
  const [currentComments, setCurrentComments] = React.useState<any>([])
  const dummyService = new DummyService()
  const onSeeUser= (post:IPost) => {
    setPostSelected(post)
    setIsModalOpenUser(true)
  }
  const onSeeComments= async(idPost:string) => {
    try {
      setCurrentComments([])
      setIsModalOpenComments(true)
      const {data} = await dummyService.getCommentsByPostId(idPost)
      setCurrentComments(data.data)
    } catch (error) {
      
    }
    //setPostSelected(post)

  }
// TODO HOOKS CUSTOM PERSIST IN LCAOLSOTRAGE, CSS FULL , PAGINATION
  React.useEffect(() => {
    (async()=>{
      const api = new DummyService();
      api.getPosts().then((res)=>{
        setPosts(res.data.data);
        setPostsFiltered(res.data.data);
        console.log("class-->",res.data);
      })
    })()
  }, []);
  const onFilterPosts = async(value:string)=>{
    if(value.length===0 || value===' '){
      setPostsFiltered(posts)
      return //early return
    }
    const postsFiltered = posts.filter((post:IPost)=>post.tags.includes(value.trim()))
    setPostsFiltered(postsFiltered)
  }
  return (
    <div className='posts-container' >
      <input onChange={(e)=>onFilterPosts(e.target.value)} type="text" placeholder="Search by tag" />
      {postsFiltered.map((post: IPost) => <CardPost 
      onSeeUser={onSeeUser} 
      onSeeComments={onSeeComments} 
      key={post.id} 
      post={post} />
      )}
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