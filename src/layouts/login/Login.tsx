import './Login.scss';
import {Grid} from '@mui/material';
import {useEffect, useState, useContext} from 'react';
import {Navigate, useNavigate} from 'react-router-dom';
import service from "../../service";
import { accountData } from '../../context/DataProvider';

interface IFormLogin {
    username: string
    password: string
}

interface IProps {
    setLogin: Function
}

const Login = (props: IProps) => {
    const navigate = useNavigate()
    //hook
    const [loginInput, setLoginInput] = useState<IFormLogin>({username: "", password: ""});
    const [error, setError] = useState('');
    const [isLogged, setIsLogged] = useState<boolean>(false)
    const { account, setAccount } = useContext(accountData);


    useEffect(() => {
        async function fetch() {
            try {
                const token = localStorage.getItem('token')
                if (!token) return;
                const res = await service.auth.profile();
                if (res.status.toString().startsWith('2')) {
                    props.setLogin(true)
                    setAccount(res.data.data)
                    return navigate(-1);
                }
            } catch (e) {
            }

        }

        fetch().then()
    }, []);

    //handle
    const handleChangeInput = (e: any) => {
        setLoginInput((prev) => ({...prev, [e.target.name]: e.target.value}));
    };
    const handleLogin = async () => {
        if (!loginInput.username || !loginInput.password) {
            setError("Vui lòng điền đẩy đủ thông tin")
            return
        }
        try {
            const res = await service.auth.login({email: loginInput.username, password: loginInput.password})
            if (res.status.toString().startsWith('2') && res.data.data.token) {
                localStorage.setItem('token', res.data.data.token)
                props.setLogin(true);
                setIsLogged(true)
            } else {
                setError(res.data.message)
            }
        } catch (error) {
            setError('something is wrong');
        }
    };

    return (
        isLogged ? <Navigate to={"/"}/> :
            <Grid container>
                <div className="account-container">
                    <Grid item lg={12} sm={12} xs={12}>
                        <div className="banner">
                            <img
                                src={`/logo_main.png`}
                                className="banner-sign"
                                alt="blog"
                            />
                        </div>
                    </Grid>
                    <Grid item lg={12} sm={12} xs={12} className="login-container">
                        <div className="login-group">
                            <h2>Đăng nhập admin</h2>
                            <div className="group-input">
                                <label>Email</label>
                                <input
                                    className="login-input"
                                    placeholder="Nhập địa chỉ email"
                                    name="username"
                                    value={loginInput.username}
                                    onChange={(e) => handleChangeInput(e)}
                                />
                            </div>
                            <div className="group-input">
                                <label>Mật khẩu</label>
                                <input
                                    type={'password'}
                                    className="login-input"
                                    placeholder="Nhập mật khẩu"
                                    name="password"
                                    value={loginInput.password}
                                    onChange={(e) => handleChangeInput(e)}
                                />
                            </div>
                            <p className="input-error">{error}</p>
                            <button onClick={(e) => handleLogin()} className="button bt-enter">
                                Enter
                            </button>
                        </div>
                    </Grid>
                </div>
            </Grid>
    );
};

export default Login;