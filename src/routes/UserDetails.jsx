import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import UserCard from "../common/UserCard";
import { useEffect, useState } from "react";

export default function UserDetails() {
    const users = useSelector(state => state.combine.combinedData);
    const username = useParams().username;
    const user = users.filter(user => user.login === username)[0];

    const [isShow, setIsShow] = useState(false);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('this is a test for git branch in mywork branch');
    }, []);

    return (
        <main className="user-details">
            <article>
                {user && <UserCard user={user} />}
            </article>
            <section>
                <div>
                    <input type="checkbox" id="render" onChange={(e) => setIsShow(!isShow)} />
                    <label htmlFor="render">render</label>
                </div>
                {isShow ? (
                    <Counter count={count} add={setCount} style={{background: 'red'}} />
                ) : (
                    <Counter count={count} add={setCount} style={{background: 'yellow'}} />
                )}
            </section>
        </main>
    );
}

function Counter({ count, add, style }) {
    return (
        <div style={{ width: '100px', height: '100px', border: '1px solid red', background: style.background }}>
            <div>{count}</div>
            <button onClick={() => add(count + 1)}>add</button>
        </div>
    );
}