import React, { useState} from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import firebase from '../../Config/firebase';
import 'firebase/auth';

import Navbar from '../../components/navbar';
import './newUser.css'

function NewUser(){

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [carregando, setCarregando] = useState();


    function Cadastrar (){

        setCarregando(1);

        const auth = getAuth(firebase);

        createUserWithEmailAndPassword(auth, email, senha) 
          .then(resultado => {
            setCarregando(0);
            alert('Cadastrado com Sucesso!');
          }).catch(erro => {
            setCarregando(0);
            alert('Falha ao tentar cadastrar, tente novamente!')
          });
      
    }  
    


    return(
      <>
        <Navbar/>
     
        <div className='form-cadastro'>
            <form className='text-center form-login mx-auto mt-5'>
                <h1 className='newUser'>Cadastro</h1>

                <input onChange={(e)=> setEmail(e.target.value)} type='email' className='form-control my-2' placeholder='E-mail'></input>
                <input onChange={(e)=> setSenha(e.target.value)} type='password' className='form-control my-2' placeholder='Senha'></input>
                {
                carregando ?
                 <div class="spinner-border text-dark" role="status"><span class="sr-only">Loading...</span></div>
                :<button onClick={Cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastrar'>OK</button> 
                }
                                
            </form>
        </div>
      </>
    )
}
export default NewUser;
