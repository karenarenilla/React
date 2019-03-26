import Link from 'next/link';

const linkStyle = {
  marginRight: '20px',
};
const Home = () => (
  <section>
    <Link href='/profile'>
      <a style={linkStyle}>Profile</a>
    </Link>
    <Link href='/shows'>
      <a style={linkStyle}>Shows</a>
    </Link>
    <Link href='/router'>
      <a style={linkStyle}>Routes</a>
    </Link>
    <Link href='/header'>
      <a style={linkStyle}>Header</a>
    </Link>
    <h1>Home</h1>
    <p>Hola Mundo</p>
  </section>
);
export default Home;