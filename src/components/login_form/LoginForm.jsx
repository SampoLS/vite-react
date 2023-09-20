import { useRef, useState } from "react";
import LoginButton from "../head/LoginButton";
import RegisterButton from "../head/RegisterButton";

export default function LoginForm() {
    const [user, setUser] = useState({ username: '', password: '' });
    const formRef = useRef();

    const handleUsername = (e) => {
        setUser({...user, username: e.target.value});
    }
    const handlePassword = (e) => {
        setUser({...user, password: e.target.value});
    }
    const closeForm = () => {
        if (formRef.current) formRef.current.style.display = 'none';
    }

    return (
        <section className="login-section" ref={formRef}>
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="close" onClick={closeForm}>x</div>
                <div className="username-box">
                    <label htmlFor="username">username:</label>
                    <input type="text" id="username" onChange={handleUsername} />
                </div>
                <div className="password-box">
                    <label htmlFor="password">password:</label>
                    <input type="password" id="password" onChange={handlePassword} />
                </div>
                <div className="button-section">
                    <RegisterButton />
                    <LoginButton usage='submit' />
                </div>
            </form>
        </section>
    );
}