import Logo from "../images/logo.jpeg";
import Office1 from "../images/office1.jpeg";
import Office2 from "../images/office2.jpeg";
const AboutUs = () => {
  return (
    <>
      <div className="about-cover">
        <div className="image-container">
          <img className="logo-image" src={Logo} alt="logo"></img>
        </div>
        <h2 className="about-heading text-center">Olive Doon Associates</h2>
      </div>
      <h2 className="section-title mt-5">About Us</h2>
      <p className="text-center quote">
        <q>
          <i>Honesty is the first chapter in the book of success.</i>
        </q>
      </p>
      <p className="about-text">
        Olive Doon Associates deals in property consultation, purchase and sale
        of all kind of land and constructed property in and around the beautiful
        valley city of Uttarakhand called Dehradun. This firm also deals in the
        construction of residential dwelling units right from survey of land,
        architectural support and construction by expert team at reasonable
        rates. We also deal in financial investments.
      </p>
      <p className="about-text">
        This company though not very old has been formed by educated,
        hardworking and trustworthy team members, who are well qualified and
        have vast experience in these fields. Most of the team members belong to
        the Armed Forces, those who do not belong, have strong connections with
        the Armed Forces.
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <img
              src={Office2}
              alt="office"
              style={{ objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
      </div>
      <p className="about-text">
        The company office is located within the city at a place called
        Nimbuwala, Garhi Cantt, barely 3 Kms from clock tower.
      </p>
      <p className="about-text">
        We at Olive Doon Associates are oriented towards achieving goals with
        utmost honesty, dedication and transparency. The interest of the clients
        and safeguarding of their hard earned money and ensuring good returns on
        the investments are of paramount importance to us. We toil relentlessly
        to ensure complete client satisfaction. Happy customers are our strength
        and motivation.
      </p>
      <p className="about-text">
        Post establishment of this company in January, 2021 we have been able to
        successfully settle five army officers, three JCOs and other ranks of
        the Indian Army apart from a few happy civilian customers from ONGC,
        Banks and other professions.
      </p>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 offset-md-2">
            <img
              src={Office1}
              alt="office"
              style={{ objectFit: "contain", width: "100%" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
