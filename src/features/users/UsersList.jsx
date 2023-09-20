import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import UserCard from "../../common/UserCard";

export default function UsersList() {
    const users = useSelector(state => state.combine.combinedData);

    return (
        <main>
            {users.map((user) => {
                return (
                    <Link to={`/user/${user.login}`} key={user.id}>
                        <UserCard user={user} />
                    </Link>
                );
            })}
        </main>
    );
}