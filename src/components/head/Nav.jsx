const websites = [
    { name: 'Google', url: 'https://www.google.com'},
    { name: 'Twitter', url: 'https://www.twitter.com'},
    { name: 'Facebook', url: 'https://www.facebook.com'},
    { name: 'Reddit', url: 'https://www.reddit.com'},
];

export default function Nav() {
    return (
        <nav>
            {websites.map(w => {
                return (
                    <a href={w.url} key={w.name}>{w.name}</a>
                );
            })}    
        </nav>
    );
}