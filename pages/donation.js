export default function Donation() {
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
        textDecoration: 'none'
    };

    return (
        <div style={{
            backgroundColor: '#000000',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <a
                href="https://saweria.co/VAKSIX"
                target="_blank"
                rel="noopener noreferrer"
                style={buttonStyle}
            >
                Donate via Saweria
            </a>
        </div>
    );
}