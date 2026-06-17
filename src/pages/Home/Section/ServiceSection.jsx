import React from 'react'

function ServiceSection() {
  return (
    <>
    {/* Services Section */}
    <section id="services" className="services section light-background">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
        <h2>Services</h2>
        <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
        </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row g-4">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
            <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                <i className="bi bi-activity" />
                </div>
                <div>
                <h3>Nesciunt Mete</h3>
                <p>
                    Provident nihil minus qui consequatur non omnis maiores. Eos
                    accusantium minus dolores iure perferendis tempore et
                    consequatur.
                </p>
                <a href="service-details.html" className="read-more">
                    Read More <i className="bi bi-arrow-right" />
                </a>
                </div>
            </div>
            </div>
            {/* End Service Card */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={200}>
            <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                <i className="bi bi-diagram-3" />
                </div>
                <div>
                <h3>Eosle Commodi</h3>
                <p>
                    Ut autem aut autem non a. Sint sint sit facilis nam iusto sint.
                    Libero corrupti neque eum hic non ut nesciunt dolorem.
                </p>
                <a href="service-details.html" className="read-more">
                    Read More <i className="bi bi-arrow-right" />
                </a>
                </div>
            </div>
            </div>
            {/* End Service Card */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={300}>
            <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                <i className="bi bi-easel" />
                </div>
                <div>
                <h3>Ledo Markt</h3>
                <p>
                    Ut excepturi voluptatem nisi sed. Quidem fuga consequatur. Minus
                    ea aut. Vel qui id voluptas adipisci eos earum corrupti.
                </p>
                <a href="service-details.html" className="read-more">
                    Read More <i className="bi bi-arrow-right" />
                </a>
                </div>
            </div>
            </div>
            {/* End Service Card */}
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={400}>
            <div className="service-card d-flex">
                <div className="icon flex-shrink-0">
                <i className="bi bi-clipboard-data" />
                </div>
                <div>
                <h3>Asperiores Commodit</h3>
                <p>
                    Non et temporibus minus omnis sed dolor esse consequatur.
                    Cupiditate sed error ea fuga sit provident adipisci neque.
                </p>
                <a href="service-details.html" className="read-more">
                    Read More <i className="bi bi-arrow-right" />
                </a>
                </div>
            </div>
            </div>
            {/* End Service Card */}
        </div>
        </div>
    </section>
    {/* /Services Section */}
    </>

  )
}

export default ServiceSection