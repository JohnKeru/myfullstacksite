import React from 'react'
import '../css/Home.css'
//import { getCurrentUser } from './axiosServices'
import Banner from './Banner'
import Section from './Section'
import Main from './Main'
import Courses from './Courses'
import Footer from './Footer'
const Home = () => {
    return (
        <div className='Home'>
            <Banner/>
             <div className='showInfo'>
                <Section/>
                <Main/>
            </div>
            <Courses/>
            <Footer/>
        </div>
    )
}

export default Home
