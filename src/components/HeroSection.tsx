const HeroSection = () => {
  const handleOrderClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const event = new CustomEvent('showServiceSelection');
    window.dispatchEvent(event);
  };

  return (
    <section className="home" id="home">
      <div className="home-content">
        <br />
        <h1>Design, Edit, Develop.<br /> Hire top talent today!</h1>
        <h3>Offering <span className="multiple-text"></span></h3>
        <p>with a simple package deal.</p>

        <div className="social-media">
          <a href="https://www.linkedin.com/company/afrirobot"><i className='bx bxl-linkedin-square'></i></a>
          <a href="https://www.instagram.com/afrirobot"><i className='bx bxl-instagram-alt'></i></a>
          <a href="https://www.youtube.com/@Afrirobot"><i className='bx  bxl-youtube'></i></a>
          <a href="https://t.me/afrirobot"><i className='bx  bxl-telegram'></i></a>
        </div>
        <a href="#" className="btn order-now-btn" id="homeOrderBtn" onClick={handleOrderClick}>Order Now</a>
      </div>
      <div className="home-img">
        <img src="logo.png" alt="" />
      </div>
    </section>
  );
};

export default HeroSection;