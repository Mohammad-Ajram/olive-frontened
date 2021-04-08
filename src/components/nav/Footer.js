import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">
              Olive Doon Associates deals in property consultation, purchase and
              sale of all kind of land and constructed property in and around
              the beautiful and serene valley city of Dehradun. This firm also
              deals in the construction of residential dwelling units right from
              survey of land, architectural support and construction by expert
              team at reasonable rates. We also deal in financial investments.
            </p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Popular Categories</h6>
            <ul className="footer-links">
              <Link to="/residential-properties">
                <li>Residential Properties</li>
              </Link>
              <Link to="/commercial-properties">
                {" "}
                <li>Commercial Properties</li>
              </Link>
              <Link to="/top-properties">
                {" "}
                <li>Top Properties</li>
              </Link>
              <Link to="/agricultural-properties">
                {" "}
                <li>Agricultural Properties</li>
              </Link>
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li>
                <Link to="/about-us">About Us</Link>
              </li>

              <li>
                <Link to="/contact-us">Contact us</Link>
              </li>
              <li>
                <Link to="/rent-or-sell-property">Rent/Sell a property</Link>
              </li>
              <li>
                <Link to="/find-property">Find a property</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Copyright &copy; {new Date().getFullYear()} All Rights Reserved by
              <Link to="/"> Olive Doon Associates</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  target="/"
                  href="https://www.facebook.com"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>

              <li>
                <a
                  className="instagram"
                  target="/"
                  href="https://www.instagram.com"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
