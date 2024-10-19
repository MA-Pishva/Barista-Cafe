import "./_footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-social">
          <em>Where to find us?</em>
          <div className="footer-address">
            <img src="src/assets/images/map.svg" alt="map-icon" />
            <strong>Bandra West, Mumbai, Maharashtra 400050, India</strong>
          </div>
          <div className="footer-icons">
            <img src="src/assets/images/facebook.svg" alt="Facebook icon" />
            <img src="src/assets/images/twitter.svg" alt="Twitter icon" />
            <img src="src/assets/images/whatsapp.svg" alt="Whatsapp icon" />
            <img src="src/assets/images/instagram.svg" alt="Instagram icon" />
            <img src="src/assets/images/telegram.svg" alt="Telegram icon" />
          </div>
        </div>
        <div className="footer-contact">
          <em>Contact</em>
          <div className="footer-phone">
            <strong>Phone: </strong>
            <em>(65) 305 2409 671</em>
          </div>
          <div className="footer-email">
            <strong>Email: </strong>
            <em>hello@barista.co</em>
          </div>
        </div>
        <div className="footer-opening-hours">
          <em>Opening Hours</em>
          <div className="footer-mf">
            <strong>Monday - Friday: </strong>
            <em>9:00 - 18:00</em>
          </div>
          <div className="footer-saturday">
            <strong>Saturday: </strong>
            <em>11:00 - 16:30</em>
          </div>
          <div className="footer-sunday">
            <strong>Sunday: </strong>
            <em>Closed</em>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <em>Copyright &copy; Barista 2024</em>
        <div className="footer-design">
          <em>Design: </em>
          <strong>MohammadAli Pishva</strong>
        </div>
      </div>
    </>
  );
};

export default Footer;
