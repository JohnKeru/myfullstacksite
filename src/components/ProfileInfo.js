import React from 'react'
import { DarkAndGreen } from '../themes'
import '../css/ProfileInfo.css'

const ProfileInfo = ({profile, uAddress}) => {
    return (
        <DarkAndGreen className='basicInfo'>
            <h4>Role: </h4>
            <h3>{profile.role}</h3>
            <h4>Email: </h4>
            <h3>{profile.email}</h3>
            <h4>Gender: </h4>
            <h3>{profile.gender}</h3>
            <h4>Address: </h4>
            {uAddress && <h3>{`${uAddress.barangay} ${uAddress.district} ${uAddress.provincial}`}</h3>} 
        </DarkAndGreen>
    )
}

export default ProfileInfo
