import { useState, useEffect } from 'react';

const PortfolioShowcaseModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('graphic-design');

  useEffect(() => {
    const handleOpen = (e: any) => {
      const { category } = e.detail;
      setActiveCategory(category);
      setIsOpen(true);
    };

    window.addEventListener('openPortfolioShowcase', handleOpen);
    return () => window.removeEventListener('openPortfolioShowcase', handleOpen);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="modal-overlay active" onClick={closeModal}></div>
      <div className="half-page-modal active" id="portfolioShowcaseModal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Portfolio Showcase</h3>
            <span className="close-modal" id="closeShowcaseModal" onClick={closeModal}>&times;</span>
          </div>
          
          <div className="modal-body">
            <div className="showcase-category-selector">
              <button 
                className={`category-btn ${activeCategory === 'graphic-design' ? 'active' : ''}`}
                onClick={() => setActiveCategory('graphic-design')}
              >
                <i className='bx bx-pencil'></i>
                Graphic Design
              </button>
              <button 
                className={`category-btn ${activeCategory === 'video-editing' ? 'active' : ''}`}
                onClick={() => setActiveCategory('video-editing')}
              >
                <i className='bx bx-video'></i>
                Video Editing
              </button>
              <button 
                className={`category-btn ${activeCategory === 'tech-development' ? 'active' : ''}`}
                onClick={() => setActiveCategory('tech-development')}
              >
                <i className='bx bx-code-alt'></i>
                Tech Dev
              </button>
            </div>
            
            <div className="showcase-content">
              {/* Graphic Design Showcase */}
              <div className={`showcase-category ${activeCategory === 'graphic-design' ? 'active' : ''}`}>
                <div className="portfolio-category-info">
                  <i className='bx bx-pencil'></i>
                  <h4>Graphic Design Portfolio</h4>
                  <p>Creative visual designs that capture attention and communicate effectively</p>
                </div>
                
                <div className="showcase-items">
                  <div className="showcase-item">
                    <div className="item-preview">
                      <img src="logo1.jpg" alt="Instagram Posts" onError={(e: any) => {e.target.src='https://via.placeholder.com/300x200/0cf/000?text=Instagram+Posts'}} />
                      <div className="item-overlay">
                        <button className="view-btn" onClick={() => window.open('logo1.jpg', '_blank')}>
                          <i className='bx bx-zoom-in'></i> View Full Size
                        </button>
                      </div>
                    </div>
                    <div className="item-info">
                      <h5>Instagram Posts</h5>
                      <p>Social media graphics designed for engagement and brand awareness</p>
                      <div className="item-features">
                        <span><i className='bx bx-check'></i> Custom Designs</span>
                        <span><i className='bx bx-check'></i> Brand Consistency</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="showcase-item">
                    <div className="item-preview">
                      <img src="thumbnail.jpg" alt="YouTube Thumbnails" onError={(e: any) => {e.target.src='https://via.placeholder.com/300x200/0cf/000?text=YouTube+Thumbnails'}} />
                      <div className="item-overlay">
                        <button className="view-btn" onClick={() => window.open('thumbnail.jpg', '_blank')}>
                          <i className='bx bx-zoom-in'></i> View Full Size
                        </button>
                      </div>
                    </div>
                    <div className="item-info">
                      <h5>YouTube Thumbnails</h5>
                      <p>High-click-through-rate thumbnail designs that drive views</p>
                      <div className="item-features">
                        <span><i className='bx bx-check'></i> High CTR</span>
                        <span><i className='bx bx-check'></i> Engaging Visuals</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="showcase-item">
                    <div className="item-preview">
                      <img src="ads-preview.jpg" alt="Ad Designs" onError={(e: any) => {e.target.src='https://via.placeholder.com/300x200/0cf/000?text=Ad+Designs'}} />
                      <div className="item-overlay">
                        <button className="view-btn" onClick={() => window.open('ads-preview.jpg', '_blank')}>
                          <i className='bx bx-zoom-in'></i> View Full Size
                        </button>
                      </div>
                    </div>
                    <div className="item-info">
                      <h5>Advertisement Designs</h5>
                      <p>Professional ad creatives for digital marketing campaigns</p>
                      <div className="item-features">
                        <span><i className='bx bx-check'></i> Conversion Focused</span>
                        <span><i className='bx bx-check'></i> Multi-Platform</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Editing Showcase */}
              <div className={`showcase-category ${activeCategory === 'video-editing' ? 'active' : ''}`}>
                <div className="portfolio-category-info">
                  <i className='bx bx-video'></i>
                  <h4>Video Editing Portfolio</h4>
                  <p>Professional video content that tells compelling stories and drives engagement</p>
                </div>
                
                <div className="showcase-items">
                  <div className="showcase-item">
                    <div className="item-preview">
                      <img src="short.jpg" alt="Short Form Video Preview" className="video-thumbnail" onError={(e: any) => {e.target.src='https://via.placeholder.com/300x200/0cf/000?text=Short+Form'}} />
                      <div className="item-overlay">
                        <a href="https://youtu.be/4WKgthPO8l8?si=lwG5m4abJPf2M9gN" className="view-btn" target="_blank" rel="noopener noreferrer">
                          <i className='bx bx-play'></i> Watch Video
                        </a>
                      </div>
                    </div>
                    <div className="item-info">
                      <h5>Short Form Videos</h5>
                      <p>Engaging Reels, TikTok, and Shorts content with dynamic editing</p>
                      <div className="item-features">
                        <span><i className='bx bx-check'></i> Fast-paced Editing</span>
                        <span><i className='bx bx-check'></i> Trend Integration</span>
                      </div>
                    </div>
                  </div>

                  <div className="showcase-item">
                    <div className="item-preview">
                      <img src="long.jpg" alt="Long Form Video Preview" className="video-thumbnail" onError={(e: any) => {e.target.src='https://via.placeholder.com/300x200/0cf/000?text=Long+Form'}} />
                      <div className="item-overlay">
                        <a href="https://youtu.be/qqVyPIDcqmw?si=hL8tQUse-qBKZmQ6" className="view-btn" target="_blank" rel="noopener noreferrer">
                          <i className='bx bx-play'></i> Watch Video
                        </a>
                      </div>
                    </div>
                    <div className="item-info">
                      <h5>Long Form Videos</h5>
                      <p>Detailed YouTube tutorials, documentaries, and presentations</p>
                      <div className="item-features">
                        <span><i className='bx bx-check'></i> Professional Narration</span>
                        <span><i className='bx bx-check'></i> Detailed Content</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Tech Development Showcase */}
              <div className={`showcase-category ${activeCategory === 'tech-development' ? 'active' : ''}`}>
                <div className="portfolio-category-info">
                  <i className='bx bx-code-alt'></i>
                  <h4>Tech Development Portfolio</h4>
                  <p>Innovative technology solutions built with modern frameworks and best practices</p>
                </div>
                
                <div className="showcase-items">
                  <div className="showcase-item">
                    <div className="item-preview">
                      <img src="web-dev-preview.jpg" alt="Web Development" onError={(e: any) => {e.target.src='https://via.placeholder.com/300x200/0cf/000?text=Web+Development'}} />
                      <div className="item-overlay">
                        <button className="view-btn">
                          <i className='bx bx-link-external'></i> View Project
                        </button>
                      </div>
                    </div>
                    <div className="item-info">
                      <h5>Web Development</h5>
                      <p>Responsive, modern websites built with cutting-edge technologies</p>
                      <div className="item-features">
                        <span><i className='bx bx-check'></i> Responsive Design</span>
                        <span><i className='bx bx-check'></i> SEO Optimized</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioShowcaseModal;