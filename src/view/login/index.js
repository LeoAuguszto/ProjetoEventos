import React, {useState}from 'react';
import './login.css';
import {Link, Navigate} from 'react-router-dom'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

import Navbar from '../../components/navbar';
import firebase from '../../Config/firebase';
import Logo from '../img/Logo1.png';
import 'firebase/auth';


import { useSelector, useDispatch} from 'react-redux';

function Login() {
    const [email,setEmail] = useState();
    const [senha, setSenha] = useState();

    const dispatch = useDispatch();

    function Logar(){
        
    const auth = getAuth(firebase);

    signInWithEmailAndPassword(auth, email, senha) .then(resultado => {
        alert('Sucesso!');
        dispatch({type: 'LOG_IN', UserEmail:email});
      }).catch(error => {
       alert(error);
      });
    }
    

    return (
        <>
            <Navbar/>
            <div class="login-content d-flex align-items-center">
                {
                    useSelector(state => state.UserLogado)> 0 ? <Navigate to='/'/> : null
                }
                <form Class="form-signin mx-auto">
                    <div Class="text-center mb-4">
                        <img src={Logo} alt="Logo" className='Logo-Login' />
                        <h1 className="login">Login</h1>
                    </div>

                    <input onChange={(e)=> setEmail(e.target.value)} type="email" id="inputEmail" Class="form-control my-2" placeholder="E-mail" />
                    <input onChange={(e)=> setSenha(e.target.value)}  type="password" id="inputPassword" Class="form-control my-2" placeholder="Senha" />

                    <button onClick={Logar} Class="btn btn-lg btn-block btn-login" type="button">OK</button>

                    <div className='option-login text-center'>
                        <Link to='/NewPassword' className='mx-2'>Recuperar senha</Link>
                        <Link to='/NewUser' className='mx-2'>Cadastrar</Link>
                    </div>

                    <p Class="mt-5 mb-3 text-muted text-center">&copy; Leonardo Augusto 2024</p>
                </form>
            </div>
        </>
    );
}

export default Login;