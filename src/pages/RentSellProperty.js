import Logo from "../images/logo.jpeg";
import Mail from "../images/icons/mail.svg";
import MapPin from "../images/icons/map-pin.svg";
import Whatsapp from "../images/icons/WhatsApp.svg";
const RentSellProperty = () => {
  return (
    <>
      <div className="about-cover">
        <div className="image-container">
          <img className="logo-image" src={Logo} alt="logo"></img>
        </div>
        <h2 className="about-heading text-center">Olive Doon Associates</h2>
      </div>
      <h2 className="section-title mt-5">Rent / Sell a Property</h2>
      <p className="about-text">
        If you are interested in renting or selling your property then we can
        help you in achieving that. You can contact us on anyone of the contact
        numbers given below.
      </p>
      <div className="container">
        <br />
        <img src={Whatsapp} alt="mail icon" className="s-icon" />
        <span className="contact-tag u">+91-7060777910 (Parinay Thakur)</span>
        <br />
        <br />
        <img src={Whatsapp} alt="mail icon" className="s-icon" />
        <span className="contact-tag u">
          {" "}
          +91-7078888747 (Col Paras Basnett)
        </span>
        <br />
        <br />
        <img src={Whatsapp} alt="mail icon" className="s-icon" />
        <span className="contact-tag u">
          {" "}
          +91-9412967563 (Capt Satyendra Berry)
        </span>
        <br />
        <br />
      </div>
      <p className="about-text">You can also reach out to us via email</p>
      <div className="container">
        <img src={Mail} alt="mail icon" className="s-icon" />
        <span className="contact-tag u">olivedoonassociates@gmail.com</span>
        <br />
        <br />
      </div>
      <br />
      <p className="about-text">You can also visit our office located at</p>
      <div className="container">
        <img src={MapPin} alt="mail icon" className="s-icon" />
        <span className="contact-tag">
          53, Nimbuwala, Garhi Cantt, Dehradun, Uttarakhand, 248001
        </span>
        <br />
        <br />
      </div>
    </>
  );
};

export default RentSellProperty;
