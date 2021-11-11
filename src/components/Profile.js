import React, { useEffect, useState } from 'react'
import { useDropzone } from 'react-dropzone';
import '../css/Profile.css'
import { getCurrentUser, getData, profilePic, uploadPicture } from './axiosServices';
import {CommonButton2, ImgBorderReverse, ProfileDiv} from '../themes'
import CircularStatic from './Progress';
import ProfileInfo from './ProfileInfo';
import ProfileContent from './ProfileContent';
const Profile = ({match}) => {
    const id = match.params.id;
    const [profile, setProfile] = useState({});
    const [file, setFile] = useState(null);
    const [preview, setPreview] = useState('');
    const [profileImage, setProfileImage] = useState(null);
    const [gender, setGender] = useState('');
    const [uAddress, setUAddress] = useState({});
    const [load, loading] = useState(true);
    const [userId, setUserId] = useState(0);
    
    const [progress, setProgress] = useState(false);
    const [count, setCount] = useState(0);

    const femalePic = 'http://aarohidental.com/wp-content/uploads/2014/09/female-icon.png';
    const malePic = 'http://cdn.onlinewebfonts.com/svg/download_36862.png';
    const previewPic = gender === 'Female' ? femalePic : malePic;
    
    const {getRootProps, getInputProps} = useDropzone({
        multiple: false,
        onDrop
    });
    const {refKey, ...rootProps} = getRootProps();    
    function onDrop(acceptedFiles){
        setFile(acceptedFiles[0]);
        const previewUrl = URL.createObjectURL(acceptedFiles[0]);
        setPreview(previewUrl);
    }
    function uploading(){
        try{
            const formData = new FormData();
            formData.append('file', file);
            const option = {
                onUploadProgress: (progressEvent) => {
                    const {loaded, total} = progressEvent;
                    const percent = (loaded * 100) / total;
                    setCount(percent);
                }
            }
            setProgress(true);
            uploadPicture(userId, formData, option)
                .then(res => {
                    setProfileImage(res.filename);
                    setFile(null);
                    setProgress(false);
                });
        }catch(err){
            console.log(err);
        }
    }
    useEffect(()=>{
        if(getCurrentUser() && id === undefined){
            getData(1)
                .then(data => {
                    setProfile(data);
                    setProfileImage(data.image);
                    setGender(data.gender);
                    setUAddress(data.uAddress);
                    setUserId(data.uid);
                    loading(false);
                });
        }else{
            getData(id)
                .then(data => {
                    setProfile(data);
                    setProfileImage(data.image);
                    setGender(data.gender);
                    setUAddress(data.uAddress);
                    setUserId(data.uid);
                    loading(false);
                });
        }
    },[profileImage, setUAddress, id, setUserId]);
    //   ?
    return (
        <>
        {load ? <h4 className='loading'>Loading...</h4> :
        <div className='user_Profile'>
            <ProfileDiv className='profileSide'>
                <div className='dropZone_Container' ref={refKey}>
                    <div className='dropZone_Area' {...rootProps}>
                        {profileImage && !file ?  <ImgBorderReverse 
                            width='150px'
                            height='150px'
                            src={profilePic+profileImage || previewPic} 
                            alt=''/>    :
                        <img src={preview || previewPic}
                            className='previewPic'
                            alt=''
                            width='150px'
                            height='150px'
                        />}
                        <input type='file' {...getInputProps()}/>
                        {(!file && !profileImage) && <div>
                            <h5>drop 'n' or click</h5>
                        </div>}                  
                    </div>
                        {file && <div className={progress ? 'progressContainer' : undefined}>
                            <CommonButton2 
                                className='uploadButton'
                                onClick={()=>uploading()}>{progress ? 'uploading' : 'upload?'}
                            </CommonButton2>
                            {progress && <CircularStatic count={count}/>}
                        </div>}
                    <h2>{profile.fullname}</h2>
                </div>
                <ProfileInfo profile={profile} uAddress={uAddress}/>
                </ProfileDiv>
                <ProfileContent/>
            </div>}
        </>
    )
}

export default Profile
