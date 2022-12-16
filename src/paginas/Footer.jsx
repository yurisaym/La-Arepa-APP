import { Link } from 'react-router-dom';
import logo2 from '../image/venefood.png';

const Footer = () => {
    return (    
        <div className="footer">
                <Link to="/">
                    <img src={logo2} alt="logo" />
                </Link>
                <p>© Todos os direitos reservados</p>
        </div>
    );
}
export default Footer;