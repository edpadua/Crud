import React from 'react'

import { useState } from 'react'

import styles from "./MostrarUsuarios.module.css"

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../../reducers/Users.js";
import Usuario from '../Usuario';

function MostrarUsuarios() {

 
    const userList = useSelector((state) => state.users.value);

   
    return (
        <div className={styles.mostrarUsuarios}>
            {userList.map((user, index) => {
                return (
                    <Usuario key={index} usuario={user}/>
                );
            })}
        </div>
    )
}

export default MostrarUsuarios
