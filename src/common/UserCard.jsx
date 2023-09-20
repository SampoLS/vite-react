import { memo } from "react";

function UserCard({ user }) {
    return (
        <section className="wrapper" >
            <div className="img-box">
                <img src={user.avatar_url} alt={user.login} />
            </div>
            <div className="quote-box">
                <p>{user.content}</p>
            </div>
            <div className="name-box">
                <p>-- <i>from {user.login}</i></p>
            </div>
        </section>
    );
}

export default memo(UserCard);