const PortfolioSection = () => {
  const handleViewPortfolio = (e: React.MouseEvent, category: string) => {
    e.preventDefault();
    const event = new CustomEvent('openPortfolioShowcase', { detail: { category } });
    window.dispatchEvent(event);
  };

  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Our <span>Portfolio</span></h2>
      
      <div className="portfolio-categories-container">
        {/* Graphic Design Portfolio */}
        <div className="portfolio-category-box" data-category="graphic-design">
          <div className="category-icon">
            <i className='bx bx-pencil'></i>
          </div>
          <h3>Graphic Design</h3>
          <p>View our creative design projects including social media graphics, thumbnails, and advertisements</p>
          <div className="portfolio-preview">
            <div className="preview-item">
              <span>Instagram Posts</span>
            </div>
            <div className="preview-item">
              <span>Thumbnails</span>
            </div>
            <div className="preview-item">
              <span>Ad Designs</span>
            </div>
          </div>
          <a href="#" className="btn view-portfolio-btn" data-category="graphic-design" onClick={(e) => handleViewPortfolio(e, 'graphic-design')}>View Design Portfolio</a>
        </div>

        {/* Video Editing Portfolio */}
        <div className="portfolio-category-box" data-category="video-editing">
          <div className="category-icon">
            <i className='bx bx-video'></i>
          </div>
          <h3>Video Editing</h3>
          <p>Explore our video editing projects for short-form and long-form content</p>
          <div className="portfolio-preview">
            <div className="preview-item">
              <span>Short Form</span>
            </div>
            <div className="preview-item">
              <span>Long Form</span>
            </div>
          </div>
          <a href="#" className="btn view-portfolio-btn" data-category="video-editing" onClick={(e) => handleViewPortfolio(e, 'video-editing')}>View Video Portfolio</a>
        </div>

        {/* Tech Development Portfolio */}
        <div className="portfolio-category-box" data-category="tech-development">
          <div className="category-icon">
            <i className='bx bx-code-alt'></i>
          </div>
          <h3>Tech Development</h3>
          <p>Discover our development projects including web apps, mobile apps, AI, and security solutions</p>
          <div className="portfolio-preview">
            <div className="preview-item">
              <span>Web Dev</span>
            </div>
            <div className="preview-item">
              <span>Mobile Dev</span>
            </div>
            <div className="preview-item">
              <span>AI Dev</span>
            </div>
            <div className="preview-item">
              <span>Security Dev</span>
            </div>
          </div>
          <a href="#" className="btn view-portfolio-btn" data-category="tech-development" onClick={(e) => handleViewPortfolio(e, 'tech-development')}>View Tech Portfolio</a>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;