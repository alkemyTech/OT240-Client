import React, { useState, useEffect } from 'react';
//import { useDispatch, useSelector } from 'react-redux';
import Nav from '../components/Nav.js';

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
    };

    return (
        <>
            <Nav/>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="emailInput">Correo electrónico</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="emailInput"
                            onChange={(e) => setEmail(e.target.value)} 
                            aria-describedby="emailHelp" 
                            placeholder="Ingrese su correo electrónico"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="passwordInput">Contraseña</label>
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
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form> 
        </>
    )
};

export default Login;