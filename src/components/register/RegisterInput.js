/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function RegisterInput({ register }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [validPassword, setValidPassword] = useState('');

    function onNameChangeHandler(event) {
        setName(event.target.value);
    }

    function onEmailChangeHandler(event) {
        setEmail(event.target.value);
    }

    function onPasswordChangeHandler(event) {
        setPassword(event.target.value);
    }

    function onValidatePasswordChangeHandler(event) {
        setValidPassword(event.target.value);
    }

    function onSubmitHandler(event) {
        event.preventDefault();

        if (validPassword === password) {
            register({
                name,
                email,
                password,
            });
        }

        alert('Password kamu belum benar');
    }

    return (
        <article className="form-wrapper">
            <h1>Register NoteApp</h1>
            <p className="title-login">Silahkan masukan data diri untuk mendaftar</p>
            <form onSubmit={onSubmitHandler} className="form">
                <label htmlFor="name">
                    Name :
                    <span className="red">*</span>
                </label>
                <input type="text" id="name" placeholder="isikan email" value={name} onChange={onNameChangeHandler} />
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
                <label htmlFor="password">
                    Validate Password :
                    <span className="red">*</span>
                </label>
                <input
                  type="password"
                  className={password.includes(validPassword) ? '' : 'border-red'}
                  id="password"
                  placeholder="isikan kembali password"
                  value={validPassword}
                  onChange={onValidatePasswordChangeHandler}
                />
                <div className="button-col">
                    <button type="submit">Register</button>
                    <Link to="/login"><button type="button">Login</button></Link>
                </div>
            </form>
        </article>
    );
}

export default RegisterInput;
