import React, { useEffect, useMemo, useRef, useState } from "react";
import Modal from '../addPostsModal/Modal'
import { Service } from "../getPosts/getPosts";
import IteratePosts from "../postsActions/iteratePosts";
import Button from "../customElements/Button/button";
import Form from "../addPostsModal/Form";
import FilterPosts from "../sortFilterPosts/filterPosts";
import Input from "../customElements/Input/input";
import { SortedSelectedPosts } from "../sortFilterPosts/selectEndSortPosts";
import { useFetching } from "../OwnHooks/useFetching";
import { createButtonsMassive } from "../IntersectionObserverHelpers/createMassiveForButtons";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [isActive, setIsActive] = useState(false);

  const [sortValue, setSortValues] = useState('');
  const [inputValue, setInputValue] = useState('');

  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [allPages, setAllPages] = useState(0);


  const elementRender = useRef();
  const observer = useRef();
  setTimeout(() => {
    document.querySelector('.block').style.display = 'flex'
}, 1000)
  const [getPosts, isLoading, error] = useFetching(async () => {
      const post = await Service.getAll(limit, page);
      setPosts([...posts, ...post.data])
      setAllPages(Math.ceil(post.headers['x-total-count'] / limit))
  })
  useEffect(() => {
    if (isLoading) return;
    if(observer.current) observer.current.disconnect();

    const callBack = (enter, observ) => {
      if(enter[0].isIntersecting){
        setPage(page + 1)
      }
    }
    observer.current = new IntersectionObserver(callBack)
    observer.current.observe(elementRender.current);
  }, [isLoading])


  let buttons = createButtonsMassive(allPages);

  useEffect(() => {
      getPosts();
  }, [page])

  const postsSortedSelected = SortedSelectedPosts(inputValue, sortValue, posts)

  const deletePost = (post_id) => {
    setPosts([...posts].filter(el => el.id !== post_id))
  }
  
  const setNewPost = (post) => {
    const id = posts.length + 1
    setPosts([...posts, {id, ...post}])
  }

  return (
    <div className="app">
      <Modal isActive={isActive} setIsActive={setIsActive}>
        <Form setIsActive={setIsActive} getPost={setNewPost} />
      </Modal>
        <div className="container">
              <Button onClick={() => setIsActive(true)} >Add new post</Button>
              <br />
              <FilterPosts 
              params={
                [
                  {value: 'title', text: 'Title'}, 
                  {value: 'body', text: 'Description'}
                ]
              } title={'Sort by'} sortValue={sortValue} setSortValues={setSortValues} />
        </div>
        <div className="post__section">
          <Input value={inputValue} onChange={e => setInputValue(e.target.value)} style={{width: '100%', marginTop: '20px'}} placeholder={'Search...'} />
          <IteratePosts deletePost={deletePost} posts={postsSortedSelected} title={'Posts'} />
          <div className="block" ref={elementRender} style={{width: '100%', height: '100px', backgroundColor: 'transparent', display: 'none'}} ></div> 

          {/* {buttons.map(el => (
              <div style={{margin: '20px 10px', display: "inline-flex"}}  key={el} >
                <Button onClick={() => changePage(el)} >{el}</Button>
              </div>             
          ))}    */}
          {error ? <h1 style={{width:'100%', textAlign:"center"}} >{error}</h1> :
          isLoading && <h1 style={{textAlign:'center'}} >Loading...</h1>}
        </div>
    </div>
  );
}
export default Posts;