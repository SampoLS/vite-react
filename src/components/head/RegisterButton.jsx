export default function RegisterButton() {
    const handleRegister = () => {
        console.log('register');
    }

    return (
        <section className="register-box">
            <button className="register-button" onClick={handleRegister}>Register</button>    
        </section>
    );
}