import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from "./UserInfo.module.css"


const UserInfo = () => {

    const {id} = useParams()

    const [user, setUser] = useState({})
    console.log(user);
    const getUser = async () => {
        const data = await fetch(`https://jsonplaceholder.org/users/${id}`)
        const users = await (data.json())
        setUser(users)
    }
    useEffect(()=>{
        getUser()
    }, [])


    return (
        <div className={styles.main}>
            <p>{user.firstname}</p>
            <p>{user?.address?.city}</p>
        </div>
    );
};

export default UserInfo;