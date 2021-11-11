import React, { useCallback, useEffect, useState } from 'react'
import { deleteUserPermanently, getAllData, profilePic } from './axiosServices';
import '../css/AdminPage.css'
import { useHistory } from 'react-router-dom';
import { GreenAndDark, ImageBG, ImgBorder, ProfileEach, ProfileId, disableBodyScroll, enableBodyScroll } from '../themes';
import TableFormat from './TableFormat';

const AdminPage = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [deleteUser, setDeleteUser] = useState(false);
    const [deleteId, setDeleteId] = useState();
    const [deleteName, setDeleteName] = useState();
    const [changeView, setChangeView] = useState(false);
    const femalePic = 'http://aarohidental.com/wp-content/uploads/2014/09/female-icon.png';
    const malePic = 'http://cdn.onlinewebfonts.com/svg/download_36862.png';
    const history = useHistory();

    const callback = useCallback(()=>{
        function clicked(){
            setDeleteUser(false);
            enableBodyScroll();
        }
        clicked();
    },[])
    useEffect(()=>{
        deleteUser && document.addEventListener("click", callback);
        if(!search){
            getAllData()
                .then(res => {
                    setUsers(res);
            }) 
        }else{
            getAllData()
                .then(res => {
                const dataFiltered = res.filter(d =>
                    (d.fullname.toLowerCase().includes(search) ||
                    d.fullname.toUpperCase().includes(search) ||
                    d.fullname.includes(search) || d.uid+'' === search));
                setUsers(dataFiltered);
            })
        }
         return()=> document.removeEventListener("click", callback);
    },[search, deleteUser,callback]);
    return (
        <>{changeView ? 
            <TableFormat changeView={setChangeView}/>  :
        <>
            <GreenAndDark className='topSettings'>
                <h1 className='students_Record'>STUDENTS RECORD</h1>
                <div className='searchInputContainer'>
                    <ImageBG
                        src='icons/search.png'
                        alt='Search: '
                        className='searchIcon'
                        />
                    <input className='inputUser' type='text' placeholder='Find User...' 
                        onChange={e => setSearch(e.currentTarget.value.trim())}/>
                </div>
                {users.length === 0 ? <h3 className='totalNum'>No '{search}' student found!</h3>  
                    : !search ? <h3 className='totalNum'>Total Students No : {users.length}</h3> 
                    : <h3 className='totalNum'>{users.length}{users.length===1?' student':' students'} found.</h3>}
            <h5 onClick={() => setChangeView(true)} className='viewOnTable'>view on table</h5>
            </GreenAndDark>
            <div className='users_Container'>
                {users.map(u => 
                    <ProfileEach key = {u.uid} className={!deleteUser ? 'profileDiv' : 'hideDiv'}>
                        <ImgBorder
                            src={u.image ? profilePic + u.image : (u.gender === 'Male' ? malePic : femalePic)} 
                            alt=''
                            width='140px'
                            height='140px'
                            loading='lazy'/>
                        {!u.image && <h5>No profile 'image' yet</h5>}
                        <h1 className='eachName'>{u.fullname}</h1>
                        <h4 className='eachEmail'>{u.email}</h4>
                        <div className='profileOption'>
                            <h5 className='goToProfile' onClick={()=> history.push(`/profile/${u.uid}`)}>View Profile</h5>
                            <h5 className='deleteAccount' onClick={()=> {
                                setDeleteUser(true);
                                setDeleteId(u.uid);
                                setDeleteName(u.fullname);
                                disableBodyScroll();
                                }}>Delete</h5>
                        </div>
                        {u.active ? <ProfileId style={{color: '#2cc900'}} className='profileId'>Active</ProfileId> 
                            : <ProfileId style={{color: '#9c9c9c'}} className='profileId'>Offline</ProfileId>}
                    </ProfileEach>)}
                    
            </div>
            {deleteUser && 
                <div className={users.length > 3 ? 'FilterBackgroundPercent' : 'FilterBackgroundVh'}>
                    <div className='Filter'>
                        <div className='UnderFilter'>
                            <p>Are you sure you want to delete <span className='selectedDeleteName'>{deleteName+"'s"}</span> account?</p>
                            <div>
                                <button className='deleteButton' 
                                    onClick={()=>deleteUserPermanently(deleteId)
                                        .then(()=> {
                                            setDeleteUser(false);
                                            enableBodyScroll();
                                        })
                                        }>Yes</button>
                                <button className='cancelButton' onClick={()=>{
                                    setDeleteUser(false)
                                    enableBodyScroll();
                                    }}>No</button>
                            </div>
                        </div>
                    </div>
                </div>}
            </>}
        </>
    )
}

export default AdminPage
