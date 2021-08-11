import React from 'react'
import '../assets/styles/posts.css'
import { Post } from './Post'

export const Posts = () => {
    return (
        <div className="posts_container">
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    )
}
