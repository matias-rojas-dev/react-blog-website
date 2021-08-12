import React from 'react'
import '../assets/styles/single-post.css'

export const SinglePost = () => {
    return (
        <div className="singlePost_container">
            <div className="singlePost_wrapper">
                <img
                    className="singlePost_img"
                    src="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/11/estructura-de-post-new.png"
                    alt="Post img blog"
                />
                <h1 className="singlePost_title">
                    Title
                    <div className="singlePost_edit">
                        <i className="singlePost_icon fas fa-edit"></i>
                        <i className="singlePost_icon fas fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePost_info">
                    <span className="singlePost_info-author"><b>Author: Hola</b></span>
                    <span className="singlePost_info-date">Date</span>
                </div>
                <p className="singlePost_body">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}
