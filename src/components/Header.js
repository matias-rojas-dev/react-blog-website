import React from 'react'
import '../assets/styles/header.css'

export const Header = () => {
    return (
        <div className="header_container">
            <div className="header_titles">
                <span className="header_topTitle">REACT NODE</span>
                <span className="header_bottomTitle">BLOG</span>
            </div>
            <img
                className="header_img"
                src="http://1.bp.blogspot.com/--p6FlrOkjM4/Uj8OsVILyFI/AAAAAAAAJ1c/JIGMbmtixlA/s1600/Sin+i1+(2).png"
                alt="Header img"
            />

        </div>
    )
}
