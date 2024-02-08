import React, { useEffect, useState } from 'react';
import styles from './Home.module.css'
import { useDispatch } from 'react-redux';
import { fetchAdmin } from '../store/action/userAppStorage';



const AboutPage = () => {
    let [isLoading, setIsLoading] = useState(true)
    let [isShow, setIsShow] = useState(false)
    let dispatch = useDispatch()
    let [isAdminData, setIsAdminData] = useState({})



    


    let load = async () => {
        //fetch admin details
        let res = await dispatch(fetchAdmin())
        if (!res.bool) {
            return setIsLoading(false)
        }
        setIsAdminData(res.message)
        return setIsLoading(false)
    }

    let loader = async () => {
        return setIsLoading(false)
    }

    useEffect(() => {
        load()
        setTimeout(() => {
            loader()
        }, 3000);
        
        
    }, [load,loader])



  

    let togglemenu = () => {
        setIsShow(prev => !prev)
    }



    return (<>
    {isLoading ? <div className="preloader">
            <div className="loader">
                <div className="shadow"></div>
                <div className="box"></div>
            </div>
        </div> : ""}


        <div className="navbar-area">
            <div className="luvion-responsive-nav">
                <div className="container">
                    <div className="luvion-responsive-menu">
                        <div className="logo">
                            <a href="/">
                                <img src="front/img/favicon.png" alt="logo" />
                                <img src="front/img/favicon.png" alt="logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="luvion-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="/">
                            <img src="front/img/favicon.png" alt="logo" />
                            <img src="front/img/favicon.png" alt="logo" />
                        </a>

                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item"><a href="/" className="nav-link active">HOME</a></li>

                                <li className="nav-item"><a href="#" className="nav-link">PERSONAL </a>
                                    <ul className="dropdown-menu">
                                        <li className="nav-item"><a href="/savings" className="nav-link">SAVINGS ACCOUNT</a></li>

                                        <li className="nav-item"><a href="/current" className="nav-link">CURRENT ACCOUNT</a></li>
                                    </ul>
                                </li>

                                <li className="nav-item"><a href="/about" className="nav-link">ABOUT US</a></li>



                                <li className="nav-item"><a href="/cards" className="nav-link">CARDS</a></li>


                                <li className="nav-item"><a href="/faq" className="nav-link">FAQ</a></li>

                                <li className="nav-item"><a href="/contact" className="nav-link">CONTACT</a></li>
                            </ul>

                            <div className="others-options">
                                <a href="/login" target="_blank" className="login-btn">
                                    <strong><i className="flaticon-user"></i> ONLINE BANKING</strong></a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

            <div className={styles.togglebtn} onClick={togglemenu}>
                <i class="fas fa-bars"></i>
            </div>


            <div className={isShow ? `${styles.show}` : `${styles.menu_1}`}>
                <ul className={styles.listcontainer}>
                    <li className={styles.listitem}><a href="/" >HOME</a></li>

                    <li className={styles.listitemexpand}><a href="/savings" >SAVINGS ACCOUNT</a>

                    </li>
                    <li className={styles.listitemexpand}><a href="/current" >CURRENT ACCOUNT </a>

                    </li>

                    <li className={styles.listitem}><a href="/about" >ABOUT US</a></li>



                    <li className={styles.listitem}><a href="/cards" >CARDS</a></li>




                    <li className={styles.listitem}><a href="/contact" >CONTACT</a></li>
                    <li className={styles.listitemlast}><a href="/login" >LOGIN</a><a href="/signup" >SIGNUP</a></li>
                </ul>


            </div>
        </div>


        <div className="page-title-area item-bg1 jarallax" data-jarallax='{"speed": 0.3}'>
            <div className="container">
                <div className="page-title-content">
                    <h2>About Us</h2>
                    <p>Learn how we are focused on being flexible, resilient and responsible. </p>
                </div>
            </div>
        </div>


        <section className="about-area ptb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <span>How we were founded</span>
                            <h2>Easy, fee-free banking for entrepreneurs</h2>
                            <p>Since the Lincoln administration signed our national bank charter No. 24 in 1863, we’ve drawn on our financial strength to serve customers. This has been especially evident in times of need, such as during the COVID-19 pandemic. Our
                                response by the end of 2020 included a $20 million premium pay program for our employees, relief assistance and 108,000 Small Business Administration Paycheck Protection Program (PPP) loans for our customers, and $30 million in
                                expedited charitable contributions for our communities.</p>

                            <p>We also recognize that this past year has fundamentally changed banking by accelerating the shift to digital products and services.</p>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-image">
                            <img src="front/img/about-img1.jpg" alt="image" />
                        </div>
                    </div>
                </div>
            </div>
        </section>







        <section class="funfacts-area ptb-70 pt-0">
            <div class="container">


                <p>Deposit products are related services are offered by federal military pentagon echelon chase Bank,N.A. Member FDIC.
                </p>

                <p>
                    Equal Housing Opportunity
                </p>


                <p>
                    Investing involves market  risk, including possible loss of principal, and there is no guarantee that investment objectives will be achieved.Past performance is not a guarantee of future results.
                </p>


                <p>

                    federal military pentagon echelon Wealth Management is a business of federal military pentagon echelon Chase & Co., which offers investment products and services through federal military pentagon echelon Securities LLC(federal military pentagon echelon), a registered broker-dealer and investment adviser,member FINRA and SIPC. Certain advisory products may be offered through federal military pentagon echelon Private Wealth Advisors LLC(federal military pentagon echelon PWA), a registered investment adviser. Trust and fiduciary services including custody are offered though federal military pentagon echelon Chase Bank ,N.A(federal military pentagon echelon CB) and affliated trustt companies. Insurance products are made available through  Chase insurance Agency, Inc.(CIA), a licensed insurance agency, doing business as Chase Insurance Agency Services,Inc. in Florida. federal military pentagon echelons,CIA,federal military pentagon echelonPWA and federal military pentagon echelonCB are affliated companies under the common control of federal military pentagon echelon Chase & Co.


                </p>



                <p> INVESTMENT AND INSURANCE PRODUCTS ARE: </p>
                <p> --NOT FDIC INSURED</p>
                <p> --NOT INSURED BY ANY FEDERAL GOVERNMENT AGENCY</p>
                <p> --NOT A DEPOSIT OR OTHER OBLIGATION OF,OR GAURANTEED BY, federal military pentagon echelon CHASE BANK, N.A . OR ANY OF ITS AFFILIATES</p>
                <p>--SUBJECT TO INVESTMENT RISKS, INCLUDING POSSIBLE LOSS OF THE PRINCIPAL AMOUNT INVESTED
                </p>

            </div>
        </section>




        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <div className="logo">
                                <a href="/" className="black-logo"><img src="front/img/favicon.png" alt="logo" /></a>

                                <p>Our response by the end of 2020 included a $20 million premium pay program for our employees.</p>
                            </div>

                            <ul className="social-links">
                                <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                <li><a href="#" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Company</h3>

                            <ul className="list">
                                <li><a href="/about">About Us</a></li>
                                <li>
                                    <a href="/savings">Savings</a>
                                </li>
                                <li><a href="checking.html">Checking</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Support</h3>

                            <ul className="list">
                                <li><a href="/faq">FAQ's</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-sm-6 col-md-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li><span>Location:</span> {isAdminData.location}</li>
                                <li><span>Phone:</span> <a href="">{isAdminData.phone}</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="copyright-area">
                    <p>Copyright
                        <script>
                            document.write(new Date().getFullYear())
                        </script> | <a href="/" target="_blank">Smarter Banking</a></p>
                </div>
            </div>


        </footer>

        <div className="go-top"><i className="fas fa-arrow-up"></i></div>





    </>)


}

export default AboutPage