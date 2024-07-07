import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import XIcon from '@mui/icons-material/X';
import '../styles/Footer.css';



function Footer() {
    return ( <div className='footer'>
        <div className='socialMedia'>


        <FacebookIcon/>
        <InstagramIcon/>
        <GoogleIcon/>
        <XIcon/>

        </div>
     

    </div> );
}

export default Footer;