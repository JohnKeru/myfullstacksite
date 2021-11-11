import React, { useState } from 'react'
import {loginRequest} from './axiosServices';
import '../css/Login.css';
import { useHistory } from 'react-router-dom';
import { CommonButton} from '../themes';
import SignUp from './SignUp';

const Login = ({isLog}) => {
    const [fullname, setFullname] = useState('');
    const [password, setPassword] = useState('');
    const [loginMessage, setLoginMessage] = useState('');
    const [nameError, setNameError] = useState(false);
    const [passError, setPassError] = useState(false);
    const [signUp, setSignUp] = useState(false);
    const history = useHistory();
    function loging(fullname, password, active){
        if(!fullname || !password){
            setLoginMessage('Input the following!');
            setNameError(true);
            setPassError(true);
        }else if(fullname.length < 3 || password.length < 3){
            if(fullname.length < 3){
                setLoginMessage('fullname is too short!');
                setNameError(true)
            }else if(password.length < 3){
                setLoginMessage('Password is too short!');
                setPassError(true)
            }
        }else{
            loginRequest({fullname: fullname.trim(), password, active})
                .then(res=>{
                    if(res.data.includes('Wrong')){
                        setLoginMessage(res.data);
                        setPassError(true);
                    }
                    else if(res.data.includes('Invalid')){
                        setLoginMessage(res.data);
                        setNameError(true);
                        setPassError(true);
                    }
                }).catch(() => {
                    setLoginMessage('Login Success!');
                    isLog(true);
                    history.push('/'); 
                })  
        }
    }
    const logMessage = loginMessage.includes('Success!');
    return (
        <div className='login_Background'>
        {!signUp ?
        <div className='login_Form'>
            <h2>Login</h2>
            <div className={logMessage ? 'LogMessages' : undefined}>
                {logMessage && <img 
                    className='loginImage'
                    src='https://cliply.co/wp-content/uploads/2021/03/372103860_CHECK_MARK_400px.gif'
                    alt=''
                    width='50px'
                    height='30px'
                />}
                <h5 className={logMessage ? 'green' : 'error'}>{loginMessage}</h5>
            </div>
            
            <label>Fullname: </label>
            <input 
                onFocus={() => {
                    setNameError(false)
                    setLoginMessage('')
                }}
                className={nameError ? 'errorInput' : undefined}
                type='text'
                placeholder='Fullname ...'
                onChange={e=>setFullname(e.currentTarget.value)}
                />        
            <label>Password: </label>
            <input
                onFocus={(() => {
                    setPassError(false)
                    setLoginMessage('')
                })}
                className={passError ? 'errorInput' : undefined}
                type='password'
                placeholder='Password ...'
                onChange={e=>setPassword(e.currentTarget.value)}
            />
            <CommonButton className='login_Button' onClick={()=>loging(fullname, password, true)}>Sign In.</CommonButton>
            <div className='signUp' onClick={()=>setSignUp(true)}>
                <img width='20px' height='20px' src='icons/signup.png' alt=''/>
                <h5>Sign Up?</h5>
            </div>
        </div> : 
            <SignUp setSignUp={setSignUp} loging={loging}/>}
        </div>
    )
}

export default Login
