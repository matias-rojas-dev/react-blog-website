import React from 'react'
import '../../assets/styles/write-page.css'
export const WritePage = () => {
    return (
        <div className="write_absolute-container">
            <div className="write_container">
                <img
                    className="write_img"
                    src="https://www.rdstation.com/blog/wp-content/uploads/sites/2/2017/11/estructura-de-post-new.png"
                    alt="Post img blog"
                />
                <form className="write_form">
                    <div className="write_form-group">
                        <label
                            htmlFor="fileInput"
                        >
                            <i className="write_icon fas fa-plus" />
                        </label>
                        <input
                            type="file"
                            id="fileInput"
                            style={{ display: "none" }}
                        />
                        <input
                            type="text"
                            placeholder="Title"
                            id="fileInput"
                            className="write_input"
                            autoFocus={true}
                        />
                    </div>
                    <div className="write_form-group">
                        <textarea
                            placeholder="Write here"
                            type="text"
                            className="write_text"
                        >

                        </textarea>
                    </div>
                    <button className="write_button">Publish</button>
                </form>
            </div>
        </div>
    )
}
