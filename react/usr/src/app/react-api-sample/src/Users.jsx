import React, { useState, useEffect } from 'react'
import axios from 'axios'
import User from './User'

const Users = () => {

    // hooksで管理するデータ一覧
    const [users, setUsers] = useState([]);

    // 初期表示
    useEffect(() => {
        fetchUsers()
    }, [])

    // API通信でユーザー一覧を取得
    const fetchUsers = () => {
        axios
            .get('http://localhost:13001/users')
            .then((results) => {
                let users = results.data
                setUsers(users)
            })
            .catch((error) => {
                alert("error")
            })
    }

    // ユーザー一覧を描画
    return (
        <div id="main">
            {users.map((user) => {
                return (
                    <User 
                      id = {user["id"]}
                      name = {user["name"]}
                    />
                )
            })}
            <button onClick={fetchUsers}>再取得</button>
        </div>
    )
}

export default Users
