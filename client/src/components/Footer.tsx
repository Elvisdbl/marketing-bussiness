import "../styles/Footer.scss";

const Footer = () => {
  // const { pathname } = useLocation();
  // const [show, setShow] = useState(false);

  // const showHideClassName = show ? "display-block" : "display-none";

  // useEffect(() => {
  //   if (
  //     pathname === "/dashboard/admin/"
  //   ) {
  //     setShow(false);
  //   } else {
  //     setShow(true);
  //   }
  // }, [pathname]);

  return (
    <div className={`footer`}>
      <div className="container footer-top">
        <div className="row">
          <div className="col-md-4 text-center">
            <i className="pe-7s-map-2"></i>

            <h5>Get In Touch</h5>

            <p>2 Tucape, Tachira, Ven, E2-562</p>

            <p>
              <a href="mailto:contact@youremail.com">
                noreply@digitalplus.com.ve
              </a>
            </p>

            <p>+58 555 222 321</p>
          </div>

          <div className="col-md-4 text-center">
            <i className="pe-7s-comment"></i>

            <h5>Social Media</h5>

            <p>See bellow where you can find us.</p>

            <ul className="footer_social">
              <li>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-skype"></i>
                </a>
              </li>

              <li>
                <a href="#">
                  <i className="fab fa-dribble"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-md-4 text-center">
            <i className="pe-7s-link"></i>

            <h5>Useful Links</h5>

            <a href="#" className="footer-links">
              Our Cookies Policy
            </a>

            <a href="#" className="footer-links">
              Meet The Team Behind LeadPage
            </a>

            <a href="#" className="footer-links">
              Terms and Conditions
            </a>
          </div>
        </div>
      </div>

      <div className="container-fluid footer-bottom px-0">
        <div className="row no-gutters mx-0">
          <div className="col-md-12 text-center">
            <p>
              Copyright © 2021 <span className="template-name">Digital +</span>.
              Designed by{" "}
              <a href="https://github.com/Elvisdbl">Elvis Bonilla</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
