import React from 'react'
import Button from '../customElements/Button/button'
import {useNavigate} from 'react-router-dom'
const RenderPosts = (props) => {
    const navigate = useNavigate()
    return (
        <div className="post__container">
          <div className="current_post">
            <div className="left_side">
                <h2 className="username" >
                {props.id}.&ensp;{props.title}
                </h2>
                <span className="email">
                    {props.body}
                </span>
            </div>
            <div className="right_side">
                <Button onClick={() => props.deletePost(props.id)} >Delete post</Button>
                <Button onClick={() => navigate(`/posts/${props.id}`)} >Show info</Button>
            </div>
          </div>
        </div>
    )
}
export default RenderPosts;