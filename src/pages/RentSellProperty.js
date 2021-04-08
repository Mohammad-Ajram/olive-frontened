import Logo from "../images/logo.jpeg";
import Mail from "../images/icons/mail.svg";
import MapPin from "../images/icons/map-pin.svg";
import Whatsapp from "../images/icons/WhatsApp.svg";
const RentSellProperty = () => {
  return (
    <>
      <div className="about-cover">
        <img className="logo-image" src={Logo} alt="logo"></img>
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
        <img src={Whatsapp} alt="mail icon" />
        <span className="contact-tag u">+91-9808137811</span>
        <br />
        <br />
        <img src={Whatsapp} alt="mail icon" />
        <span className="contact-tag u">+91-9808137811</span>
        <br />
        <br />
        <img src={Whatsapp} alt="mail icon" />
        <span className="contact-tag u">+91-9808137811</span>
        <br />
        <br />
      </div>
      <p className="about-text">You can also reach out to us via email</p>
      <div className="container">
        <img src={Mail} alt="mail icon" />
        <span className="contact-tag u">olivedoonassociates4@gmail.com</span>
        <br />
      </div>
      <br />
      <p className="about-text">You can also visit our office located at</p>
      <div className="container">
        <img src={MapPin} alt="mail icon" />
        <span className="contact-tag">
          56 Jawahar Colony, Ballupur Road, Dehradun
        </span>
      </div>
    </>
  );
};

export default RentSellProperty;
