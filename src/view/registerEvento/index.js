import React, {useState}from 'react';
import './registerEvento.css';

import Navbar from '../../components/navbar';
import firebase from '../../Config/firebase';

import { useSelector} from 'react-redux';

function RegisterEventos(){

    const [titulo, setTitulo] = useState();
    const [tipo, setTipo] = useState();
    const [detalhes, setDetalhes] = useState();
    const [data, setData] = useState();
    const [hora,setHora] = useState();
    const [foto, setFoto] = useState();
    const usuarioEmail = useSelector(state => state.UserEmail);
    
    // const storage = firebase.storage();
    // const db = firebase.firestore(); 
    
    function cadastrar() {
        // storage.ref(`Imagens/${foto.name}`).put(foto).then(() => {
        //     // db.collection('eventos').add({
        //     //     // titulo: titulo,
        //     //     // tipo: tipo,
        //     //     // detalhes: detalhes,
        //     //     // data: data,
        //     //     // hora: hora,
        //     //     // usuario: 'Leonardo',
        //     //     // visualizacao: 0,
        //     //     // foto: foto.name,
        //     //     // publico: 1,
        //     //     // dtCriacao: new Date()
        //     // }).then(() => {
        //     //     alert('Evento cadastrado com sucesso!');
        //     // }).catch(erro => {
        //     //     alert('Não foi possível cadastrar o evento');
        //     // });
        // });
    }

    return(
        <>
            <Navbar/>
        <div className='col-12 mt-2'>
            <div className='row'>
                <h3 className='mx-auto font-weight-bold'>Novo Evento</h3>
            </div>

            <div className='form-group col-12'>
                <label>Titulo:</label>
                <input onChange={(e) => setTitulo(e.target.value)} type="text" className='form-control'/>
            </div>
            

            <div className='form-group col-12'>
                <label>Tipo do Evento</label>
                <select onChange={(e) => setTipo(e.target.value)} className='form-control'>
                    <option disabled selected value>Selecione um tipo</option>
                    <option>Festa</option>
                    <option>Teatro</option>
                    <option>Show</option>
                    <option>Evento</option>
                </select>
            </div>

            <div className='form-group col-12'>
                <label>Descrição do Evento:</label>
                <textarea onChange={(e) => setDetalhes(e.target.value)} className='form-control' rows="3"/>
            </div>

            <div className='form-group row col-12'>
                <div className='col-8'>
                    <label>Data:</label>
                    <input onChange={(e) => setData(e.target.value)} type='date' className='form-control'/>
                </div>

                <div className='col-4'>
                    <label>Hora:</label>
                    <input onChange={(e) => setHora(e.target.value)} type='time' className='form-control'/>
                </div>
            </div>

            <div className='form-group col-12'>
                <label>Upload da foto:</label>
                <input onChange={(e) => setFoto(e.target.files(0))} type="file" className='form-control' />
            </div>

            <button  onClick={cadastrar} type='button' className='btn btn-lg btn-block mt-3 mb-5 btn-cadastro'>Publicar</button>

        </div>
           
        </>
    )
}

export default RegisterEventos;