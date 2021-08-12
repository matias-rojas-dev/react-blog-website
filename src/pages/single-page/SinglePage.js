import React from 'react'
import { Sidebar } from '../../components/Sidebar'
import { SinglePost } from '../../components/SinglePost'
import '../../assets/styles/single-page.css'

export const SinglePage = () => {
    return (
        <div className="singlePage_container">
            <SinglePost />
            <Sidebar />
        </div>
    )
}
