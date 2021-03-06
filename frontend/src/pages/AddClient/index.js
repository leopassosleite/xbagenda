import React, { useEffect, useState } from 'react'
import ClientService from '../../services/ClientService'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './style.css'

const AddClient= () => {

    const [name, setName] = useState('')
    const [company, setComapany] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [moment, setMoment] = useState('')
    const [category, setCategory] = useState('')
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateClient = (e) => {
        e.preventDefault();

        const client = { name, company, email, phone, moment, category }

        if (id) {
            ClientService.updateClient(id, client).then((response) => {
                navigate('/clientes')
            }).catch(error => {
                console.log(error);
            })
        } else {
            ClientService.createClient(client).then((response) => {

                console.log(response.data)

                navigate('/clientes')

            }).catch(error => {
                console.log(error)
            })
        }
    }

    useEffect(() => {
        ClientService.getClientById(id).then((response) => {
            setName(response.data.name)
            setComapany(response.data.company)
            setEmail(response.data.email)
            setPhone(response.data.phone)
            setMoment(response.data.moment)
            setCategory(response.data.category)
        }).catch(error => {
            console.log(error)
        })
    }, [id])

    const title = () => {
        if (id) {
            return <h2 className="text-center" style={{ marginTop: "10px", fontSize: "30px", color: "#000" }}>Atualizar Cadastro</h2>
        } else {
            return <h2 className="text-center" style={{ marginTop: "10px", fontSize: "30px", color: "#000" }}>Add Cliente</h2>
        }
    }

    return (
        <div>
            <br /><br />
            <div className="container" style={{ marginLeft: "10px", width: "440px" }}>
                <div className="row">
                    <div className="card">
                        {
                            title()
                        }
                        <div className="card-body" style={{ width: "420px" }}>
                            <form>
                                <div className="form-group mb-3">
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
                                    <label className="form-label">Data: </label>
                                    <input
                                        type="text"
                                        placeholder="Informe a data"
                                        name="moment"
                                        className="form-control"
                                        value={moment}
                                        onChange={(e) => setMoment(e.target.value)}
                                    >
                                    </input>
                                </div>
                                <button className="btn btn-success" onClick={(e) => saveOrUpdateClient(e)}>Salvar</button>
                                <Link to="/clientes"><button className="btn btn-danger"
                                    style={{ marginLeft: "10px" }}>Cancelar</button></Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddClient