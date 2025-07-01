export default function MyChannel() {
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
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <a href="https://youtube.com/@vak_six?si=wIit65FhgJgPLlMZ" target="_blank" style={buttonStyle}>YouTube Channel</a>
            <a href="https://www.facebook.com/share/1AGGVDfNd8/?mibextid=qi2Omg" target="_blank" style={buttonStyle}>Facebook Channel</a>
        </div>
    );
}