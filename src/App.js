import './App.css';
import Container from '@mui/material/Container';
import klassbite_logo from './img/logoklassbits.png';
import lineicon from './img/icon/line-icon.png';
import fbicon from './img/icon/fb-icon.png';
import Content from './components/Content';
import Courses from './components/Courses';
function App() {
  return (
    <div className="content">
      <Container>
        <div className="headerTop">
          <div className="flex-header">
            <img src={klassbite_logo} className="logo" alt="logo" />
            <div className="bg-menu-header">
              <ul className="menu-header">
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>Testimonial</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div className="row-social">
              <div className="line"><img src={lineicon} className="icon" alt="line" /></div>
              <div className="fb"><img src={fbicon} className="icon" alt="fackbook" /></div>
              <div className="bg-info">
              <p className='userid'>081-234-5678</p>
            </div>
            </div>
          </div>

        </div>

        
      </Container>
      <Content />
      <Courses />
    </div>
  );
}

export default App;
