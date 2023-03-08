import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar bg="light">
      <Container>
        <Link to="/">
          <h3>Podcast App</h3>
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
