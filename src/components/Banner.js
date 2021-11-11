import React from 'react'
import { useHistory } from 'react-router-dom'
import '../css/Banner.css'
import { BannerBg, CommonButton2 } from '../themes'
import { getCurrentUser } from './axiosServices';

const Banner = () => {
    const user = getCurrentUser();
    const history = useHistory();

    return (
        <div className='Banner_Container'>
            <img className='imgBanner' src='icons/banner.jpg' alt=''/>
            <div className='bannerText'>
                <h2>Congratulations Students,</h2>
                <h2 className='h2'>You've Made It!</h2>
                <div className="wrapper">
                    <p className="typing-demo">
                        {!user ? 'The data is only for enrolled students.' : 'You are now login. Enjoy learning!'}
                    </p>
                </div>
                {!user && <CommonButton2 className='onlyStudents' onClick={() => history.push('/login')}>
                    Sign Up.
                </CommonButton2>}
            </div>
            <BannerBg className='linearBannerBackground'></BannerBg>
        </div>
    )
}

export default Banner
