/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginInput({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    // const onSubmitHandler = () => {}
    function onSubmitHandler(event) {
        event.preventDefault();

        login({
            email, password,
        });
    }

    return (
        <article className="form-wrapper">
            <h1>Login NoteApp</h1>
            <p className="title-login">Silahkan masuk untuk melakukan aktivitas pada web ini</p>
            <form onSubmit={onSubmitHandler} className="form">
                <label htmlFor="email">
                    Email :
                    <span className="red">*</span>
                </label>
                <input type="email" id="email" placeholder="isikan email" value={email} onChange={onEmailChangeHandler} />
                <label htmlFor="password">
                    Password :
                    <span className="red">*</span>
                </label>
                <input type="password" id="password" placeholder="isikan password" value={password} onChange={onPasswordChangeHandler} />
                <div className="button-col">
                    <button type="submit">Login</button>
                    <button type="button">Register</button>
                </div>
            </form>
            <p>
                Belum punya akun ?...
                <Link to="/register">Daftar disini</Link>
            </p>
        </article>
    );
}

export default LoginInput;
