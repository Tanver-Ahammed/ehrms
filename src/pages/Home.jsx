import '../css/abt.css'
import HospitalImage from '../images/Hospital-1.jpg';

const Home = () => {
    return (
        <div style={{backgroundColor: '#dfeded', width: "100%", textAlign: "center"}}>
            <div>
                <h1 className="mt-5">Welcome to Our EHRMS Hospital App</h1>
                <p className="lead">We are dedicated to providing excellent healthcare services.</p>
            </div>
        </div>
    );
}

export default Home;