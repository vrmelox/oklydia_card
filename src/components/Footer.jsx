import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareTwitter, faSquareFacebook, faSquareInstagram, faSkype } from '@fortawesome/free-brands-svg-icons';
import '../styles/footer.css'

function Footer() {
return (
    <footer>
        <p>
            <FontAwesomeIcon icon={faSquareTwitter} className='icon'/>
            <FontAwesomeIcon icon={faSquareFacebook} className='icon'/>
            <FontAwesomeIcon icon={faSquareInstagram} className='icon'/>
            <FontAwesomeIcon icon={faSkype} className='icon'/>
        </p>
    </footer>)
}

export default Footer;
