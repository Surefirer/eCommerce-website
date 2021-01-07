import { Container } from 'react-bootstrap';
import Paypal from '../images/paypal.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <Container className='footerContainer'>
        <div className='footerWrapper'>
          <div className='aboutUs'>
            <h3>About Us</h3>
            <p>
              YYkids provides high quality digital printable kids learning
              materials to make your life flow more efficient in a cost
              effective way. Spend more time with your kids, and let us do the
              search job.
            </p>
          </div>
          <div className='contact'>
            <h3>Contact</h3>
            <p>yykidssupport@gmail.com</p>
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
