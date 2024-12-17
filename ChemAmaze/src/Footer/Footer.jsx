import './Footer.css';
import BASF from "../Pages/pageAssests/BASF.png";
import PKC from "../Pages/pageAssests/PKC.png";
import IIT from "../Pages/pageAssests/IIT.png";
import Insta from "../Pages/pageAssests/Insta.png";
import FB from "../Pages/pageAssests/Facebook.png";
import YT from "../Pages/pageAssests/YT.png";

const Footer = () => {
    return ( 
        <>
        <div className='footer-container'>
        
        <div className='first-line'>
        <div className='left-footer'>
            {/* <div className='fordown'></div> */}
            <div className='upup'>
            <p>ChemAmaze is CSR initiative of</p>
            </div>
            <div className='upupdown'><img src={BASF} alt=''></img></div>
            <div className='upup'>Implemented by</div>
            <div className='updowndown'><img src={PKC} alt=''></img><img src={IIT} alt=''></img>    </div>
            
        </div>
        <div className='right-footer'>
            <div className='onehorizontal'>
                <h3>Company</h3>
                <p>Blog</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Pricing</p>
            </div>
            <div className='onehorizontal'>
            <h3>Documentations</h3>
            <p>Papers</p>
            <p>Press Conferences</p>
            <p>Blog</p>
            <p>Blog</p>

            </div>
            <div className='onehorizontal'>
            <h3>Terms of Service</h3>
            <p>Privacy Policy</p>
            <p>Cookies policy</p>
            <p>Blog</p>
            <p>Blog</p>

            </div>
        </div>
        </div>
        <div className="divider"></div>
        <div className='last-line'>
            <img src={Insta} alt=''></img>
            <img src={FB} alt=''></img>
            <img src={YT} alt=''></img>
        </div>
        </div>
        </>
     );
}
 
export default Footer;