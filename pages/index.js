import Navbar from '../components/Navbar';

export default function Home() {
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
          fontSize: '3rem',
          marginBottom: '20px',
          fontWeight: 'bold',
          fontStyle: 'italic'
        }}>
          WELCOME to Website VAKSIX
        </h1>

        <p style={{
          fontSize: '1.5rem',
          marginBottom: '15px',
          fontWeight: 'bold',
          fontStyle: 'italic'
        }}>
          Enjoy the my channel and website VAKSIX
        </p>

        <p style={{
          fontSize: '1.3rem',
          fontWeight: 'bold',
          fontStyle: 'italic',
          opacity: 0.9
        }}>
          Oi lagi santay kawan... yo i lah leha-leha kita
        </p>
      </div>
    </div>
  );
}