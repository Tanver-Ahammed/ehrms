import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

const MyNavbar = () => {
    return (
        <>
            {/* bg="dark" data-bs-theme="dark" */}
            <Navbar style={{ textColor: "#fff", backgroundColor: "#333" }} >
                <Container className="justify-content-between">
                    <Navbar.Brand className="inline">
                        <NavLink className="text-decoration-none text-gray me-3 text-white" to="/">EHRMS</NavLink>
                        <NavLink className="text-decoration-none text-gray me-3" to="/about">About</NavLink>
                        <NavLink className="text-decoration-none text-gray me-3" to="/features">Features</NavLink>
                        <NavLink className="text-decoration-none text-gray me-3" to="/about">About</NavLink>
                    </Navbar.Brand>
                    <Navbar.Brand className="inline">
                        <NavLink className="text-decoration-none text-gray me-3" to="/login">Login</NavLink>
                    </Navbar.Brand>
                </Container>
            </Navbar>


        </>
    );
}

export default MyNavbar;