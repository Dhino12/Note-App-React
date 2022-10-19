/* eslint-disable react/prop-types */
import React from 'react';
import PropsType from 'prop-types';
import { login } from '../data/api';
import LoginInput from '../components/login/LoginInput';

function LoginPage({ loginSuccess }) {
    const onLogin = async ({ email, password }) => {
        const { error, data } = await login({ email, password });

        if (!error) {
            loginSuccess(data);
        }
    };

    return (
        <section className="container-login">
            <LoginInput login={onLogin} />
        </section>
    );
}

LoginPage.propsType = {
    loginSuccess: PropsType.func.isRequired,
};

export default LoginPage;
