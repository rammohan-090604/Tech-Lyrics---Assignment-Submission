import {Component} from "react";
import NavBar from "../NavBar";
import { CiCircleCheck } from "react-icons/ci";
import { FaHeadset } from "react-icons/fa";
import { CiMoneyBill } from "react-icons/ci";
import { FaSearch } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import './index.css'


class Home extends Component{
    render(){
        return(
            <div>
                <div className="main-container">
                    <NavBar />
                    <div className="text-container">
                        <div className="inner-text-container">
                            <h1 className="main-heading">Home away from home!</h1>
                            <h6 class="sub-heading">Book student accommodations near top universities and cities across the globe.</h6>
                            <div className="card-list">
                                <div className="card-item">
                                    <CiCircleCheck />
                                    <p className="card-item-list">Vrified Products</p>
                                </div>
                                <div className="card-item">
                                    <FaHeadset />
                                    <p className="card-item-list">24*7 Assistence</p>
                                </div>
                                <div className="card-item">
                                    <CiMoneyBill />
                                    <p className="card-item-list">Price Match Guarantee</p>
                                </div>
                            </div>
                            <div className="search-box">
                                <div className="search-container">
                                    <input placeholder="Select by City, University, Property" className="input-style" type="text" />
                                    <div className="search-icon">
                                        <FaSearch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="card-container">
                        <div className="card">
                            <img className="img-style" src="https://prod-static-assets.amberstudent.com/images/homepage-beds.svg" alt="1 M+ Beds" />
                            <h6 className="head-style">1 M+ Beds</h6>
                            <p className="para-style" >Book your perfect place from an extensive list of options.</p>
                        </div>
                        <div className="card">
                            <img className="img-style" src="https://prod-static-assets.amberstudent.com/images/homepage-universities.svg" alt="800+ Universities" />
                            <h6 className="head-style" >800+ Universities</h6>
                            <p className="para-style" >Find the best student homes near prestigious universities.</p>
                        </div>
                        <div className="card">
                            <img className="img-style" src="https://prod-static-assets.amberstudent.com/images/homepage-cities.svg" alt="250+ Global Cities" />
                            <h6 className="head-style">250+ Global Cities</h6>
                            <p className="para-style">We operate in major cities around the world.</p>
                        </div>
                        <div className="card">
                            <img className="img-style1" src="https://prod-static-assets.amberstudent.com/images/trustpilot-rating.svg" alt="4.8/5 on Trustpilot" />
                            <h6 className="head-style">4.8/5 on Trustpilot</h6>
                            <p className="para-style" >4000+ students have rated us excellent for our services.</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="second-container">
                        <div >
                            <h2 className="second-content" >Popular Cities Across the Globe</h2>
                            <p className="para-style" >Book student accommodations near top cities and universities around the world</p>
                        </div>
                        <div className="btn-container" >
                            <button type="button" className="btn-class-container">
                                <div class="amber-3xbgk5 amber-Button-inner">
                                    <span class="amber-Button-icon amber-Button-leftIcon amber-1x2hjpn">
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-uk.svg" alt="United Kingdom flag" width="22px" height="22px" />
                                    </span>
                                    <span>United Kingdom</span>
                                </div>
                            </button>
                            <button type="button" className="btn-class-container">
                                <div>
                                    <span>
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-aus.svg" alt="Australia flag" width="22px" height="22px" />
                                    </span>
                                    <span class="amber-Button-label amber-1kz4wl8">Australia</span>
                                </div>
                            </button>
                            <button type="button" className="btn-class-container">
                                <div>
                                    <span>
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-ire.svg" alt="Ireland flag"  width="22px" height="22px" />
                                    </span>
                                    <span>Ireland</span>
                                </div>
                            </button>
                            <button type="button" className="btn-class-container">
                                <div>
                                    <span>
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-us.svg" alt="United States flag" width="22px" height="22px" />
                                    </span>
                                    <span>United States</span>
                                </div>
                            </button>
                            <button type="button" className="btn-class-container">
                                <div>
                                    <span>
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-can.svg" alt="Canada flag" width="22px" height="22px" />
                                    </span><span class="amber-Button-label amber-1kz4wl8">Canada</span>
                                </div>
                            </button>
                            <button type="button" className="btn-class-container">
                                <div>
                                    <span>
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-ger.svg" alt="Germany flag" width="22px" height="22px" />
                                    </span>
                                    <span>Germany</span>
                                </div>
                            </button>
                            <button type="button" className="btn-class-container">
                                <div>
                                    <span>
                                        <img src="https://prod-static-assets.amberstudent.com/images/flag-esp.svg" alt="Spain flag" width="22px" height="22px" />
                                    </span>
                                    <span>Spain</span>
                                </div>
                            </button>
                        </div>
                        <div>
                            <div className="place-card-container">
                                
                                <div className="place-card">
                                    <a href="#" >
                                        <img src="https://prod-static-assets.amberstudent.com/images/popular-cities/London/London_2.jpg?w=250&amp;h=250&amp;fit=crop&amp;auto=format&amp;trim=auto&amp;q=10&amp;fm=pjpg" alt="London background" loading="lazy" />
                                        <p className="place-name">London</p>
                                    </a>
                                </div>
                                <div className="place-card">
                                    <a href="#">
                                        <img src="https://prod-static-assets.amberstudent.com/images/popular-cities/Birmingham/Birmingham_2.png?w=250&amp;h=250&amp;fit=crop&amp;auto=format&amp;trim=auto&amp;q=10&amp;fm=pjpg" alt="Birmingham background" loading="lazy" />
                                        <p className="place-name" >Birmingham</p>
                                    </a>
                                </div>
                                <div className="place-card">
                                    <a href="#">
                                        <img src="https://prod-static-assets.amberstudent.com/images/popular-cities/leicester.png?w=250&amp;h=250&amp;fit=crop&amp;auto=format&amp;trim=auto&amp;q=10&amp;fm=pjpg" alt="Leicester background" loading="lazy" />
                                        <p className="place-name">Leicester</p>
                                    </a>
                                </div>
                                <div className="place-card">
                                    <a href="#">
                                        <img src="https://prod-static-assets.amberstudent.com/images/home_page_icons/pictures/nottingham-1.jpg?w=250&amp;h=250&amp;fit=crop&amp;auto=format&amp;trim=auto&amp;q=10&amp;fm=pjpg" alt="Nottingham background" loading="lazy" />
                                        <p className="place-name">Nottingham</p>
                                    </a>
                                </div>
                                <div className="place-card">
                                    <a href="#" >
                                        <img src="https://prod-static-assets.amberstudent.com/images/popular-cities/Liverpool/Liverpool_1.jpg?w=250&amp;h=250&amp;fit=crop&amp;auto=format&amp;trim=auto&amp;q=10&amp;fm=pjpg" alt="Liverpool background" loading="lazy" />
                                        <p className="place-name">Liverpool</p>
                                    </a>
                                </div>
                                <div className="place-card">
                                    <a href="#">
                                        <img className="img-place-style" src="https://prod-static-assets.amberstudent.com/images/home_page_icons/pictures/london-1.jpg?w=250&amp;h=250&amp;fit=crop&amp;auto=format&amp;trim=auto&amp;q=10&amp;fm=pjpg" alt="Coventry background" loading="lazy" />
                                        <p className="place-name">Coventry</p>
                                    </a>
                                </div>
                            </div>
                            <button className="view-all-btn-style">View All Cities<FaArrowRight className="color" /></button>
                        </div>
                        <div>
                            <div className="second-container">
                                <h2 className="second-content">Amber Referral Program and Offers</h2>
                                <p className="para-style">Several promotions, deals and special offers crafted just for you.</p>
                            </div>
                            <div className="referal-card">
                                <div>
                                    <div>Win £50 in just a few steps! Refer a friend and earn your reward</div>
                                    <div >Turn connections into rewards. Get credited after successful booking.</div>
                                </div>
                                <button className="referal-btn-style" type="button" data-button="true" weight="500">
                                    <div>
                                        <span className="btn-text">Refer Now</span>
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Home;