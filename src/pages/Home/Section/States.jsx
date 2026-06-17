import React from 'react';
import CountUp from 'react-countup';

function States() {
  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay={100}>
        <div className="row gy-4">
          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <h3><CountUp start={0} end={232} duration={1} /></h3>
              <p>Clients</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <h3><CountUp start={0} end={521} duration={1} /></h3>
              <p>Projects</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <h3><CountUp start={0} end={1453} duration={1.5} /></h3>
              <p>Hours Of Support</p>
            </div>
          </div>

          <div className="col-lg-3 col-md-6">
            <div className="stats-item text-center w-100 h-100">
              <h3><CountUp start={0} end={32} duration={1} /></h3>
              <p>Workers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default States;
