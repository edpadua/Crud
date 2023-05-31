import React from 'react'

import { useState } from 'react'

import styles from "./Usuario.module.css"

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../../reducers/Users.js";


function Usuario({ usuario }) {

    const [newUsername, setNewUsername] = useState("");

    return (
        <div className={styles.usuario}>
            <h2>Nome: {usuario.name}</h2>
            <h2>Usuário: {usuario.username}</h2>
            <input
                className='form_control'
                type="text"
                placeholder="Digite um novo nome de usuário..."
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
            />
            <button
                onClick={() => {
                    dispatch(
                        updateUsername({ id: usuario.id, username: newUsername })
                    );
                }}
            >
                {" "}
                Atualizar nome de usuário
            </button>
            <button
                onClick={() => {
                    dispatch(deleteUser({ id: usuario.id }));
                }}
            >
                Remover usuário
            </button>
        </div>
    )
}

export default Usuario
