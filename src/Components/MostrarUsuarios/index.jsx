import React from 'react'

import { useState } from 'react'

import styles from "./MostrarUsuarios.module.css"

import { useSelector, useDispatch } from "react-redux";
import { addUser, deleteUser, updateUsername } from "../../reducers/Users.js";

function MostrarUsuarios() {

    const dispatch = useDispatch();
    const userList = useSelector((state) => state.users.value);

    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [newUsername, setNewUsername] = useState("");

    return (
        <div className="displayUsers">
            {userList.map((user) => {
                return (
                    <div>
                        <h2> {user.name}</h2>
                        <h2> {user.username}</h2>
                        <input
                            type="text"
                            placeholder="Digite um novo nome de usuário..."
                            onChange={(event) => {
                                setNewUsername(event.target.value);
                            }}
                        />
                        <button
                            onClick={() => {
                                dispatch(
                                    updateUsername({ id: user.id, username: newUsername })
                                );
                            }}
                        >
                            {" "}
                            Atualizar nome de usuário
                        </button>
                        <button
                            onClick={() => {
                                dispatch(deleteUser({ id: user.id }));
                            }}
                        >
                            Remover usuário
                        </button>
                    </div>
                );
            })}
        </div>
    )
}

export default MostrarUsuarios
