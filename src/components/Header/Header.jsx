import './Header.css';
import Navbar from './Navbar/Navbar';
import Container from '../Common/Container/Container';

function Header () {
    return (
        <>
        <header>
            <Container content={<Navbar />}/>
        </header>
        </>
    );
}

export default Header;