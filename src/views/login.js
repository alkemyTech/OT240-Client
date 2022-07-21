import React, { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Slider from '../components/Slider';
//import loginLogo from '../../public/images/favicon.png';

const sliderContents = [
	{ imageUrl: '/images/blog-img-01.jpg', text: 'Awesome slide description' },
	{ imageUrl: '/images/blog-img-02.jpg', text: 'Awesome slide description' },
	{ imageUrl: '/images/blog-img-03.jpg', text: 'Awesome slide description' },
];
const loginLogo = '/images/favicon.png';
const banner = '/images/cart.jpg';

const Login = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        /* check fieds to not be empty
        login logic  
        fetch/axios
        authentication
        */
       try {
                setIsLoading(true);
                let info = {
                    email,
                    password
                };
                const response = await fetch('/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(info)
                });
                await response.json();
       } catch (error) {
        console.log(error);
       }
    };

    return (
        <>
           <Slider slides={sliderContents}/>
            <div className='register-login-form'>
            <form onSubmit={handleLogin}>
                    <div className=''>
                        <img src={loginLogo} alt='login logo'/>
                        <h2>SOMOS MÁS +</h2>
                    </div>
                    <div className="form-group">
                        <label htmlFor="emailInput" className='p-5'>Correo electrónico:</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailInput"
                            onChange={(e) => setEmail(e.target.value)} 
                            aria-describedby="emailHelp" 
                            placeholder="Ingrese su correo electrónico"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput" className='p-5'>Contraseña:</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="passwordInput"
                            onChange={(e) => setPassword(e.target.value)} 
                            placeholder="Ingrese su contraseña"/>
                    </div>
                    <div className="form-check">
                        <input 
                            type="checkbox" 
                            className="form-check-input" 
                            id="rememberUser"/>
                        <label className="form-check-label" htmlFor="rememberUser">Recordar usuario</label>
                    </div>
                    <button type="submit" className="btn btn-primary mt-3">Iniciar sesión</button>
                </form> 
            </div>
                
        </>
    )
};

export default Login;