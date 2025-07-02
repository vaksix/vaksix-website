export default function HomeScreen() {
    const containerStyle = {
        backgroundColor: '#000000',
        color: '#f0f0f0',
        minHeight: '100vh',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px'
    };

    const textStyle = {
        fontSize: '1.3rem',
        fontWeight: 'bold',
        fontStyle: 'italic',
        opacity: 0.9,
        textAlign: 'center',
        marginTop: '20px'
    };

    return (
        <div style={containerStyle}>
            {/* Logo VAKSIX */}
            <img
                src="/images/vaksix-logo.png"
                alt="VAKSIX Logo"
                style={{ width: '220px', marginBottom: '30px' }}
            />

            {/* Judul */}
            <h1 style={{
                fontSize: '2.5rem',
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginBottom: '20px',
                textAlign: 'center'
            }}>
                Selamat Datang di Halaman HOME VAKSIX
            </h1>

            {/* Teks motivasi */}
            <p style={textStyle}>
                Ini adalah halaman utama dari website VAKSIX yang akan terus dikembangkan!
            </p>

            <p style={textStyle}>
                Tetap santuy dan jangan lupa ngopi sambil buka-buka konten kami 😎☕
            </p>
        </div>
    );
}