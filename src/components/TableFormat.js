import React, { useEffect, useState } from 'react'
import { getAllData } from './axiosServices';
import '../css/TableFormat.css'

const TableFormat = ({changeView}) => {
    const [datas, setDatas] = useState([]);

    useEffect(()=>{
        getAllData()
            .then(data => {
                setDatas(data);
            });
    },[]);

    return (
        <div className='table_Container'>
            <table className='table'>
                <thead className='thead'>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                {datas.map(u => <tbody key={u.uid} className='tbody'>
                    <tr>
                        <td data-label='ID :'>{u.uid}</td>
                        <td data-label='NAME :'>{u.fullname}</td>
                        <td data-label='EMAIL :'>{u.email}</td>
                        <td data-label='GENDER :'>{u.gender}</td>
                    </tr>
                    <tr>
                        <td data-label='ID :'>{u.uid}</td>
                        <td data-label='NAME :'>{u.fullname}</td>
                        <td data-label='EMAIL :'>{u.email}</td>
                        <td data-label='GENDER :'>{u.gender}</td>
                    </tr>
                    <tr>
                        <td data-label='ID :'>{u.uid}</td>
                        <td data-label='NAME :'>{u.fullname}</td>
                        <td data-label='EMAIL :'>{u.email}</td>
                        <td data-label='GENDER :'>{u.gender}</td>
                    </tr>
                    <tr>
                        <td data-label='ID :'>{u.uid}</td>
                        <td data-label='NAME :'>{u.fullname}</td>
                        <td data-label='EMAIL :'>{u.email}</td>
                        <td data-label='GENDER :'>{u.gender}</td>
                    </tr>
                    <tr>
                        <td data-label='ID :'>{u.uid}</td>
                        <td data-label='NAME :'>{u.fullname}</td>
                        <td data-label='EMAIL :'>{u.email}</td>
                        <td data-label='GENDER :'>{u.gender}</td>
                    </tr>
                    <tr>
                        <td data-label='ID :'>{u.uid}</td>
                        <td data-label='NAME :'>{u.fullname}</td>
                        <td data-label='EMAIL :'>{u.email}</td>
                        <td data-label='GENDER :'>{u.gender}</td>
                    </tr>
                </tbody>)}
            </table>
        </div>
    )
}

export default TableFormat
