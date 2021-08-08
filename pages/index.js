import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
<>
  <title>Eatery Cafe and Restaurant Template</title>
  {/* 

Eatery Cafe Template 

http://www.templatemo.com/tm-515-eatery

*/}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=Edge" />
  <meta name="description" content />
  <meta name="keywords" content />
  <meta name="author" content />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1"
  />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/font-awesome.min.css" />
  <link rel="stylesheet" href="css/animate.css" />
  <link rel="stylesheet" href="css/owl.carousel.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  {/* MAIN CSS */}
  <link rel="stylesheet" href="css/templatemo-style.css" />
  {/* PRE LOADER */}
  <section className="preloader">
    <div className="spinner">
      <span className="spinner-rotate" />
    </div>
  </section>
  {/* MENU */}
  <section className="navbar custom-navbar navbar-fixed-top" role="navigation">
    <div className="container">
      <div className="navbar-header">
        <button
          className="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
          <span className="icon icon-bar" />
        </button>
        {/* lOGO TEXT HERE */}
        <a href="index.html" className="navbar-brand">
          Eatery <span>.</span> Cafe
        </a>
      </div>
      {/* MENU LINKS */}
      <div className="collapse navbar-collapse">
        <ul className="nav navbar-nav navbar-nav-first">
          <li>
            <a href="#home" className="smoothScroll">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="smoothScroll">
              About
            </a>
          </li>
          <li>
            <a href="#team" className="smoothScroll">
              Chef
            </a>
          </li>
          <li>
            <a href="#menu" className="smoothScroll">
              Menu
            </a>
          </li>
          <li>
            <a href="#contact" className="smoothScroll">
              Contact
            </a>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li>
            <a href="#">
              Call Now! <i className="fa fa-phone" /> 010 020 0340
            </a>
          </li>
          <a href="#footer" className="section-btn">
            Reserve a table
          </a>
        </ul>
      </div>
    </div>
  </section>
  {/* HOME */}
  <section id="home" className="slider" data-stellar-background-ratio="0.5">
    <div className="row">
      <div className="owl-carousel owl-theme">
        <div className="item item-first">
          <div className="caption">
            <div className="container">
              <div className="col-md-8 col-sm-12">
                <h3>Eatery Cafe &amp; Restaurant</h3>
                <h1>Our mission is to provide an unforgettable experience</h1>
                <a
                  href="#team"
                  className="section-btn btn btn-default smoothScroll"
                >
                  Meet our chef
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item item-second">
          <div className="caption">
            <div className="container">
              <div className="col-md-8 col-sm-12">
                <h3>Your Perfect Breakfast</h3>
                <h1>The best dinning quality can be here too!</h1>
                <a
                  href="#menu"
                  className="section-btn btn btn-default smoothScroll"
                >
                  Discover menu
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="item item-third">
          <div className="caption">
            <div className="container">
              <div className="col-md-8 col-sm-12">
                <h3>New Restaurant in Town</h3>
                <h1>Enjoy our special menus every Sunday and Friday</h1>
                <a
                  href="#contact"
                  className="section-btn btn btn-default smoothScroll"
                >
                  Reservation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* ABOUT */}
  <section id="about" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <div className="about-info">
            <div className="section-title wow fadeInUp" data-wow-delay="0.2s">
              <h4>Read our story</h4>
              <h2>We've been Making The Delicious Foods Since 1999</h2>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.4s">
              <p>
                Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae
                malesuada. Proin scelerisque risus et ipsum semper molestie sed
                in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo
                malesuada id.
              </p>
              <p>
                Sed elementum vel felis sed scelerisque. In arcu diam,
                sollicitudin eu nibh ac, posuere tristique magna. You can use
                this template for your cafe or restaurant website. Please tell
                your friends about{" "}
                <a href="https://plus.google.com/+templatemo" target="_parent">
                  templatemo
                </a>
                . Thank you.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="wow fadeInUp about-image" data-wow-delay="0.6s">
            <img src="images/about-image.jpg" className="img-responsive" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TEAM */}
  <section id="team" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
            <h2>Meet our chefs</h2>
            <h4>They are nice &amp; friendly</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="team-thumb wow fadeInUp" data-wow-delay="0.2s">
            <img src="images/team-image1.jpg" className="img-responsive" alt />
            <div className="team-hover">
              <div className="team-item">
                <h4>Duis vel lacus id magna mattis vehicula</h4>
                <ul className="social-icon">
                  <li>
                    <a href="#" className="fa fa-linkedin-square" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-envelope-o" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-info">
            <h3>New Catherine</h3>
            <p>Kitchen Officer</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="team-thumb wow fadeInUp" data-wow-delay="0.4s">
            <img src="images/team-image2.jpg" className="img-responsive" alt />
            <div className="team-hover">
              <div className="team-item">
                <h4>Cras suscipit neque quis odio feugiat</h4>
                <ul className="social-icon">
                  <li>
                    <a href="#" className="fa fa-instagram" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-flickr" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-info">
            <h3>Lindsay Perlen</h3>
            <p>Owner &amp; Manager</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-4">
          <div className="team-thumb wow fadeInUp" data-wow-delay="0.6s">
            <img src="images/team-image3.jpg" className="img-responsive" alt />
            <div className="team-hover">
              <div className="team-item">
                <h4>Etiam auctor enim tristique faucibus</h4>
                <ul className="social-icon">
                  <li>
                    <a href="#" className="fa fa-github" />
                  </li>
                  <li>
                    <a href="#" className="fa fa-google" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-info">
            <h3>Isabella Grace</h3>
            <p>Pizza Specialist</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* MENU*/}
  <section id="menu" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
            <h2>Our Menus</h2>
            <h4>Tea Time &amp; Dining</h4>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* MENU THUMB */}
          <div className="menu-thumb">
            <a
              href="images/menu-image1.jpg"
              className="image-popup"
              title="American Breakfast"
            >
              <img
                src="images/menu-image1.jpg"
                className="img-responsive"
                alt
              />
              <div className="menu-info">
                <div className="menu-item">
                  <h3>American Breakfast</h3>
                  <p>Tomato / Eggs / Sausage</p>
                </div>
                <div className="menu-price">
                  <span>$25</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* MENU THUMB */}
          <div className="menu-thumb">
            <a
              href="images/menu-image2.jpg"
              className="image-popup"
              title="Self-made Salad"
            >
              <img
                src="images/menu-image2.jpg"
                className="img-responsive"
                alt
              />
              <div className="menu-info">
                <div className="menu-item">
                  <h3>Self-made Salad</h3>
                  <p>Green / Fruits / Healthy</p>
                </div>
                <div className="menu-price">
                  <span>$18</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* MENU THUMB */}
          <div className="menu-thumb">
            <a
              href="images/menu-image3.jpg"
              className="image-popup"
              title="Chinese Noodle"
            >
              <img
                src="images/menu-image3.jpg"
                className="img-responsive"
                alt
              />
              <div className="menu-info">
                <div className="menu-item">
                  <h3>Chinese Noodle</h3>
                  <p>Pepper / Chicken / Vegetables</p>
                </div>
                <div className="menu-price">
                  <span>$34</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* MENU THUMB */}
          <div className="menu-thumb">
            <a
              href="images/menu-image4.jpg"
              className="image-popup"
              title="Rice Soup"
            >
              <img
                src="images/menu-image4.jpg"
                className="img-responsive"
                alt
              />
              <div className="menu-info">
                <div className="menu-item">
                  <h3>Rice Soup</h3>
                  <p>Green / Chicken</p>
                </div>
                <div className="menu-price">
                  <span>$28</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* MENU THUMB */}
          <div className="menu-thumb">
            <a
              href="images/menu-image5.jpg"
              className="image-popup"
              title="Project title"
            >
              <img
                src="images/menu-image5.jpg"
                className="img-responsive"
                alt
              />
              <div className="menu-info">
                <div className="menu-item">
                  <h3>Deli Burger</h3>
                  <p>Beef / Fried Potatoes</p>
                </div>
                <div className="menu-price">
                  <span>$46</span>
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6">
          {/* MENU THUMB */}
          <div className="menu-thumb">
            <a
              href="images/menu-image6.jpg"
              className="image-popup"
              title="Project title"
            >
              <img
                src="images/menu-image6.jpg"
                className="img-responsive"
                alt
              />
              <div className="menu-info">
                <div className="menu-item">
                  <h3>Big Flat Fried</h3>
                  <p>Pepper / Crispy</p>
                </div>
                <div className="menu-price">
                  <span>$30</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* TESTIMONIAL */}
  <section id="testimonial" data-stellar-background-ratio="0.5">
    <div className="overlay" />
    <div className="container">
      <div className="row">
        <div className="col-md-12 col-sm-12">
          <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="col-md-offset-2 col-md-8 col-sm-12">
          <div className="owl-carousel owl-theme">
            <div className="item">
              <p>
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Maecenas faucibus mollis interdum ullamcorper nulla
                non.
              </p>
              <div className="tst-author">
                <h4>Digital Carlson</h4>
                <span>Pharetra quam sit amet</span>
              </div>
            </div>
            <div className="item">
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Sed vestibulum orci quam.
              </p>
              <div className="tst-author">
                <h4>Johnny Stephen</h4>
                <span>Magna nisi porta ligula</span>
              </div>
            </div>
            <div className="item">
              <p>
                Vivamus aliquet felis eu diam ultricies congue. Morbi porta
                lorem nec consectetur porta quis dui elit habitant morbi.
              </p>
              <div className="tst-author">
                <h4>Jessie White</h4>
                <span>Vitae lacinia augue urna quis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* CONTACT */}
  <section id="contact" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        {/* How to change your own map point
      1. Go to Google Maps
      2. Click on your location point
      3. Click "Share" and choose "Embed map" tab
      4. Copy only URL and paste it within the src="" field below
	*/}
        <div className="wow fadeInUp col-md-6 col-sm-12" data-wow-delay="0.4s">
          <div id="google-map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3647.3030413476204!2d100.5641230193719!3d13.757206847615207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf51ce6427b7918fc!2sG+Tower!5e0!3m2!1sen!2sth!4v1510722015945"
              allowFullScreen
            />
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
          <div className="col-md-12 col-sm-12">
            <div className="section-title wow fadeInUp" data-wow-delay="0.1s">
              <h2>Contact Us</h2>
            </div>
          </div>
          {/* CONTACT FORM */}
          <form
            action="#"
            method="post"
            className="wow fadeInUp"
            id="contact-form"
            role="form"
            data-wow-delay="0.8s"
          >
            {/* IF MAIL SENT SUCCESSFUL  // connect this with custom JS */}
            <h6 className="text-success">
              Your message has been sent successfully.
            </h6>
            {/* IF MAIL NOT SENT */}
            <h6 className="text-danger">
              E-mail must be valid and message must be longer than 1 character.
            </h6>
            <div className="col-md-6 col-sm-6">
              <input
                type="text"
                className="form-control"
                id="cf-name"
                name="name"
                placeholder="Full name"
              />
            </div>
            <div className="col-md-6 col-sm-6">
              <input
                type="email"
                className="form-control"
                id="cf-email"
                name="email"
                placeholder="Email address"
              />
            </div>
            <div className="col-md-12 col-sm-12">
              <input
                type="text"
                className="form-control"
                id="cf-subject"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="form-control"
                rows={6}
                id="cf-message"
                name="message"
                placeholder="Tell about your project"
                defaultValue={""}
              />
              <button
                type="submit"
                className="form-control"
                id="cf-submit"
                name="submit"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
  {/* FOOTER */}
  <footer id="footer" data-stellar-background-ratio="0.5">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-8">
          <div className="footer-info">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Find us
              </h2>
            </div>
            <address className="wow fadeInUp" data-wow-delay="0.4s">
              <p>
                123 nulla a cursus rhoncus,
                <br /> augue sem viverra 10870
                <br />
                id ultricies sapien
              </p>
            </address>
          </div>
        </div>
        <div className="col-md-3 col-sm-8">
          <div className="footer-info">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Reservation
              </h2>
            </div>
            <address className="wow fadeInUp" data-wow-delay="0.4s">
              <p>090-080-0650 | 090-070-0430</p>
              <p>
                <a href="mailto:info@company.com">info@company.com</a>
              </p>
              <p>LINE: eatery247 </p>
            </address>
          </div>
        </div>
        <div className="col-md-4 col-sm-8">
          <div className="footer-info footer-open-hour">
            <div className="section-title">
              <h2 className="wow fadeInUp" data-wow-delay="0.2s">
                Open Hours
              </h2>
            </div>
            <div className="wow fadeInUp" data-wow-delay="0.4s">
              <p>Monday: Closed</p>
              <div>
                <strong>Tuesday to Friday</strong>
                <p>7:00 AM - 9:00 PM</p>
              </div>
              <div>
                <strong>Saturday - Sunday</strong>
                <p>11:00 AM - 10:00 PM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-2 col-sm-4">
          <ul className="wow fadeInUp social-icon" data-wow-delay="0.4s">
            <li>
              <a
                href="#"
                className="fa fa-facebook-square"
                attr="facebook icon"
              />
            </li>
            <li>
              <a href="#" className="fa fa-twitter" />
            </li>
            <li>
              <a href="#" className="fa fa-instagram" />
            </li>
            <li>
              <a href="#" className="fa fa-google" />
            </li>
          </ul>
          <div className="wow fadeInUp copyright-text" data-wow-delay="0.8s">
            <p>
              <br />
              Copyright © 2018 <br />
              Your Company Name
              <br />
              <br />
              Design:{" "}
              <a rel="nofollow" href="http://templatemo.com" target="_parent">
                TemplateMo
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* SCRIPTS */}
       <script src="js/jquery.js"></script>
     <script src="js/bootstrap.min.js"></script>
     <script src="js/jquery.stellar.min.js"></script>
     <script src="js/wow.min.js"></script>
     <script src="js/owl.carousel.min.js"></script>
     <script src="js/jquery.magnific-popup.min.js"></script>
     <script src="js/smoothscroll.js"></script>
     <script src="js/custom.js"></script>
</>


  )
}
