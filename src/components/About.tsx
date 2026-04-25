import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para" style={{ lineHeight: "1.5" }}>
          Shipped and scaled AI products across sales, ecommerce, finance, healthcare.
          <br /><br />
          I help teams move from interesting demo to real product, real revenue.
        </p>
      </div>
    </div>
  );
};

export default About;
