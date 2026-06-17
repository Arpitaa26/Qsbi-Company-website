import React from "react";
import av1 from "../../../assets/assets/img/avatar-1.webp";
import av2 from "../../../assets/assets/img/about-2.webp";
import av3 from "../../../assets/assets/img/about-5.webp";
function AboutUs() {
  return (
    <>
      <section id="about" className="about section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4 align-items-center justify-content-between">
            <div className="col-xl-5" data-aos="fade-up" data-aos-delay={200}>
              <span className="about-meta">MORE ABOUT US</span>
              <h2 className="about-title">About Qusbi Infotech</h2>
              <p className="about-description">
                Qusbi Infotech is a forward-thinking technology solutions
                provider specializing in innovative software development,
                advanced training programs, and intelligent content solutions.
                Our team of experts is passionate about transforming ideas into
                impactful solutions using technologies like AI, ML, IoT, and
                full-stack development.
              </p>
              <div className="row feature-list-wrapper">
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li>
                      <i className="bi bi-check-circle-fill" /> Proven Tech
                      Expertise
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Transparent
                      Workflows
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Flexible
                      Engagement Models
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="feature-list">
                    <li>
                      <i className="bi bi-check-circle-fill" /> 15+ Years in
                      Business Services
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" />Flexible
                      Engagement Models
                    </li>
                    <li>
                      <i className="bi bi-check-circle-fill" /> Proven Tech
                      Expertise
                    </li>
                  </ul>
                </div>
              </div>
              <div className="info-wrapper">
                <div className="row gy-4">
                  <div className="col-lg-5">
                    <div className="profile d-flex align-items-center gap-3">
                      <img
                        src={av1}
                        alt="CEO Profile"
                        className="profile-image"
                      />
                      <div>
                        <h4 className="profile-name">Mario Smith</h4>
                        <p className="profile-position">CEO &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="contact-info d-flex align-items-center gap-2">
                      <i className="bi bi-telephone-fill" />
                      <div>
                        <p className="contact-label">Call us anytime</p>
                        <p className="contact-number">+123 456-789</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6" data-aos="fade-up" data-aos-delay={300}>
              <div className="image-wrapper">
                <div
                  className="images position-relative"
                  data-aos="zoom-out"
                  data-aos-delay={400}
                >
                  <img
                    src={av3}
                    alt="Business Meeting"
                    className="img-fluid main-image rounded-4"
                  />
                  <img
                    src={av2}
                    alt="Team Discussion"
                    className="img-fluid small-image rounded-4"
                  />
                </div>
                <div className="experience-badge floating">
                  <h3>
                    15+ <span>Years</span>
                  </h3>
                  <p>Of experience in business service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /About Section */}
    </>
  );
}

export default AboutUs;
