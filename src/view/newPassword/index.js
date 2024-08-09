import React, {useState}from 'react';
import './newPassword.css';
import {Link, Navigate} from 'react-router-dom'
import Navbar from '../../components/navbar';

import { getAuth, sendPasswordResetEmail  } from 'firebase/auth';

import firebase from '../../Config/firebase';

import 'firebase/auth';


function NewPassword (){
    const [email,setEmail] = useState();
    const [] = useState();

    function recover(){
        const auth = getAuth(firebase);

        sendPasswordResetEmail(auth,email).then(resultado =>{
            alert('Enviamos um email para você!')
        }).catch(error =>{
            alert('O E-mail não é valido')
        })
    }

    return (
        <>
        <Navbar/>
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'> 
                <h3 className='mb-3 font-weigth-bold'>Recuperar Senha</h3>
                <input onChange={(e)=> setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='E-mail'/>

                <div className='msg my-4'>
                </div>
                <button  onClick={recover} type='button' className='btn btn-lg btn-block btn-enviar'>Recuperar Senha</button>
            </form>
        </div>
        </>
    )
}

export default  NewPassword;