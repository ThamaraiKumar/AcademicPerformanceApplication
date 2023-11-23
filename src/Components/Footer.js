import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';


function Footer() {
  return (
    <div id="footer-body">
<footer className="new_footer_area bg_color">
<div className="new_footer_top">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6">
                <div className="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" >
                    <h3 className="f-title f_600 t_color f_size_18">Get in Touch</h3>
                    <p>Don’t miss any updates of our experience!</p>
                    <form className="f_subscribe_two mailchimp"  novalidate="true" _lpchecked="1">
                    <Link to="mailto:email@example.com" style={{textDecoration:'none'}}><input type="text" name="EMAIL" className="form-control memail" placeholder="Email"/></Link>
                        <button className="btn btn_get btn_get_two" type="submit">JOIN WITH US</button>
                        <p className="mchimp-errmessage"></p>
                        <p className="mchimp-sucmessage"></p>
                    </form>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s">
                    <h3 className="f-title f_600 t_color f_size_18">CONTACTS</h3>
                    <ul className="list-unstyled f_list">
                        <li><Link to="/apw" style={{textDecoration:'none'}}>Company</Link></li>
                        <li><Link to="/apw" style={{textDecoration:'none'}}>Android App</Link></li>
                        <li><Link to="/apw" style={{textDecoration:'none'}}>ios App</Link></li>
                        <li><Link to="/apw" style={{textDecoration:'none'}}>Desktop</Link></li>
                        <li><Link to="/apw" style={{textDecoration:'none'}}>Projects</Link></li>
                        <li><Link to="/apw" style={{textDecoration:'none'}}>My tasks</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                    <h3 className="f-title f_600 t_color f_size_18">Help</h3>
                    <ul className="list-unstyled f_list">
                        <li><Link to="/faq" style={{textDecoration:'none'}}>FAQ</Link></li>
                        <li><Link to="/termsandconditions" style={{textDecoration:'none'}}>Term &amp; conditions</Link></li>
                        <li><Link to="/" style={{textDecoration:'none'}}>Reporting</Link></li>
                        <li><Link to="/" style={{textDecoration:'none'}}>Documentation</Link></li>
                        <li><Link to="/privacy" style={{textDecoration:'none'}}>Privacy</Link></li>
                    </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6">
                <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s">
                    <h3 className="f-title f_600 t_color f_size_18">Link with Us</h3>
                    <div className="f_social_icon">
                        <Link to="/https://www.facebook.com/profile.php?id=61551692766112" className="fab fa-facebook"><FacebookIcon/></Link>
                        <Link to="/" className="fab fa-twitter"><TwitterIcon/></Link>
                        <Link to="/" className="fab fa-linkedin"><LinkedInIcon/></Link>
                        <Link to="/https://www.instagram.com/meera234_/?hl=en" className="fab fa-insta"><InstagramIcon/></Link>
                        <Link to="/" className="fab fa-youtube"><YouTubeIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="footer_bg">
        <div className="footer_bg_one"></div>
        <div className="footer_bg_two"></div>
    </div>
</div>
<div className="footer_bottom">
    <div className="container">
        <div className="row align-items-center">
            <div className="col-lg-6 col-sm-7">
                <p className="mb-0 f_400">© copyrights Inc.. 2023 All rights reserved.</p>
            </div>
            <div className="col-lg-6 col-sm-5 text-right">
                <p>Made with <i className="icon_heart"><FavoriteRoundedIcon style={{color:'red'}}/></i> by thamu</p>
            </div>
        </div>
    </div>
</div>
</footer>
    
    
    
    </div>
  )
}

export default Footer