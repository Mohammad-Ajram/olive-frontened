import Mail from "../images/icons/mail.svg";
import MapPin from "../images/icons/map-pin.svg";
import Whatsapp from "../images/icons/WhatsApp.svg";
import Logo from "../images/logo.jpeg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const ContactUs = () => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: 30.350500433614627,
    lng: 78.01796602763356,
  };
  return (
    <>
      <div className="about-cover">
        <div className="image-container">
          <img className="logo-image" src={Logo} alt="logo"></img>
        </div>
        <h2 className="about-heading text-center">Olive Doon Associates</h2>
      </div>
      <h2 className="section-title mt-5">Contact Us</h2>
      <div className="container">
        <img src={Mail} alt="mail icon" className="s-icon" />
        <span className="contact-tag u">olivedoonassociates@gmail.com</span>
        <br />
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
        <h5 className="section-title mt-5">We are located at</h5>
        <img src={MapPin} alt="mail icon" className="s-icon" />
        <span className="contact-tag">
          53, Nimbuwala, Garhi Cantt, Dehradun, Uttarakhand, 248001
        </span>
        <br />
        <br />
        <LoadScript googleMapsApiKey={process.env.REACT_GOOGLE_MAPS_API_KEY}>
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker key="location 1" position={defaultCenter} />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

export default ContactUs;
