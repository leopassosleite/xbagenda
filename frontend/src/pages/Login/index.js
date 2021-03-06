import { Link } from 'react-router-dom';
import './styles.css'

const LoginPage = () => {
    return (
        <div id="login">
            <h1 className="title">Login</h1>
            <form className="form">
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                    />
                    <div className="field"></div>
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                    />
                </div>
                <div className="actions">
                    <Link to="/home"> <button type="submit">Entrar</button></Link>
                </div>
            </form>
        </div>
    )
};

export default LoginPage