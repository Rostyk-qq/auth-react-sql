import React from "react";
import RenderPosts from "./renderPosts";
const IteratePosts = ({deletePost, posts, title}) => {
    return (
        <>
            <h1 style={{textAlign: 'center'}} >{title}</h1>
            {posts.map(el => 
                <div key={el.title}>
                    <RenderPosts id={el.id} title={el.title} body={el.body} deletePost={deletePost} />
                </div>
            )}
        </>
    )   
}
export default IteratePosts;