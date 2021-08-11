import React from 'react'
import '../../assets/styles/home.css'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'
import { Sidebar } from '../../components/Sidebar'
export const Home = () => {
    return (
        <div>

            <Header />
            <div className="home">
                <Posts />
                <Sidebar />
            </div>
        </div>
    )
}
