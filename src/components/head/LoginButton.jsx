export default function LoginButton({ usage }) {
    const showForm = () => {
        document.querySelector('.login-section').style.display = 'block';
    }
    const submit = () => {
        console.log('submit');
    }

    return (
        <section className="login-box">
            {usage === 'login' ? (
                <button className="login-button" onClick={showForm}>Login</button>
            ) : (
                <button className="login-button submit" onClick={submit}>Login</button>
            )}
        </section>
    );
}
