import './index.css';
import TaskSection from './pages/TaskSection';

function App() {
  return (
    <div className="app-container">
        <nav className='navbar'>
            <div className='logo'><h1>Startup</h1></div>
            <div className='nav-links'>
                <span>Home</span>
                <span>Services</span>
                <span className='active'>Pricing</span>
                <span>Team</span>
                <span>Testimonial</span>
                <span>Contact</span>
            </div>
            <button className='get-in-touch'>Get In Touch</button>
        </nav>
        <TaskSection></TaskSection>
    </div>
  );
}

export default App;