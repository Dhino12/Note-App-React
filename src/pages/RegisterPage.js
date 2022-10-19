import React from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterInput from '../components/register/RegisterInput';
import { register } from '../data/api';

function RegisterPage() {
    const navigator = useNavigate();

    const onRegisterHandler = async (user) => {
        const { error } = await register(user);

        if (!error) {
            navigator('/');
        }
    };

    return (
        <section className="container-login">
            <RegisterInput register={onRegisterHandler} />
        </section>
    );
}

export default RegisterPage;
