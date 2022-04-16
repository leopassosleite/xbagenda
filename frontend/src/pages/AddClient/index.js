import React, { useState } from 'react'
import ClientService from '../../services/ClientService'
import { Link, useNavigate } from 'react-router-dom'

const AddClient = () => {

    const [name, setName] = useState('')
    const [company, setComapany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();

    const saveClient = (e) => {
        e.preventDefault();

        const client = { name, company, email, phone, category }

        ClientService.createClient(client).then((response) => {
            console.log(response.data)
        }).catch(error => {
            console.log(error)
            navigate('/cliente')
        })
    }

    return (
        <div>
            <br /><br />
            <div className="container">
                <div className="row">
                    <div className="card col-6 offset-md-3 offset-md-3">
                        <h2 className="text-center">Add cliente</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group mb-2">
                                    <label className="form-label">Nome: </label>
                                    <input
                                        type="text"
                                        placeholder="Informe o nome"
                                        name="name"
                                        className="form-control"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    >
                                    </input>
                                    <div className="form-group mb-2"></div>
                                    <label className="form-label">Empresa: </label>
                                    <input
                                        type="text"
                                        placeholder="Informe a empresa"
                                        name="comapany"
                                        className="form-control"
                                        value={company}
                                        onChange={(e) => setComapany(e.target.value)}
                                    >
                                    </input>
                                    <div className="form-group mb-2"></div>
                                    <label className="form-label">Email: </label>
                                    <input
                                        type="text"
                                        placeholder="Informe o email"
                                        name="email"
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                    <div className="form-group mb-2"></div>
                                    <label className="form-label">Telefone: </label>
                                    <input
                                        type="text"
                                        placeholder="Informe o telefone"
                                        name="phone"
                                        className="form-control"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    >
                                    </input>
                                    <div className="form-group mb-2"></div>
                                    <label className="form-label">Categoria: </label>
                                    <input
                                        type="text"
                                        placeholder="Informe a categoria"
                                        name="category"
                                        className="form-control"
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveClient(e)}>Salvar</button>
                                <Link to="/clientes"><button className="btn btn-danger">Cancelar</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient