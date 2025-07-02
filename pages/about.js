import Navbar from '../components/Navbar';

export default function About() {
    return (
        <div style={{
            backgroundColor: '#000000',
            color: '#f0f0f0',
            minHeight: '100vh',
            fontFamily: 'sans-serif',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Navbar />

            <div style={{
                flex: 1,
                padding: '40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    marginBottom: '30px',
                    textAlign: 'center'
                }}>
                    Tentang VAKSIX
                </h1>
                <p style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    maxWidth: '600px'
                }}>
                    Website ini dibuat sebagai bentuk dedikasi terhadap komunitas kami dan sebagai tempat berbagi informasi tentang karya, update, dan support dari VAKSIX.
                    Terima kasih telah menjadi bagian dari perjalanan kami!
                </p>
            </div>
        </div>
    );
}