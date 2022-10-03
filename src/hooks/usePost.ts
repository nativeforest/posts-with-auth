import React from "react";
import { DummyService } from "../services/api/DummyService";
import { IPost } from "../types/Post";

export function usePost () {
  const [posts,setPosts] = React.useState<Array<IPost>>([]);
  const [isModalOpenUser, setIsModalOpenUser] = React.useState(false)
  const [isModalOpenComments, setIsModalOpenComments] = React.useState(false)
  const [postSelected, setPostSelected] = React.useState<IPost>({} as IPost)
  const [postsFiltered, setPostsFiltered] = React.useState<Array<IPost>>([])
  const [currentComments, setCurrentComments] = React.useState<any>([])
  const dummyService = new DummyService()
  const [isloadingPosts, setIsloadingPosts] = React.useState(false)
  React.useEffect(() => {
    (async()=>{
      const api = new DummyService();
      api.getPosts().then((res)=>{
        setIsloadingPosts(true)
        setPosts(res.data.data);
        setPostsFiltered(res.data.data);
        setIsloadingPosts(false)
      })
    })()
  }, []);

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

    const onFilterPosts = async(value:string)=>{
    if(value.length===0 || value===' '){
      setPostsFiltered(posts)
      return //early return
    }
    const postsFiltered = posts.filter((post:IPost)=>post.tags.includes(value.trim()))
    setPostsFiltered(postsFiltered)
  }
  }

  const onFilterPosts = async(value:string)=>{
    if(value.length===0 || value===' '){
      setPostsFiltered(posts)
      return //early return
    }
    const postsFiltered = posts.filter((post:IPost)=>post.tags.includes(value.trim()))
    setPostsFiltered(postsFiltered)
  }

  return {
    state:{
      setIsModalOpenComments,
      postSelected,
      isModalOpenUser,
      isModalOpenComments,
      postsFiltered,
      setIsModalOpenUser,
      currentComments,
      isloadingPosts
    },
    func:{
      onSeeUser,
      onSeeComments,
      onFilterPosts,
    }

  }

}