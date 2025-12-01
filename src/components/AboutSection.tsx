const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <h2 className="heading"><center>About <span>us</span></center></h2>
        <center><h3>Information Technology Company</h3></center>
        
        <div className="text-content">
          <p className="text">Afrirobot is a technology studio that blends innovation and design. 
            We focus on creating top notch motion graphics, futuristic visuals, 
            and smart software that take ideas and brands to new heights. With a unique mix of artistry and technology, 
            we develop solutions that inspire, engage, and connect with people from different cultures.</p>
          
          {/* Centered Image with Enhanced Animation */}
          <div className="about-img-container">
            <div className="tech-animation">
              <img src="cf.gif" alt="About Afrirobot" className="about-image" />
            </div>
          </div>
          
          <p className="text">Our mission is to help brands, creators, and organizations stand out in a fast changing digital landscape. 
            Whether it's telling immersive stories through motion graphics,
            developing innovative design concepts, or creating custom software, 
            Afrirobot pushes limits to bring futuristic ideas into reality.</p>
          
          <p className="moreText">At the core of our philosophy is the belief that technology should feel human,
            art should feel alive, and innovation should feel timeless. 
            This vision drives us to create experiences that resonate emotionally with people while reflecting the boldness of the future.</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;