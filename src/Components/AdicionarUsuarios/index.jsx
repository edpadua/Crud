import React from 'react'

import { useState } from 'react'

import styles from "./AdicionarUsuarios.module.css"

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../../reducers/Users.js";

function AdicionarUsuarios() {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
   

    return (
        <div className={styles.adicionarUsuario}>
            <input
                className='form_control'
                type="text"
                placeholder="Digite o nome ..."
                onChange={(event) => {
                    setName(event.target.value);
                }}
            />
            <input
                className='form_control'
                type="text"
                placeholder="Digite o nome do usuário ..."
                onChange={(event) => {
                    setUsername(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    dispatch(
                        addUser({
                            id: userList[userList.length - 1].id + 1,
                            name,
                            username,
                        })
                    );
                }}
            >
                Adicionar Usuário
            </button>
        </div>
    )
}

export default AdicionarUsuarios
