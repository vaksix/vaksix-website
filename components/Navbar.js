import Link from 'next/link';

export default function Navbar() {
    const buttonStyle = {
        backgroundColor: '#f0f0f0',
        color: '#000000',
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        transform: 'skew(-10deg)',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block',
        transition: 'background-color 0.3s, transform 0.2s'
    };

    const navStyle = {
        textAlign: 'center',
        paddingTop: '20px',
        paddingBottom: '10px',
        backgroundColor: '#111111',
        borderBottom: '1px solid #444',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)'
    };

    return (
        <nav style={navStyle}>
            <Link href="/home" legacyBehavior><a style={buttonStyle}>Home</a></Link>
            <Link href="/about" legacyBehavior><a style={buttonStyle}>About</a></Link>
            <Link href="/mychannel" legacyBehavior><a style={buttonStyle}>My Channel</a></Link>
            <Link href="/donation" legacyBehavior><a style={buttonStyle}>Donation</a></Link>
        </nav>
    );
}