import { useState } from "react";
import { Link } from "react-router-dom";

import imagemEstacao from '../assets/estacao.jpg'
import '../components/estilo.css' // Caminho corrigido com base na sua árvore de arquivos

export default function Registro(){
// ... resto do código
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    return(
        <section className="container">
            <div className="card">
                <img src={imagemEstacao} alt="" />
                <div className="formulario">
                    <h2>Cadastrar-se</h2>
                    <form action="">
                        <label htmlFor="usuario">Usuário</label>
                        <input type="text" id="usuario" className="input" value={usuario} onChange={(e) => setUsuario(e.target.value)}/>

                        <label htmlFor="senha">Senha</label>
                        <input type="password" id="senha" className="input" value={senha} onChange={(e) => setSenha(e.target.value)}/>

                         <label htmlFor="confSenha">Confirma Senha</label>
                        <input type="password" id="confirmaSenha" className="input" value={confirmaSenha} onChange={(e) => setConfirmaSenha(e.target.value)}/>
                        <Link to='/dashboard' className="botao">Cadastrar</Link>
                    </form>
                </div>
            </div>
        </section>
    )
}