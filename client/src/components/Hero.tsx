const Hero = () => {
  return (
      <section className="home-section" id="home">
        <div className="home-section-overlay"></div>

        <div className="container">
          <div className="row">
            <div
              className="col-md-12 text-center"
              style={{ position: "relative" }}
            >
              <h1>We are a digital marketing agency</h1>

              <p className="hero-text">
                We solve your digital marketing problems all over the country.
              </p>

              <a href="#services" className="btn-green scrool">
                Explore Our Services
              </a>
              <br />

              <a href="#services" className="arrow-down scrool">
                <i className="pe-7s-angle-down-circle"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
