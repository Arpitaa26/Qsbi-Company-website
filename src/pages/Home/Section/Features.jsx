import React from 'react'
import feature2 from '../../../assets/assets/img/features-illustration-2.webp';
import feature1 from '../../../assets/assets/img/features-illustration-1.webp';
import feature3 from '../../../assets/assets/img/features-illustration-3.webp';
function Features() {
  return (
    <>
        <section id="features" className="features section">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
            <h2>What We Offer</h2>
            <p>
            Delivering innovation and insight-driven solutions at every level
            </p>
            </div>
            {/* End Section Title */}
            <div className="container">
            <div className="d-flex justify-content-center">
                <ul className="nav nav-tabs" data-aos="fade-up" data-aos-delay={100}>
                <li className="nav-item">
                    <a
                    className="nav-link active show"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-1"
                    >
                    <h4>Software</h4>
                    </a>
                </li>
                {/* End tab nav item */}
                <li className="nav-item">
                    <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-2"
                    >
                    <h4>Training</h4>
                    </a>
                    {/* End tab nav item */}
                </li>
                <li className="nav-item">
                    <a
                    className="nav-link"
                    data-bs-toggle="tab"
                    data-bs-target="#features-tab-3"
                    >
                    <h4>Solution</h4>
                    </a>
                </li>
                {/* End tab nav item */}
                </ul>
            </div>
            <div className="tab-content" data-aos="fade-up" data-aos-delay={200}>
                <div className="tab-pane fade active show" id="features-tab-1">
                <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Innovative Software Development</h3>
                    <p className="fst-italic">
                    Custom solutions built on modern frameworks and powerful technologies
                    </p>
                    <ul>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Duis aute irure dolor in reprehenderit in voluptate velit.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate trideta
                            storacalaperda mastiro dolore eu fugiat nulla pariatur.
                        </span>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                        src={feature1}
                        alt=""
                        className="img-fluid"
                    />
                    </div>
                </div>
                </div>
                {/* End tab content item */}
                <div className="tab-pane fade" id="features-tab-2">
                <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Technology Training & Workshops</h3>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <ul>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Duis aute irure dolor in reprehenderit in voluptate velit.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Provident mollitia neque rerum asperiores dolores quos qui
                            a. Ipsum neque dolor voluptate nisi sed.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate trideta
                            storacalaperda mastiro dolore eu fugiat nulla pariatur.
                        </span>
                        </li>
                    </ul>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                        src={feature2}
                        alt=""
                        className="img-fluid"
                    />
                    </div>
                </div>
                </div>
                {/* End tab content item */}
                <div className="tab-pane fade" id="features-tab-3">
                <div className="row">
                    <div className="col-lg-6 order-2 order-lg-1 mt-3 mt-lg-0 d-flex flex-column justify-content-center">
                    <h3>Intelligent Content Solutions</h3>
                    <ul>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Duis aute irure dolor in reprehenderit in voluptate velit.
                        </span>
                        </li>
                        <li>
                        <i className="bi bi-check2-all" />{" "}
                        <span>
                            Provident mollitia neque rerum asperiores dolores quos qui
                            a. Ipsum neque dolor voluptate nisi sed.
                        </span>
                        </li>
                    </ul>
                    <p className="fst-italic">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 text-center">
                    <img
                        src={feature3}
                        alt=""
                        className="img-fluid"
                    />
                    </div>
                </div>
                </div>
                {/* End tab content item */}
            </div>
            </div>
        </section>
        {/* /Features Section */}
        </>

  )
}

export default Features