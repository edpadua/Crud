import React from 'react'

import { useState } from 'react'

import styles from "./MostrarUsuarios.module.css"

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../../reducers/Users.js";
import Usuario from '../Usuario';

function MostrarUsuarios() {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");

    return (
        <div className={styles.mostrarUsuarios}>
            {userList.map((user) => {
                return (
                    <Usuario usuario={user}/>
                );
            })}
        </div>
    )
}

export default MostrarUsuarios
