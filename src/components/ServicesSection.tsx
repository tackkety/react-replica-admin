const ServicesSection = () => {
  const handleOrderClick = (e: React.MouseEvent, service: string, icon: string) => {
    e.preventDefault();
    const event = new CustomEvent('openOrderModal', { 
      detail: { service, icon }
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="services" id="services">
      <h2 className="heading">Our <span>Services</span></h2>
      <div className="services-container">
        <div className="services-box"> 
          <i className='bx bx-pencil'></i>
          <h3>Graphic Design</h3>
          <p>We design custom, creative graphic solutions that enhance your brand and deliver visuals that truly stand out.</p>
          <div className="service-features">
            <span><i className='bx bx-check'></i> Logo Design</span>
            <span><i className='bx bx-check'></i> Brand Identity</span>
            <span><i className='bx bx-check'></i> Social Media Graphics</span>
          </div>
          <div className="pricing-info">
            <span className="price-tag">From $15/design</span>
          </div>
          <a href="#" className="btn order-btn" data-service="graphic-design" data-icon="bx bx-code-alt" onClick={(e) => handleOrderClick(e, 'graphic-design', 'bx bx-code-alt')}>Order Now</a>
        </div>
        
        <div className="services-box">
          <i className='bx bx-video' style={{ color: '#0cf' }}></i> 
          <h3>Video Editing</h3>
          <p>We create custom, dynamic video edits that elevate your brand and drive engagement. Experience visuals that truly stand out.</p>
          <div className="service-features">
            <span><i className='bx bx-check'></i> Color Correction</span>
            <span><i className='bx bx-check'></i> Motion Graphics</span>
            <span><i className='bx bx-check'></i> Sound Design</span>
          </div>
          <div className="pricing-info">
            <span className="price-tag">From $25/video</span>
          </div>
          <a href="#" className="btn order-btn" data-service="video-editing" data-icon="bx bx-paint" onClick={(e) => handleOrderClick(e, 'video-editing', 'bx bx-paint')}>Order Now</a>
        </div>
        
        <div className="services-box">
          <i className='bx bx-code-alt'></i>
          <h3>Tech Dev</h3>
          <p>We create custom, innovative tech solutions that elevate your business. Experience technology that truly stands out.</p>
          <div className="service-features">
            <span><i className='bx bx-check'></i> Responsive Design</span>
            <span><i className='bx bx-check'></i> E-commerce Solutions</span>
            <span><i className='bx bx-check'></i> SEO Optimization</span>
          </div>
          <div className="pricing-info">
            <span className="price-tag">From $300/project</span>
          </div>
          <a href="#" className="btn order-btn" data-service="tech-development" data-icon="bx bx-bar-chart-alt" onClick={(e) => handleOrderClick(e, 'tech-development', 'bx bx-bar-chart-alt')}>Order Now</a>                   
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;