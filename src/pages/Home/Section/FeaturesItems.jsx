import React from 'react'

function FeaturesItems() {
  return (
    <>
        {/* Features Cards Section */}
        <section id="features-cards" className="features-cards section">
            <div className="container">
            <div className="row gy-4">
                <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={100}
                >
                <div className="feature-box orange">
                    <i className="bi bi-award" />
                    <h4>Corporis voluptates</h4>
                    <p>
                    Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                    laboris nisi ut aliquip
                    </p>
                </div>
                </div>
                {/* End Feature Borx*/}
                <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={200}
                >
                <div className="feature-box blue">
                    <i className="bi bi-patch-check" />
                    <h4>Explicabo consectetur</h4>
                    <p>
                    Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab
                    aut inventore
                    </p>
                </div>
                </div>
                {/* End Feature Borx*/}
                <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={300}
                >
                <div className="feature-box green">
                    <i className="bi bi-sunrise" />
                    <h4>Ullamco laboris</h4>
                    <p>
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                    officia deserunt
                    </p>
                </div>
                </div>
                {/* End Feature Borx*/}
                <div
                className="col-xl-3 col-md-6"
                data-aos="zoom-in"
                data-aos-delay={400}
                >
                <div className="feature-box red">
                    <i className="bi bi-shield-check" />
                    <h4>Labore consequatur</h4>
                    <p>
                    Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores
                    omnis facere
                    </p>
                </div>
                </div>
                {/* End Feature Borx*/}
            </div>
            </div>
        </section>
        {/* /Features Cards Section */}
        </>

  )
}

export default FeaturesItems