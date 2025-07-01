export default function About() {
    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#f0f0f0',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '40px'
        }}>
            <h1 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                fontStyle: 'italic',
                marginBottom: '30px'
            }}>
                VAKSIX
            </h1>
            <p style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                fontStyle: 'italic',
                textAlign: 'center',
                maxWidth: '600px'
            }}>
                Website ini dibuat untuk dedikasi kami kepada kalian semua yang ingin mengetahui tentang kami dan keorisinilan kami, serta siapapun yang mensupport kami dan update-an dari kami.
            </p>
        </div>
    );
}