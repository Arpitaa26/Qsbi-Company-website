import React from 'react';
import testimonial_1 from '../../../assets/assets/img/testimonials/testimonials-2.jpg';
import testimonial_2 from '../../../assets/assets/img/testimonials/testimonials-2.jpg';
import testimonial_3 from '../../../assets/assets/img/testimonials/testimonials-3.jpg';
import testimonial_4 from '../../../assets/assets/img/testimonials/testimonials-4.jpg';
const testimonial_data = [
    {
        id: 1,
        image: testimonial_1,
        name: "Saul Goodman",
        position: "Ceo & Founder",
        rating: "bi bi-star-fill",
        review: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        id: 2,
        image: testimonial_2,
        name: "Sara Wilsson",
        position: "Designer",
        rating: "bi bi-star-fill",
        review: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        id: 3,
        image:  testimonial_3,
        name: "Jena Karlis",
        position: "Store Owner",
        rating: "bi bi-star-fill",
        review: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
    {
        id: 4,
        image: testimonial_4,
        name: "Matt Brandon",
        position: "Freelancer",
        rating: "bi bi-star-fill",
        review: "Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper."
    },
]
function Testimonials() {
  return (
    <>
        {/* Testimonials Section */}
        <section id="testimonials" className="testimonials section light-background">
            {/* Section Title */}
            <div className="container section-title" data-aos="fade-up">
            <h2>Testimonials</h2>
            <p>
                Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
                consectetur velit
            </p>
            </div>
            {/* End Section Title */}
            <div className="container">
            <div className="row g-5">
                {
                    testimonial_data.map((item) => {
                        return (
                            <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
                            <div className="testimonial-item">
                                <img
                                src={item.image}
                                className="testimonial-img"
                                alt=""
                                />
                                <h3>{item.name}</h3>
                                <h4>{item.position}</h4>
                                <div className="stars">
                                <i className={item.rating} />
                                <i className={item.rating} />
                                <i className={item.rating} />
                                <i className={item.rating} />
                                <i className={item.rating} />
                                </div>
                                <p>
                                <i className="bi bi-quote quote-icon-left" />
                                <span>
                                   {item.review}
                                </span>
                                <i className="bi bi-quote quote-icon-right" />
                                </p>
                            </div>
                            </div>
                        )
                    })

                }
            </div>
            </div>
        </section>
        {/* /Testimonials Section */}
        </>

  )
}

export default Testimonials