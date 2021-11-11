import React, {useState} from 'react'
import { CommonButton} from '../themes'
import { signupRequest } from './axiosServices';

const SignUp = ({setSignUp, loging}) => {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [barangay, setBarangay] = useState('');
    const [district, setDistrict] = useState('');
    const [provincial, setProvincial] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');

    function create(e) {
        e.preventDefault();
        const newUser = {
                fullname,
                password, 
                uAddress: {barangay, district, provincial}, 
                gender, 
                email
            };
        signupRequest(newUser)
            .then(() => {
                loging(fullname, password, true);
            });
    }

    return (
        <div style={{display: 'grid', width: '500px', margin: 'auto'}}>
            <input type='text' placeholder='Set Fullname..' onChange={e=>setFullname(e.currentTarget.value)}/>
            <input type='text' placeholder='Set Password..' onChange={e=>setPassword(e.currentTarget.value)}/>
            <input type='text'placeholder='Set Brgy' onChange={e=>setBarangay(e.currentTarget.value)}/>
            <input type='text'placeholder='Set Dtrct' onChange={e=>setDistrict(e.currentTarget.value)}/>
            <input type='text'placeholder='Set Province' onChange={e=>setProvincial(e.currentTarget.value)}/>
            <input type='text'placeholder='Set Gender' onChange={e=>setGender(e.currentTarget.value)}/>
            <input type='text'placeholder='Set Emale' onChange={e=>setEmail(e.currentTarget.value)}/>
            <CommonButton onClick={e => create(e)}>SignUp</CommonButton>
            <h4 onClick={()=>setSignUp(false)}>Login</h4>
        </div>
    )
}

export default SignUp
