import Link from 'next/link';

export default function Navbar() {
    const buttonStyle = {
        backgroundColor: '#f0f0f0',
        color: '#000000',
        padding: '10px 20px',
        margin: '10px',
        border: 'none',
        borderRadius: '4px',
        fontWeight: 'bold',
        fontStyle: 'italic',
        transform: 'skew(-10deg)',
        cursor: 'pointer',
        textDecoration: 'none',
        display: 'inline-block'
    };

    return (
        <nav style={{ textAlign: 'center', paddingTop: '20px' }}>
            <Link href="/home" legacyBehavior><a style={buttonStyle}>Home</a></Link>
            <Link href="/about" legacyBehavior><a style={buttonStyle}>About</a></Link>
            <Link href="/mychannel" legacyBehavior><a style={buttonStyle}>My Channel</a></Link>
            <Link href="/donation" legacyBehavior><a style={buttonStyle}>Donation</a></Link>
        </nav>
    );
}