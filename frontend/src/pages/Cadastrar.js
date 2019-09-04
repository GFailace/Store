import React, { useState } from 'react'
import './Cadastrar.css'
import api from '../services/api'
import Header from './Header';
import Tabela from './Tabela';

export default function Cadastrar() {
    const [name, setName] = useState('')
    const [system, setSystem] = useState('')
    const [id, setId] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        await api.post('/api/item', {
            name,
            system
        })

        setName('')
        setSystem('')
        window.location.reload();

    }

    async function handleDelete(e) {
        e.preventDefault()

        await api.delete(`/api/item/${id}`)

        setId('')

        window.location.reload();
    }

    return (
        <div>
            <Header />
            <div className="input-container">
                <form onSubmit={handleSubmit} className="form-add">
                    <input placeholder="Digite o nome do Ativo"
                        value={name} onChange={e => setName(e.target.value)}
                    />
                    <input placeholder="Digite o nome do Sistema"
                        value={system} onChange={e => setSystem(e.target.value)}
                    />
                    <button type="submit" className="btn btn-dark">Cadastrar</button>
                </form>

                <form onSubmit={handleDelete} className="form-delete">
                    <input placeholder="Digite o ID do Ativo para excluir"
                        value={id} onChange={e => setId(e.target.value)}
                    />
                    <button type="submit" className="btn btn-danger">Excluir</button>
                </form>
                <div className="legenda">
                    <ul>
                        <h5>Legenda</h5>
                        <li><strong>GNCAS</strong> = Datacenter Campinas</li>
                        <li>GNCAS<strong>N</strong> = Datacenter Norte</li>
                        <li>GNCAS<strong>S</strong> = Datacenter Sul</li>
                        <li>GNCASN<strong>TL</strong> = SO Linux Red Hat</li>
                        <li>GNCASN<strong>TW</strong> = SO Windows</li>
                    </ul>
                </div>
            </div>
            <Tabela />
        </div>
    )
}