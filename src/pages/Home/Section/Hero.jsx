import React from "react";
import heroLogo from "../../../assets/assets/img/illustration-1.webp";
import av1 from "../../../assets/assets/img/avatar-1.webp";
import av2 from "../../../assets/assets/img/avatar-2.webp";
import av3 from "../../../assets/assets/img/avatar-3.webp";
import av4 from "../../../assets/assets/img/avatar-4.webp";
import av5 from "../../../assets/assets/img/avatar-5.webp";
function Hero() {
  return (
    <>
      <section id="hero" className="hero section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="hero-content"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="company-badge mb-4">
                  <i className="bi bi-gear-fill me-2" />
                  Working for your success
                </div>
                <h1 className="mb-4">
                  Your Partner in Advanced <br />
                  {/* <br /> */}
                  <span className="accent-text">Technology & Innovation </span>
                </h1>
                <p className="mb-4 mb-md-5">
                From AI-driven solutions to comprehensive technology training and content, Qusbi Infotech empowers businesses and individuals with the knowledge and tools for the future.
                </p>
                <div className="hero-buttons">
                  <a
                    href="#about"
                    className="btn btn-primary me-0 me-sm-2 mx-1"
                  >
                    Get Started
                  </a>
                  <a className="btn btn-link mt-2 mt-sm-0 glightbox">
                    <i className="bi bi-play-circle me-1" />
                    Play Video
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="hero-image"
                data-aos="zoom-out"
                data-aos-delay={300}
              >
                <img src={heroLogo} alt="Hero Image" className="img-fluid" />
                <div className="customers-badge">
                  <div className="customer-avatars">
                    <img src={av1} alt="Customer 1" className="avatar" />
                    <img src={av2} alt="Customer 2" className="avatar" />
                    <img src={av3} alt="Customer 3" className="avatar" />
                    <img src={av4} alt="Customer 4" className="avatar" />
                    <img src={av5} alt="Customer 5" className="avatar" />
                    <span className="avatar more">12+</span>
                  </div>
                  <p className="mb-0 mt-2">
                    Trusted by over 12,000 users globally.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="row stats-row gy-4 mt-5"
            data-aos="fade-up"
            data-aos-delay={500}
          >
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-trophy" />
                </div>
                <div className="stat-content">
                  <h4> 25+</h4>
                  <p className="mb-0">Industry Awards Won</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-briefcase" />
                </div>
                <div className="stat-content">
                  <h4>6.5k</h4>
                  <p className="mb-0">Hours of Development Completed</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-graph-up" />
                </div>
                <div className="stat-content">
                  <h4>99k</h4>
                  <p className="mb-0">Lines of Code Delivered</p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-icon">
                  <i className="bi bi-award" />
                </div>
                <div className="stat-content">
                  <h4>80+</h4>
                  <p className="mb-0">Client Success Awards</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /Hero Section */}
    </>
  );
}

export default Hero;
