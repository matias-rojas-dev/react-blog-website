import React from 'react'
import '../../assets/styles/home.css'
import { Header } from '../../components/Header'
import { Posts } from '../../components/Posts'

export const Home = () => {
    return (
        <div>
            <Header />
            <div className="home">
                <Posts />
            </div>
        </div>
    )
}
