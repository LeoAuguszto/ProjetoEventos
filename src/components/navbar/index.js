import React from 'react';
import './components.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch} from 'react-redux';

function Navbar (){
    const dispatch = useDispatch();
    const Email = useSelector(state => state.UserEmail);
   return(
    <nav className="navbar navbar-expand-lg">
        <span className="navbar-brand text-white font-weigth-bold">Eventos</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <i class="fa-solid fa-bars text-white"></i>
            </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">

                <li className="nav-item active"><Link classNameName="nav-link" to="/">Home</Link></li>
                {
                useSelector(state => state.UserLogado) == 0 ?
                
                <>
                    <li className="nav-item active"><Link classNameName="nav-link" to="/NewUser">Cadastrar</Link></li>
                    <li className="nav-item active"><Link classNameName="nav-link" to="/Login">Login</Link></li>
                </>
                :
                <>
                    <li className="nav-item active"><Link classNameName="nav-link" to="/RegisterEventos">Publicar Eventos</Link></li>
                    <li className="nav-item active"><Link classNameName="nav-link" to="">Meus Eventos</Link></li>
                    <li className="nav-item active"><Link classNameName="nav-link" 
                        onClick={()=>dispatch({type: 'LOG_OUT'})}>Logout</Link></li>
                    <li style={{ margin: '0 50px' }}>{Email}</li>

                </>
                }

            </ul>
        </div>
    </nav>
   )
}

export default Navbar;