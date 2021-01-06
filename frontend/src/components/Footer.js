import { Container } from 'react-bootstrap';
import Paypal from '../images/paypal.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='footerContainer'>
        <div className='footerWrapper'>
          <div className='aboutUs'>
            <h3>About Us</h3>
            <p>YYkids provide high quality digital printable kids actity pdf</p>
          </div>
          <div className='contact'>
            <h3>Contact</h3>
            <p>yykidsadmin@gmail.com</p>
          </div>
          <div className='contact'>
            <h3>Support</h3>
            <ul>
              <li>FAQs</li>
              <li>Privacy & Security</li>
            </ul>
          </div>
          <div className='paypal-logo'>
            <img src={Paypal} alt='payment'></img>
          </div>
        </div>
        <p>Copyright &copy; YYkids {new Date().getFullYear()}</p>
      </Container>
    </footer>
  );
};

export default Footer;
