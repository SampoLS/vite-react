import LoginButton from "./LoginButton";
import Nav from "./Nav";

export default function Head() {
    return (
        <header>
            <Nav />
            <LoginButton usage='login' />
        </header>
    );
}