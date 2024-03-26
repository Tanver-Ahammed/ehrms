import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './components/Sidebar';
import MyNavbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Sidebar />
    </div>
  );
}

export default App;
