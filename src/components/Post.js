import React from 'react'
import '../assets/styles/post.css'

export const Post = () => {
    return (
        <div className="post_container">
            <img
                className="post_img"
                src="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/11/estructura-de-post-new.png"
                alt="Post img blog"
            />
            <div className="post_info">
                <div className="post_info-container">
                    <span className="post_item">coso</span>
                    <span className="post_item">coso</span>
                </div>
                <span className="post_title">This title</span>
                <hr />
                <span className="post_date">date</span>
            </div>

            <p className="post_body">
                Lorem Ipsum has df been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>

        </div>
    )
}
